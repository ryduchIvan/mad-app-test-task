//CSS
import "./detailsBox.scss";

import {Dragon} from "types/dragon";
type DragonDetailtTopProps = Pick<Dragon, "height_w_trunk">

export const DragonDetailtTop = ({height_w_trunk}: DragonDetailtTopProps) =>{

	return (
		<div className="main__details main__details_top">
		<div className="main__details__item">
					<div className="main__details__circle purple">
						</div>
						<div className="main__details__info">
							{height_w_trunk.meters}
							<span>meters</span>
						</div>
						<h4 className="details__name">Height</h4>
					</div>
					<div className="main__details__item">
					<div className="main__details__circle pink">
						</div>
						<div className="main__details__info">
						{height_w_trunk.feet}
						<span>feets</span>
					</div>
					<h4 className="details__name">Height</h4>
			</div>
		</div>
	)
}