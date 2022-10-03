//CSS
import "./dragonDetails.scss";

import {Dragon} from "types/dragon";
type DragonDetailtTopProps = Pick<Dragon, "height_w_trunk">

export const DragonDetailtTop = ({height_w_trunk}: DragonDetailtTopProps) =>{

	return (
		<div className="main__details main__details_top">
		<div className="main__details__item">
					<div className="main__details__circle green">
						</div>
						<div className="main__details__info">
							{height_w_trunk.meters}
							<span>meters</span>
						</div>
					</div>
					<div className="main__details__item">
					<div className="main__details__circle green">
						</div>
						<div className="main__details__info">
							{height_w_trunk.feet}
							<span>feets</span>
						</div>
			</div>
		</div>
	)
}