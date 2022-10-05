//Components
import { DragonsList } from "features/dragons/DragonsList";
import { Cover } from "components/Cover/Cover";
export const Main = () =>{
	return (
		<main className="main">
			<Cover/>
			<div className="main__container container">
				<DragonsList/>
			</div>
		</main>
	)
}