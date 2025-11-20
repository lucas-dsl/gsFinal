import Header from './components/Header'
import Footer from './components/Footer'
import Members from './pages/Members'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/members" element={<Members />} />
          <Route path="/members/:rm" element={<Members />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App