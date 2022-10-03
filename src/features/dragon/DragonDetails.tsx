import { Dragon } from "types"


export const DragonDetails = ({name,flickr_images, description, wikipedia, type, launch_payload_mass ,launch_payload_vol}: Dragon) =>{
	return (
		<div>
			<span>{name}</span>
			<span>{description}</span>
			<span>{wikipedia}</span>
			<span>{type}</span>
		</div>
	)
}