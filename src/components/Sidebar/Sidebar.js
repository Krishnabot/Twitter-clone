import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import Person2Icon from "@mui/icons-material/Person2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon />
      <SidebarOption />
      {/* home Icon */}
      <HomeIcon />

      {/* TagIcon */}
      <TagIcon />

      {/* Notificcation Icon */}
      <NotificationsNoneIcon />

      {/* Messege Icon  */}
      <MailOutlineIcon />

      {/* Bookmark Icon */}
      <BookmarkBorderIcon />

      {/* List Icon */}
      <ListAltIcon />

      {/* Profile Icon  */}
      <Person2Icon />

      {/* More Icon */}
      <MoreHorizIcon />
    </div>
  );
}

export default Sidebar;
