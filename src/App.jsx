import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import AddJob from './pages/AddJob'
import NotFound from './pages/NotFound'
import { Toaster } from 'react-hot-toast'


function App() {

  return (
    <>
    <Toaster position='top-right' />
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='add-job' element={<AddJob />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
