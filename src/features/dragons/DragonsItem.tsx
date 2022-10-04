//Components
import {DragonImage} from "components/Carousel/DragonImages";
//Types
import {Dragon} from "types"
//Routes
import {Link} from "react-router-dom";
//REDUX-HOOK
import { useAppDispatch, useAppSelector } from "redux-hooks";

import {setId} from "../details/detailsSlice";
type DragonItemProps = Pick<Dragon, "name" | "type" | "flickr_images" | "description" | "id">


export const DragonsItem = ({name, type, flickr_images, description, id}:DragonItemProps ) =>{
	const dispatch = useAppDispatch();
	return <div className="dragons__item">
		<Link to="/details" onClick={() =>{
					dispatch(setId(id))
					}}>
			<DragonImage images={flickr_images}/>
		</Link>
		<div className="dragon__info">
			<ul className="dragon__info__list">
				<li className="dragon__text">
				<span>Name:</span> {name}
				</li>
				<div className="dragon__text">
					<span>Type:</span> {type}
				</div>
				<div className="dragon__text">
					<span>About:</span> {description}
				</div>
				<Link className="dragon__link" to="/details" onClick={() =>{
					dispatch(setId(id))
				}}>Watch More</Link>	
			</ul>
		</div>
	</div>
}