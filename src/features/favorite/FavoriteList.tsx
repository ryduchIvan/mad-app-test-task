//CSS
import "./favorite.scss";
//REDUX_HOOKS
import { useAppSelector } from "redux-hooks";
//Selector
import {selectFavorite} from "features/favorite/selectorFavorite";
//Icons
import CloseImg from "assets/icons/close-svgrepo-com.svg";
//Components
import {FavoriteItem} from "./FavoriteItem";
interface FavoriteListProps {
	status: boolean,
	closeFavorite: () => void
}
export const FavoriteList = ({status, closeFavorite}: FavoriteListProps) =>{
	const list = useAppSelector(selectFavorite);
	console.log(status);
	return(
		<div className={`${status ? "favorite__list show-favorite" : "favorite__list"}`}>
			<h1 className="favorite__title_main">Favorite Item</h1>
				<img src={CloseImg} alt="close" className="favorite__close" onClick={() =>{
					closeFavorite()
				}} />
	{
		list.length ? list.map(item => <FavoriteItem key={item.id} {...item} />)
		: 
		<div className="favorite__empty">
			<h4 className="favorite__empty_text">
				You haven't added anything here yet
			</h4>
		</div>
	}
</div>
	) 
}