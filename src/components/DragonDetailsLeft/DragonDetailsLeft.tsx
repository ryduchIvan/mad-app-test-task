import { Dragon } from "types"
import "./dragonDetailsLeft.scss";
type DragonDetailsLeftProps =  Pick<Dragon, "launch_payload_mass">

export const DragonDetailsLeft = ({launch_payload_mass}: DragonDetailsLeftProps) =>{
	return (
		<div className="main__details">
			{
				launch_payload_mass && 
				<>
					<div className="main__details__item">
						<div className="main__details__circle red">
						</div>
						<div className="main__details__info">
							{launch_payload_mass.kg}
							<span>KG</span>
						</div>
					</div>
					<div className="main__details__item">
					<div className="main__details__circle green">
						</div>
						<div className="main__details__info">
							{launch_payload_mass.lb}
							<span>LB</span>
						</div>
					</div>
				</>
			}
		</div>
	)
}