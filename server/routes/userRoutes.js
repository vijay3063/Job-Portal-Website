import express from "express";
import { applyForJob, getUserData, getUserJObApplications, updateUserResume } from "../controllers/userController.js";
import upload from '../config/multer.js'


const router = express.Router()

// Get user data
router.get('/user', getUserData)

// Apply for a job
router.post('/apply', applyForJob)

// Get applied jobs data
router.get('/applications', getUserJObApplications)

// Update user profile (resume)
router.post('/update-resume', upload.single('resume') , updateUserResume)

export default router
