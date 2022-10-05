//HOOKS
import {Navigate} from "react-router-dom";
import { useAuth } from "auth/use-auth";
//Components
import { Main } from "components/Main/Main"
export const HomePage = () =>{
	const {isAuth} = useAuth();
	return isAuth ? (
		<>
			<Main/>
		</>
	): (
		<Navigate to="/login"/>
	)
}