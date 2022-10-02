import { Dragon } from "types"


export const DragonItem = ({name,flickr_images, description, wikipedia, type, launch_payload_mass ,launch_payload_vol}: Dragon) =>{
	return (
		<div>
			<span>{name}</span>
			{
			
			flickr_images && flickr_images.map((src: string) => <img key={src} src={src} alt={name} style={{width: "200px"}}/>)
			}
			<span>{description}</span>
			<span>{wikipedia}</span>
			<span>{type}</span>
		</div>
	)
}