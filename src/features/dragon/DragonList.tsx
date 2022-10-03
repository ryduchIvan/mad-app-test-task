//REDUX HOOKS
import {useAppDispatch, useAppSelector} from "redux-hooks";
//Actions
import { loadDragon } from "./dragonSlice";
//Selector
import {selectDragon} from "./dragonSelectors";
//REACT HOOKS
import {useEffect} from "react";
import { DragonDetails } from "./DragonDetails";
import { DragonImage } from "../../components/Carousel/DragonImages";
export const DragonsList = () =>{
	const dispatch  = useAppDispatch();
	const {status, list, error} = useAppSelector(selectDragon);
	useEffect(() =>{
		dispatch(loadDragon())
	}, [])
	const {flickr_images} = list;
	return (
		<div className="main__content">
			{
				list  && <DragonImage images={flickr_images}/>
			}
			{
				list  && <DragonDetails key={list.id} {...list}/> 
			}
		</div>
	)
}