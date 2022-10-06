import {Form} from "./Form";
import {useAppDispatch} from "redux-hooks";
import {setUser} from "features/user/userSlice";
import {useNavigate} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const Login = () =>{
	const dispatch = useAppDispatch();
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
		})
		.catch(() => alert("Error password or email!"));
	};
	return(
		<Form title="sing in" handleClick={handleLogin}></Form>
	)
}