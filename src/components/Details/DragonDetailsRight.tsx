import {Dragon} from "types/index";
import "./detailsBox.scss";
type DragonDetailsRightProps =  Pick<Dragon, "launch_payload_vol">
export const DragonDetailsRight = ({launch_payload_vol}:DragonDetailsRightProps )=>{
	return (
		<div className="main__details">
			{
				launch_payload_vol && 
				<>
					<div className="main__details__item">
						<div className="main__details__circle aqua">
						</div>
						<div className="main__details__info">{launch_payload_vol.cubic__feet} 43<span>feets</span></div>
					</div>
					<div className="main__details__item">
						<div className="main__details__circle gold"></div>
						<div className="main__details__info">
							{launch_payload_vol.cubic_meters}
							<span>metters</span>
						</div>
					</div>
				</>
			}
		</div>
	)
}