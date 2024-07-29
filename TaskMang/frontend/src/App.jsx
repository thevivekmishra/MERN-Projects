import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTasks from './Pages/AllTasks'
import ImportantTasks from './Pages/ImportantTasks'
import CompletedTasks from './Pages/CompletedTasks'
import IncompletedTasks from './Pages/IncompletedTasks'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

const App = () => {
  return (
    <div className='bg-gray-900 text-gray-100 h-screen relative'>
      <Router>
        <Routes>
          {/* to show component right side we have to mount all component inside home route */}
          <Route exact path='/' element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="/importanttasks" element={<ImportantTasks />} />
            <Route path="/completedtasks" element={<CompletedTasks/>} />
            <Route path="/incompletedtasks" element={<IncompletedTasks />} />
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </Router>
    </div >
  )
}

export default App