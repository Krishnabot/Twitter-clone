import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Person2Icon from '@mui/icons-material/Person2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import SidebarOption from './SidebarOption';

function Sidebar() {
  const sidebarOptionMenus = [
    {
      id: 1,
      iconName: HomeIcon,
      iconText: 'Home',
    },
    {
      id: 2,
      iconName: TagIcon,
      iconText: 'Explore',
    },
    {
      id: 3,
      iconName: NotificationsNoneIcon,
      iconText: 'Notifications',
    },
    {
      id: 4,
      iconName: MailOutlineIcon,
      iconText: 'Messeges',
    },
    {
      id: 5,
      iconName: BookmarkBorderIcon,
      iconText: 'Bookmarks',
    },
    {
      id: 6,
      iconName: ListAltIcon,
      iconText: 'Lists',
    },
    {
      id: 7,
      iconName: TagIcon,
      iconText: 'Explore',
    },
    {
      id: 8,
      iconName: Person2Icon,
      iconText: 'Profile',
    },
    {
      id: 9,
      iconName: MoreHorizIcon,
      iconText: 'More',
    },
  ];
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon />
      {sidebarOptionMenus.map((item) => (
        <SidebarOption
          key={item.id}
          Icon={item.iconName}
          text={item.iconText}
        />
      ))}
      <Button varient="outlined" className="tweet-btn" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
