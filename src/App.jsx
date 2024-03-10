import Nomination from './components/Forms/NominationForm'
import Landingpage from "./components/Landingpage";
import NavBar from './components/NavBar';
import Terms from "./components/T&C"; 
import Register from './components/Forms/Reg_Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Landingpage />} />
      <Route exact path="/termsandconditions" element={<Terms />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/nomination" element={<Nomination />} />
    </Routes>
  </Router>
  )
}

export default App
