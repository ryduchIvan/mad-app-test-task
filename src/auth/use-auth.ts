import {useAppSelector} from "redux-hooks";
import {selectUser} from "features/user/selectorUser";
export const useAuth = () =>{
	const {id, email, token} = useAppSelector(selectUser);
	if (email) {
		localStorage.setItem("email", JSON.stringify(email));	
	}
	const localEmail = localStorage.getItem("email");
	return {
		isAuth: !!localEmail,
		email,
		token,
		id
	}
}