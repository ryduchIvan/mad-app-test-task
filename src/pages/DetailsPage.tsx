//PREPOAD
import Loading from "assets/icons/loading.svg"
//REDUX-HOOKS
import {useAppSelector, useAppDispatch} from "redux-hooks";
//Selector
import {selectDetails} from "features/details/selectorDetails";
//REACT-HOOKS
import {useEffect} from "react";
//ACTIOS
import { getOneDragon } from "features/details/detailsSlice";
import { Details } from "features/details/Details";
import { Dragon } from "types";
export const DetailsPage = () =>{
	const {error, list, status, id} = useAppSelector(selectDetails);
	const dispatch = useAppDispatch();
	useEffect(() =>{
		if (id) {
			dispatch(getOneDragon(id))
		}
		if (list) {
			localStorage.setItem("details", JSON.stringify(list));
		}
	}, [])
	const localDragon: any = localStorage.getItem("details");
	const data: Dragon = JSON.parse(localDragon) || list;
	return (
		<div className="details">
			<div className="detail__container container">
			{
				status === "loading" && !localDragon && <img src={Loading} className="loading" alt="loading"/>
			}
			{
				status === "rejected" && <h2 className="error_message">{error}</h2>
			}
			{
					data && <Details {...data}/>
			}
			</div>
		</div>
	)
}