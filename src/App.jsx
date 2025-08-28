@@ .. @@
 import React, { useContext } from 'react'
 import { Route, Routes } from 'react-router-dom';
 import Home from './pages/Home';
 import Applications from './pages/Applications';;
 import ApplyJob from './pages/ApplyJob';
+import Login from './pages/Login';
+import Register from './pages/Register';
+import Profile from './pages/Profile';
+import SavedJobs from './pages/SavedJobs';
+import AppliedJobs from './pages/AppliedJobs';
+import CandidateSearch from './pages/CandidateSearch';
+import CompanyProfile from './pages/CompanyProfile';
+import JobCategories from './pages/JobCategories';
+import Companies from './pages/Companies';
+import JobDetails from './pages/JobDetails';
 import RecruiterLogin from './components/RecruiterLogin';
 import { AppContext } from './context/AppContext';
 import DashBoard from './pages/DashBoard';
 import AddJob from './pages/AddJob';
 import ManageJobs from './pages/ManageJobs';
 import ViewApplications from './pages/ViewApplications';
 import 'quill/dist/quill.snow.css';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

 const App = () => {
   const {showRecruiterLogin, companyToken} = useContext(AppContext)
   return (
     <div>
       { showRecruiterLogin && <RecruiterLogin />}
       <ToastContainer />
       <Routes>
         <Route path="/" element={<Home />} />
+        <Route path="/login" element={<Login />} />
+        <Route path="/register" element={<Register />} />
+        <Route path="/profile" element={<Profile />} />
+        <Route path="/saved-jobs" element={<SavedJobs />} />
+        <Route path="/applied-jobs" element={<AppliedJobs />} />
+        <Route path="/candidate-search" element={<CandidateSearch />} />
+        <Route path="/company-profile" element={<CompanyProfile />} />
+        <Route path="/job-categories" element={<JobCategories />} />
+        <Route path="/companies" element={<Companies />} />
+        <Route path="/job/:id" element={<JobDetails />} />
         <Route path="/apply-job/:id" element={<ApplyJob />} />
         <Route path="/applications" element={<Applications />} />
         <Route path="/dashboard" element={<DashBoard />}>
           {
             companyToken ? <>
               <Route path='add-job' element={<AddJob />} />
               <Route path='manage-jobs' element={<ManageJobs />} />
               <Route path='view-applications' element={<ViewApplications />} />
             </> : null
           }
         </Route>
       </Routes>
     </div>
   )
 }

 export default App;