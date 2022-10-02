//REDUX HOOKS
import {useAppDispatch, useAppSelector} from "redux-hooks";
//Actions
import { loadDragon } from "./dragonSlice";
//Selector
import {selectDragon} from "./dragonSelectors";
//REACT HOOKS
import {useEffect} from "react";
import { DragonItem } from "./DragonItem";
export const DragonsList = () =>{
	const dispatch  = useAppDispatch();
	const {status, list, error} = useAppSelector(selectDragon);
	useEffect(() =>{
		dispatch(loadDragon())
	}, [])
	return (
		<main className="main">
			<ul>
				{
					list  && <DragonItem key={list.id} {...list}/> 
				}
		</ul>
		</main>
	)
}