//CSS
import "./dragonDetailsBottom.scss";
import { Dragon } from "types"

type DragonDetailsBottomProps = Pick<Dragon, "diameter">

export const DragonDetailtBottom = ({diameter}: DragonDetailsBottomProps) => {

	return (
		<div className="main__details main__details_bottom">
				<div className="main__details__item">
						<div className="main__details__circle red">
						</div>
						<div className="main__details__info">
							{diameter.meters}
							<span>meters</span>
						</div>
					</div>
					<div className="main__details__item">
					<div className="main__details__circle green">
						</div>
						<div className="main__details__info">
							{diameter.feet}
							<span>feets</span>
						</div>
					</div>
		</div>
	)
}