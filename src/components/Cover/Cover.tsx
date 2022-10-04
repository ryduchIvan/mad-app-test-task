import "./cover.scss";
import cover from "assets/img/cover.jpg";
export const Cover = () =>{

	return (
		<div className="main__cover">
			<h1 className="cover__title">DRAGONS BY SpaceX</h1>
			<img src={cover} alt="cover" className="cover__img" />
		</div>
	)
}