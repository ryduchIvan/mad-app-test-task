//Components
import {Register} from "./Register";
//Route
import {Link} from "react-router-dom";
import { Login } from "components/user/Login";
export const LoginPage = () =>{

	
	return (
		<form>
			<h2>Login</h2>
			<Login/>
			<p>
				or <Link to="/register">Register</Link>
			</p>
		</form>
	)
}