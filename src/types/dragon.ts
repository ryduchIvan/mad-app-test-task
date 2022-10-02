type DragonsMass = {
	kg: number,
	lb: number
}

type DragonVolume = {
	cubic_meters: number,
	cubic__feet: number
}

export type Dragon = {
	flickr_images: string[],
	description: string,
	name: string,
	wikipedia: string,
	type:string,
	launch_payload_mass: DragonsMass,
	launch_payload_vol: DragonVolume
}