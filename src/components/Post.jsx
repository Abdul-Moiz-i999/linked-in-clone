import { Avatar } from "@mui/material";
import React from "react";
import InputOptions from "./InputOptions";
import "./Post.css";

// Icons
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>Message Goes Here!</p>
      </div>

      <div className="post__buttons">
        <InputOptions
          Icon={ThumbUpOffAltOutlinedIcon}
          title="Like"
          color="gray"
        />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
