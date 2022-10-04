import { SignUp } from "components/user/SignUp";
import {Link} from "react-router-dom";

export const Register = () =>{

	return (
		<div>
			<h2>Register</h2>
			<SignUp/>
			<p>
				Already have an account ? <Link to="/login">Login in</Link>
			</p>
		</div>
	)
}