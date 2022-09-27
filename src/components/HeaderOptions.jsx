import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOptions.css";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={avatar} alt="Profile-image" />}
      <h4 className="headerOption__title">{title}</h4>
    </div>
  );
}

export default HeaderOptions;
