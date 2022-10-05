//CSS
import "./dragons.scss";
//SVG
import loading  from "../../assets/icons/loading.svg";
//REACT HOOKS
import {useEffect} from "react";
//REDUX HOOKS
import { useAppDispatch, useAppSelector } from "redux-hooks";
//ACTIONS
import { getAllDragons } from "./dragonsSlice";
//Selectors
import {selectAllDragons} from "./dragonsSelectors";
//COMPONENTS
import { Dragon } from "types";
import { DragonsItem } from "./DragonsItem";
export const DragonsList = () =>{
	const {status, list, error} = useAppSelector(selectAllDragons)
	const dispatch = useAppDispatch();
	useEffect(() =>{
		dispatch(getAllDragons());
		if (list.length > 0) {
			localStorage.setItem("dragons", JSON.stringify(list))
		}
	}, []);
	const localData: any = localStorage.getItem("dragons");
	const data: Dragon[] = JSON.parse(localData) || list;
	return (
		<div className="main__dragons__list">
			{
				status === "loading" && !localData && <img src={loading} alt="preload" />
			}
			{
				status === "rejected" && <h2 className="error__message">{error}</h2>
			}
			{
				data && data.map((dragon: Dragon) => <DragonsItem key={dragon.id} {...dragon}/>)
			}
		</div>
	)
}