import {
  CustomOutput,
  CustomOutputElement,
  HeaderWrap,
} from "./CustomButton.styled";
import CustomButton from "../../atoms/customButton.atom/customButton";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useEffect } from "react";
import { AddButtonClick } from "../../../store/actions/buttonStorage";

const CustomButtonMolecule = () => {
  const storage = useAppSelector((state) => state.ButtonS.value);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const updatedStorage = window.localStorage.getItem("storage");

    if (updatedStorage !== null) dispatch(AddButtonClick(updatedStorage));
  }, []);
  const parsedStore = () => {
    if (storage !== null) {
      const tempArray = JSON.parse(storage).reverse();
      console.log(tempArray);
      console.log(storage);
      return (
        <div>
          {[...Array(tempArray.length)].map((e, i: number) => (
            <CustomOutputElement
              key={i}
            >{`${tempArray[i].time}`}</CustomOutputElement>
          ))}
        </div>
      );
    } else return 0;
  };

  return (
    <HeaderWrap>
      <CustomButton name={"Входная дверь"} id={"1"} />
      <CustomOutput>{parsedStore()}</CustomOutput>
    </HeaderWrap>
  );
};
export default CustomButtonMolecule;
function dispatch(arg0: {
  payload: string;
  type: "ButtonSlice/AddButtonClick";
}) {
  throw new Error("Function not implemented.");
}
