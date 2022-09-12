import Contact from './Components1/Contact';
import About from './Components1/About';
import Home from './Components1/Home';
import NavBar from './Components1/NavBar';
//import NavigationBar from './components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import {Route,Routes} from 'react-router-dom';
import Signin from './Components1/Signin';
function App() {
return (
<div className="App">
  <NavBar></NavBar>
 <Routes>

<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route exact path="/contact" element={<Contact/>}></Route>
<Route exact path="/Signin" element={<Signin/>}></Route> 
</Routes> 

</div> 

);
}
export default App;
