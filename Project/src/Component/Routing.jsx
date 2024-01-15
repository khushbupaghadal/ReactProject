import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Project from './Project'
import Albums from './Albums'
import RecentActivities from './RecentActivities'
import Login from './Login'
import Registration from './Registration'
import Page404 from './Page404'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'


const Routing = () => {
  const [Islogin, setIslogin] = useState(JSON.parse(localStorage.getItem("IsLogin")))
  return (
    <>
      <BrowserRouter>
            <Routes>
                {
                    Islogin ?
                    (
                      <>
                        <Route path='/' element={<Navigate to = '/dashboard'/>}/>
                        <Route path='/dashboard' element={<Dashboard setIslogin={setIslogin}/>}/>
                        <Route path='/profile' element={<Profile setIslogin={setIslogin}/>}/>
                        <Route path='/project' element={<Project setIslogin={setIslogin}/>}/>
                        <Route path='/albums' element={<Albums setIslogin={setIslogin}/>}/>
                        <Route path='/recentactivities' element={<RecentActivities setIslogin={setIslogin}/>}/>
                        <Route path='/profileDetails' element={<ProfileDetails setIslogin={setIslogin}/>}/>
                      </>
                    ):
                    (
                      <>
                        <Route path='/' element={<Navigate to = '/login'/>}/>
                        <Route path='/login' element={<Login  setIslogin={setIslogin}/>}/>
                      </>
                    )
                }
                <Route path='/registration' element={<Registration />}/>
                <Route path='*' element={<Page404 />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing
