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
      {/* home Icon */}
      <SidebarOption active Icon={HomeIcon} text="Home" />

      {/* TagIcon */}
      <SidebarOption Icon={TagIcon} text="Explore" />

      {/* Notificcation Icon */}
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />

      {/* Messege Icon  */}
      <SidebarOption Icon={MailOutlineIcon} text="Messeges" />

      {/* Bookmark Icon */}
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />

      {/* List Icon */}
      <SidebarOption Icon={ListAltIcon} text="Lists" />

      {/* Profile Icon  */}
      <SidebarOption Icon={Person2Icon} text="Profile" />

      {/* More Icon */}
      <SidebarOption Icon={MoreHorizIcon} text="More" />
    </div>
  );
}

export default Sidebar;
