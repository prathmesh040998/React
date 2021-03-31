
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Courses from './Components/Courses';
import Testimonials from './Components/Testimonials';
//import img1 from './images/car.jpg'
import Logincomp from "./Components/Logincomp";
function App() {
  return (
    <div className="App">

  
    <BrowserRouter>
     <Navbar />
     <Switch>
     <Route exact path="/Courses" component={Courses} />
     <Route exact path="/Testimonials" component={Testimonials} />
      <Route exact path="/Logincomp" component={Logincomp} />
     </Switch>
     </BrowserRouter>
     
  
    </div>
  );
}

export default App;
