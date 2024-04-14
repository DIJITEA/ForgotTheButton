import { useAppDispatch, useAppSelector } from "../../../hooks";
import { AddButtonClick } from "../../../store/actions/buttonStorage";
import { StyledHeaderButton, StyledHeaderH2 } from "./customButton.styled";
import { FC, useEffect, useState } from "react";
import sound from "../../../assets/sounds/click.mp3";
import { time } from "console";
interface ButtonProps {
  name: string;
  id: string;
}

const CustomButton: FC<ButtonProps> = ({ name, id }) => {
  const [animationPlay, setAnimationPlay] = useState(false);
  const dispatch = useAppDispatch();

  const ruMonths = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const localStorageUpdate = () => {
    const storage = window.localStorage.getItem("storage");
    const d = new Date();
    const time = `${name} был(а) проверен(а) ${d.getDate()} ${ruMonths[d.getMonth()]} в ${d.getHours()}:${ d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()}`;
    const updateObject = {
      name: name,
      id: id,
      time: time,
    };

    if (storage === null)
      window.localStorage.setItem("storage", JSON.stringify([updateObject]));
    else {
      const tempArr = [...JSON.parse(storage), updateObject];
      if (tempArr.length < 10)
        window.localStorage.setItem("storage", JSON.stringify(tempArr));
      else {
        tempArr.shift();

        window.localStorage.setItem("storage", JSON.stringify(tempArr));
      }
    }

    const updatedStorage = window.localStorage.getItem("storage");
    if (updatedStorage !== null) dispatch(AddButtonClick(updatedStorage));

    //temp output
    if (storage !== null) console.log(JSON.parse(storage));
  };

  const animation = () => {
    if (!animationPlay) {
      const ButtonClickSound = new Audio(sound);
      ButtonClickSound.play();
      setAnimationPlay(true);
      setTimeout(() => {
        setAnimationPlay(false);
      }, 1100);
    }
  };

  return (
    <StyledHeaderButton
      $animation={animationPlay}
      onClick={() => {
        animation();
        const d = new Date();
        const time = `${name} был(а) проверен(а) ${d.getDate()} ${
          ruMonths[d.getMonth()]
        } в ${d.getHours()}:${d.getMinutes()}`;
        console.log(time);
        localStorageUpdate();
      }}
    >
      <StyledHeaderH2>{name}</StyledHeaderH2>
    </StyledHeaderButton>
  );
};
export default CustomButton;
