import React, { FC } from "react";
import Image from "next/image";

export interface ICard {
  image: string;
  title: string;
  total: number;
}

const Card: FC<ICard> = (props) => {

  return (
    <div className="w-full p-2 min-w-[200px] ">
      <div className="flex gap-5">
        <div>
          <Image
            src={props.image}
            alt={props.title ?? "Icon"}
            height={50}
            width={50}
          />
        </div>
        <div>
          <p>{props.title}</p>
          <h3>{props.total}</h3>
        </div>
      </div>
    </div>
  )

}

export default Card;


