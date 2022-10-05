//CSS
import "./auth.scss";
//Route
import { SignUp } from "components/User/SignUp";
import {Link} from "react-router-dom";

export const Register = () =>{
	return (
		<div className="auth__box">
			<div className="auth">
			<h2 className="auth__title">Register</h2>
			<SignUp/>
			<p className="auth__text">
				Already have an account ? <Link to="/login">Login in</Link>
			</p>
		</div>
		</div>
	)
}