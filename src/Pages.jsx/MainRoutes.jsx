import React from 'react'
import { Routes, Route} from "react-router-dom"
import JobForm from './JobForm'
import JobList from './JobList'

const MainRoutes = () => {
    return (
        <Routes>
          <Route path='/joblist' element={<JobList/>}/>
          <Route path='/jobform' element={<JobForm/>}/>
        </Routes>
    )
}

export default MainRoutes
