import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import { SiAddthis } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";
import { FaHotel } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";


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

export const GuardIcon = (props) => {
  return <SiAdguard {...props} />;
};

export const HotelIcon = (props) => {
  return <FaHotel {...props} />;
};

export const RupeeIcon = (props) => {
  return <MdOutlineCurrencyRupee {...props} />;
};

export const DownIcon = (props) => {
  return <FaAngleDown {...props} />;
};

export const UpIcon = (props) => {
  return <IoIosArrowUp {...props} />;
};

export const LikeIcon = (props) => {
  return <AiFillLike {...props} />;
};

export const UnlikeIcon = (props) => {
  return <AiOutlineLike {...props} />;
};

export const MoreIcon = (props) => {
  return <IoMdMore {...props} />;
};

export const ChatIcon = (props) => {
  return <IoChatboxEllipsesSharp {...props} />;
};

export const SendIcon = (props) => {
  return <IoSend {...props} />;
};

export const CrossIcon = (props) => {
  return <RxCross1 {...props} />;
};

export const GoogleIcon = (props) => {
  return <FcGoogle {...props} />;
};
