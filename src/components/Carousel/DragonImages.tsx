//CSS
import "./dragonImages.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
interface DragonImageProps {
	images: string[]
}
export const DragonImage = ({images}: DragonImageProps) =>{

	return (
		<div className="main__carousel">
			<div className="carousel__container">
		<Carousel>
			{
				images && images.map((src: string) =><Carousel.Item interval={2000}>
				<img
				  className="d-block w-100 carousel__img"
				  src={src}
				  alt="First slide"
				/>
			  </Carousel.Item> )
			}
	  	</Carousel>
			</div>
		</div>
	)
}