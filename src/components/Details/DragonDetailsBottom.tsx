//CSS
import "./detailsBox.scss";
import { Dragon } from "types"

type DragonDetailsBottomProps = Pick<Dragon, "diameter">

export const DragonDetailtBottom = ({diameter}: DragonDetailsBottomProps) => {

	return (
		<div className="main__details main__details_bottom">
				<div className="main__details__item">
						<div className="main__details__circle light-green">
						</div>
						<div className="main__details__info">
							{diameter.meters}
							<span>meters</span>
						</div>
						<h4 className="details__name">Diameter</h4>
					</div>
					<div className="main__details__item">
					<div className="main__details__circle white">
						</div>
						<div className="main__details__info">
							{diameter.feet}
							<span>feets</span>
						</div>
						<h4 className="details__name">Diameter</h4>
					</div>
		</div>
	)
}