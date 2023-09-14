import React, { FC } from "react";
import Image from "next/image";

export interface IHeader {
  image: string;
  title: string;
  total: string;
}

const Header: FC<IHeader> = (props) => {

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <div>
          <Image
            src={props.image}
            alt={props.title ?? "Error Image"}
            height={200}
            width={200}
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

export default Header;


