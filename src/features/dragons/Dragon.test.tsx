import {render, screen} from "@testing-library/react";
import { useAppSelector } from "redux-hooks";
import { DragonsItem } from "./DragonsItem";
import { selectAllDragons } from "./dragonsSelectors";
describe("Dragon component", () =>{
	const {status, list, error} = useAppSelector(selectAllDragons);
	const item = list.map(item => item);
	it("Component renders", () =>{
	})
})