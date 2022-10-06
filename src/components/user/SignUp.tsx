import {Form} from "./Form";
import {useAppDispatch} from "redux-hooks";
import {useNavigate} from "react-router-dom";
import { setUser } from "features/user/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const SignUp = () =>{
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleRegister = (email: string, password: string) =>{
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		.then(({user}) =>{
			dispatch(setUser({
				email: user.email,
				id: user.uid,
				token: user.refreshToken
			}));
			navigate("/")
		})
		.catch((error) => alert("this account already exists"));
	};
	return(
		<Form title="register" handleClick={handleRegister}/>
	)
}