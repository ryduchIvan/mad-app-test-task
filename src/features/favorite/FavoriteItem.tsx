//Icons
import Close from "assets/icons/close.svg";
import { Dragon } from "types"
//HOOKS
import { useAppDispatch } from "redux-hooks";
import {removeFromCart} from "./favoriteSlice";
export const FavoriteItem  = ({name, flickr_images, id}: Dragon) =>{
	const dispatch= useAppDispatch();
	return (
		<div className="favorite__item">
			<img className="favorite__item_close" src={Close} alt="close_img" onClick={() =>{
				dispatch(removeFromCart(id))
			}}/>
			<div className="favorite__row">
				<img className="favorite__img" src={flickr_images[2]} alt="favorite_img"></img>
				<div className="favorite__info">
				<div className="favorite__title">
					{name}
				</div>
				</div>
			</div>
		</div>
	)
}