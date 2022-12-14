//CSS
import "./header.scss";
//icons
import Heart from "assets/icons/heart.svg";
//HOOKS
import { useAppSelector} from "redux-hooks";
import { useState } from "react";
//Components
import {FavoriteList} from "features/favorite/FavoriteList";
import {Link} from "react-router-dom"
export const Header = () =>{
	const [isFavortie, setFavorite] = useState(false);
	const {list} = useAppSelector(state => state.favorite);
	const closeFavorite = () =>{
		setFavorite(false);
	}
	return (
		<header className="header">
			<div className="header__container container">
				<Link to="/" className="header__logo">Space X</Link>
				<div className="header__favorite">
						<span className="header__quantity">
						{
							list.length
						}
						</span>
					<img src={Heart} className="header__heart" alt="heart" onClick={() =>{setFavorite(!isFavortie)}} />
					<FavoriteList status={isFavortie} closeFavorite={closeFavorite}/>
				</div>
			</div>
		</header>
	)
}