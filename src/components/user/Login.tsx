import {Form} from "./Form";
import {useAppDispatch} from "redux-hooks";
import {setUser, removerUser} from "features/user/userSlice";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const Login = () =>{
	const navigate = useNavigate();
	const handleLogin = (email: string, password: string) =>{
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
		.then(({user}) =>{
			dispatch(setUser({
				email: user.email,
				id: user.uid,
				token: user.refreshToken,
			}));
			navigate("/")
			console.log(22);
		})
		.catch(() => alert("Error user!"));
	};
	const dispatch = useAppDispatch();
	return(
		<Form title="sing in" handleClick={handleLogin}></Form>
	)
}