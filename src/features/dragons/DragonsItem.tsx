import {DragonImage} from "components/Carousel/DragonImages";
import {Dragon} from "types"
type DragonItemProps = Pick<Dragon, "name" | "type" | "flickr_images" | "description">


export const DragonsItem = ({name, type, flickr_images, description}:DragonItemProps ) =>{


	return <div className="dragons__item">
		<DragonImage images={flickr_images}/>
		<div className="dragon__info">
			<ul className="dragon__info__list">
				<li className="dragon__link">
				<span>Name:</span> {name}
				</li>
				<div className="dragon__link">
					<span>Type:</span> {type}
				</div>
				<div className="dragon__link">
					<span>About:</span> {description}
				</div>
			</ul>	
		</div>
	</div>
}