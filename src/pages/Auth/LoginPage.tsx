//CSS
import "./auth.scss";
//Route
import {Link} from "react-router-dom";
import { Login } from "components/User/Login";
export const LoginPage = () =>{

	
	return (
		<div className="auth">
			<h2 className="auth__title">Login</h2>
			<Login/>
			<p className="auth__text">
				If you dont have an account, please register <Link to="/register">Register</Link>
			</p>
		</div>
	)
}