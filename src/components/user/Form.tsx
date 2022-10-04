import "./user.scss";
import {useState} from "react";
interface FormProps {
	title: string,
	handleClick: (email: string , password: string) => any
}
export const Form = ({title, handleClick}:FormProps) =>{
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	return(
		<div className="auth__inputs">
			<input
			 	type="email"
				name=""
			 	id=""
			 	value={email}
				onChange={(event) => setEmail(event.target.value)}
				placeholder="email"
				className="auth__input"
				/>
			<input
			 type="password" 
			 value={pass}
			 onChange={(event) => setPass(event.target.value)}
			 placeholder="password"
			 className="auth__input"
			 />
			 <button className="auth__btn" onClick={() => {
				handleClick(email, pass)}
				}>
				{title}
			 </button>
		</div>
	)
}