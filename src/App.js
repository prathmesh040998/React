import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './Components/Courses';
import Testimonials from './Components/Testimonials';
//import img1 from './images/car.jpg'
import Logincomp from './Components/Logincomp';
import Forgot from './Components/Forgot';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/Courses" component={Courses} />
					<Route exact path="/Testimonials" component={Testimonials} />
					<Route exact path="/Logincomp" component={Logincomp} />
					<Route exact path="/Forgot" component={Forgot} />
					<Route
						exact
						path="/home/prathmesh/React1/hello-world/Registration.html/Registration.html"
						render={() => {
							window.location.href = '/home/prathmesh/React1/hello-world/Registration.html';
						}}
					/>
				</Switch>
			</BrowserRouter>
			{/* <Forgot /> */}
		</div>
	);
}

export default App;
