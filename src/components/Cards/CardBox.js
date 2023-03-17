import React, { useContext } from "react";
import "./cardBox.css";
import CardMd from "./Card";
import cardData from "../../data/dataCard";
import cardDataSm from "../../data/dataCardSm";
import CardSm from "../CardSm/CardSm";
import ThemeContext from "../../context/themeSwitch";


const CardContainerMd = () => {
  const { theme } = useContext(ThemeContext);
  const { textWhite } = theme;

  const getSocialMd = cardData.map((socialMedia, index) => (
    <CardMd
      key={index}
      svg={socialMedia.svg}
      nickname={socialMedia.nickname}
      followersCount={socialMedia.followersCount}
      type={socialMedia.type}
      today={socialMedia.today}
      increase={socialMedia.increase}
      borderColor={socialMedia.borderColor}
    />
  ));

  const getSocialSm = cardDataSm.map((socialMedia, index) => (
    <CardSm
      key={index}
      svg={socialMedia.svg}
      name={socialMedia.name}
      count={socialMedia.count}
      today={socialMedia.today}
      increase={socialMedia.increase}
    />
  ));
  return (
    <>
      <div className="card-container-md">{getSocialMd}</div>
      <h1 style={{ color: textWhite }} className="brand">
        Overview - Today{" "}
      </h1>
      <div className="card-container-sm pt-4">{getSocialSm}</div>
    </>
  );
};

export default CardContainerMd;
