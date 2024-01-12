import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
