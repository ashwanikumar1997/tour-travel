import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import { SiAddthis } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";
import { FaHotel } from "react-icons/fa6";



export const ArrowIcon = (props) => {
  return <IoArrowBack {...props} />;
};

export const AddIcons = (props) => {
  return <SiAddthis {...props} />;
};

export const TripIcon = (prop) => {
  return <SiYourtraveldottv {...prop} />;
};

export const UserIcon = (prop) => {
  return <FaUser {...prop} />;
};

export const UserIcons = (prop) => {
  return <FaUsers {...prop} />;
};

export const ProgressIcon = (props) => {
  return <GiProgression {...props} />;
};

export const GuardIcon =(props)=>{
  return <SiAdguard {...props} />
}

export const HotelIcon =(props)=>{
  return <FaHotel {...props} />
}