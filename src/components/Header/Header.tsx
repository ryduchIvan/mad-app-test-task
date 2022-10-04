//CSS
import "./header.scss";
//icons
import Heart from "assets/icons/heart.svg";
//HOOKS
import { useAppSelector} from "redux-hooks";
import { useState } from "react";
import { selectFavorite } from "features/favorite/selectorFavorite";
//Components
import {FavoriteList} from "features/favorite/FavoriteList";
export const Header = () =>{
	const [isFavortie, setFavorite] = useState(false);
	const list = useAppSelector(selectFavorite);
	const closeFavorite = () =>{
		setFavorite(false);
		console.log(isFavortie);
	}
	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__logo">Space X</div>
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