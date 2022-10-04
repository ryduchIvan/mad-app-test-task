import {Navigate} from "react-router-dom";
import { Main } from "components/Main/Main"
import { useAuth } from "auth/use-auth";
import { useAppDispatch } from "redux-hooks";
import {removerUser} from "features/user/userSlice";
export const HomePage = () =>{
	const {isAuth, email} = useAuth();
	const dispatch = useAppDispatch();
	console.log(isAuth);
	return isAuth ? (
		<>
			<Main/>
		</>
	): (
		<Navigate to="/login"/>
	)
}