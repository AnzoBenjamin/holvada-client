import React from "react";
import classes from "./ItemCard.module.scss";

interface ItemCardProps {
  item: string;
  timeDateOne: string;
  category: string;
  timeDateTwo: string;
  name: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, timeDateOne, timeDateTwo, category, name }) => {
  return (
    <div className={classes.card}>
      <div className={classes["img-container"]}>
        <img src={`/${item}.jpg`} alt={`${item}`} className={classes.img} />
        <p className={classes.category}>{category.replaceAll("-", " ")}</p>
      </div>
      <div className={classes["text-content"]}>
        <p className={classes.date}>{timeDateOne}</p>
        <p className={classes.time}>{timeDateTwo}</p>
        <p className={classes.name}>{name}</p>
      </div>
      {/*
        <Button className={classes.btn} text="Remove" type="submit" disabled={false} />
  */}
    </div>
  );
};

export default ItemCard;
