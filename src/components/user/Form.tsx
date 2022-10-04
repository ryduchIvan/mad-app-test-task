import {useState} from "react";
interface FormProps {
	title: string,
	handleClick: (email: string , password: string) => any
}
export const Form = ({title, handleClick}:FormProps) =>{
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	return(
		<div>
			<input
			 	type="email"
				name=""
			 	id=""
			 	value={email}
				onChange={(event) => setEmail(event.target.value)}
				placeholder="email"
				/>
			<input
			 type="password" 
			 value={pass}
			 onChange={(event) => setPass(event.target.value)}
			 placeholder="password"
			 />
			 <button onClick={() => {
				handleClick(email, pass)}
				}>
				{title}
			 </button>
		</div>
	)
}