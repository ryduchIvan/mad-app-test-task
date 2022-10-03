//CSS
import "./dragon.scss";
//Icon
import Loading from "assets/icons/loading.svg"
//Types
import { Dragon, } from "types";
//REDUX HOOKS
import {useAppDispatch, useAppSelector} from "redux-hooks";
//Actions
import { loadDragon } from "./dragonSlice";
//Selector
import {selectDragon} from "./dragonSelectors";
//REACT HOOKS
import {useEffect} from "react";
//Component
import { DragonImage } from "components/Carousel/DragonImages";
import {DragonDetailsLeft} from "components/Details/DragonDetailsLeft";
import {DragonDetailsRight} from "components/Details/DragonDetailsRight";
import { DragonDescription } from "components/DragonDescription/DragonDescription";
import { DragonDetailtTop } from "components/Details/DragonDetailsTop";
import { DragonDetailtBottom } from "components/Details/DragonDetailsBottom";
export const DragonsList = () =>{
	const dispatch  = useAppDispatch();
	const {status, list, error} = useAppSelector(selectDragon);
	useEffect(() =>{
		dispatch(loadDragon());
		if (list) {
			localStorage.setItem("dragon", JSON.stringify(list))
		}
	}, []);
	const localData: any = localStorage.getItem("dragon");
	const data = JSON.parse(localData);
	return (
		<div className="main__content">
			{
				status === "loading" && !data && <img src={Loading} className="loading" alt="loading"/>
			}
			{
				status === "rejected" && <h2 className="error_message">{error}</h2>
			}
			{
				data  &&<>
				<DragonDetailtTop height_w_trunk={data.height_w_trunk}/>
							<div className="main__flex">
								<DragonDetailsLeft launch_payload_mass={data.launch_payload_mass} />
								<DragonImage images={data.flickr_images}/>
								<DragonDetailsRight launch_payload_vol={data.launch_payload_vol}/>
							</div>
								<DragonDetailtBottom diameter={data.diameter}/>
								<DragonDescription name={data.name} description={data.description} type={data.type} wikipedia={data.wikipedia}/>
						</>
			}
		</div>
	)
}