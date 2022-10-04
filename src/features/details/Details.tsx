//CSS
import "./details.scss";
//Types
import {Dragon} from "types"
//Components
import { DragonImage } from "components/Carousel/DragonImages"
import { DragonDetailsLeft } from "components/Details/DragonDetailsLeft"
import { DragonDetailsRight } from "components/Details/DragonDetailsRight"
import { DragonDetailtTop } from "components/Details/DragonDetailsTop"
import { DragonDetailtBottom } from "components/Details/DragonDetailsBottom"
import { DragonDescription } from "components/DragonDescription/DragonDescription";
export const Details = ({name, description, type, height_w_trunk, wikipedia, launch_payload_mass, launch_payload_vol, flickr_images, diameter}: Dragon) =>{
	return (
		<div className="details__content">
			<DragonDetailtTop height_w_trunk={height_w_trunk}/>
				<div className="details__flex">
					<DragonDetailsLeft launch_payload_mass={launch_payload_mass} />
					<div className="details__flex__img">
					<DragonImage images={flickr_images}/>
					</div>
					<DragonDetailsRight launch_payload_vol={launch_payload_vol}/>
			</div>
			<DragonDetailtBottom diameter={diameter}/>
			<DragonDescription description={description} name={name} type={type} wikipedia={wikipedia}/>
		</div>
	)
}
