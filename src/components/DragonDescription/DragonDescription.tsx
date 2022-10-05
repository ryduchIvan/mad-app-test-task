//CSS
import "./dragonDescription.scss";
//Types
import { Dragon } from "types"


type DragonDescriptionProps  = Pick<Dragon, "description" | "name" | "type" | "wikipedia">

export const DragonDescription = ({description, name, type, wikipedia}: DragonDescriptionProps) =>{


	return (
		<div className="main__desc">
			<div className="desc__item">
				<div className="desc__name"> <span>Name:</span> {name}</div>
			</div>
			<div className="desc__item">
				<div className="desc__type"> <span>Type:</span> {type}</div>
			</div>
			<div className="desc__item">
				<div className="desc__text">
					<span>About Rocket: </span> {description}
				</div>
			</div>
			<div className="desc__item">
				<div className="desc__wikipedia">
					<span>Link:</span> <a target="_blank" href={wikipedia} rel="noreferrer">{wikipedia}</a>
				</div>
			</div>
		</div>
	)
}