type DragonsMass = {
	kg: number,
	lb: number
}

type DragonVolume = {
	cubic_meters: number,
	cubic_feet: number
}
type DragonHeigth = {
	meters: number,
	feet: number
}
type DragonDiameter = {
	meters: number,
	feet: number
}
export type Dragon = {
	id: string
	flickr_images: string[],
	description: string,
	name: string,
	wikipedia: string,
	type:string,
	launch_payload_mass: DragonsMass,
	launch_payload_vol: DragonVolume,
	height_w_trunk: DragonHeigth,
	diameter: DragonDiameter
}

export type WorkedDragon = {
	images: Dragon["flickr_images"],
	description: Dragon["description"],
	name: Dragon["name"],
	wikipedia:Dragon["wikipedia"],
	type:Dragon["type"],
	mass: Dragon["launch_payload_mass"],
	volume: Dragon["launch_payload_vol"]
}