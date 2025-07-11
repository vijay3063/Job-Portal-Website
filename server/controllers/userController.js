import Job from '../models/Job.js';
import JobApplication from '../models/JobApplication.js';
import User from '../models/User.js';
import { v2 as cloudinary } from 'cloudinary';

// Get user data
export const getUserData = async (req, res) => {

    const userId = req.auth.userId

    try {

        const user = await User.findById(userId)

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({success: true, user})
        
    } catch (error) {
        res.json({ success: false, message: error.message });
    }

}

// Apply for a Job
export const applyForJob = async (req, res) => {

    const { jobId } = req.body

    const userId = req.auth.userId

    try {

        const isAlreadyApplied = await JobApplication.find({jobId, userId})

        if (isAlreadyApplied.length > 0) {
            return res.json({success: false, message:"You have already applied for this job."})
        }

        const jobData = await Job.findById(jobId)

        if (!jobData) {
            return res.json({success: false, message:"Job not found."})
        }

        await JobApplication.create({
            companyId: jobData.companyId,
            userId,
            jobId,
            date: Date.now()
        })
        
        res.json({success: true, message:"You have successfully applied for the job."})

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
    
}

// Get uer applied applications
export const getUserJObApplications = async (req, res) => {

    try {

        const userId = req.auth.userId

        const applications = await JobApplication.find({userId}).populate('companyId', 'name email image').populate('jobId', 'title desription location category level salary').exec()

        if (!applications) {
            return res.json({success: false, message:'No job applications found for this user.'})
        }

        return res.json({success: true, applications})
        
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

// Update user profile (resume)
export const updateUserResume = async (req, res) => {

    try {

        const userId = req.auth.userId

        const resumeFile = req.file

        const userData = await User.findById(userId)

        if (resumeFile) {
            const resumeUpload = await cloudinary.uploader.upload(resumeFile.path)
            userData.resume = resumeUpload.secure_url
        }

        await userData.save()

        return res.json({success: true, message:"Resume updated successfully."})
        
    } catch (error) {

        res.json({ success: false, message: error.message })
        
    }
    
}