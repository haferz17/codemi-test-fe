import React, { useState } from 'react';
import './index.css';
import { BsGearWide, BsStarHalf, BsInfoCircleFill } from 'react-icons/bs';
import { FaUsb, FaUser, FaChartLine } from 'react-icons/fa';
import { AiOutlineAreaChart, AiOutlineMail } from 'react-icons/ai';
import { BiDiamond } from 'react-icons/bi';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import ListMenu from '../ListMenu';

function SideNav() {
  const [activeLink, setActiveLink] = useState(0);
  const Icon = (
    name,
    color = '#666',
    size = 17,
    style = { marginRight: 10 },
  ) => {
    const Component = name;
    return <Component color={color} size={size} style={style} />;
  };
  const setId = id => setActiveLink(id);
  return (
    <div className="container">
      <ListMenu
        title="HOME"
        borderTop={false}
        to="/"
        id={0}
        activeLink={activeLink}
        onClick={setId}
      />
      <ListMenu
        title="LEARNING"
        list={[
          { id: 1, name: 'Courses', icon: () => Icon(BiDiamond), badge: 21 },
          { id: 2, name: 'Learning plans', icon: () => Icon(FaUsb) },
        ]}
        activeLink={activeLink}
        onClick={setId}
      />
      <ListMenu
        title="MANAGE"
        list={[
          { id: 3, name: 'Users', icon: () => Icon(FaUser) },
          { id: 4, name: 'Skills', icon: () => Icon(BsGearWide) },
          { id: 5, name: 'Reports', icon: () => Icon(AiOutlineAreaChart) },
          { id: 6, name: 'Analytics', icon: () => Icon(FaChartLine) },
          {
            id: 7,
            name: 'Announcements',
            icon: () => Icon(HiOutlineSpeakerphone),
          },
        ]}
        activeLink={activeLink}
        onClick={setId}
      />
      <ListMenu
        title="CONFIGURE"
        list={[
          { id: 8, name: 'Points', icon: () => Icon(BsStarHalf) },
          { id: 9, name: 'Reward', icon: () => Icon(BsGearWide) },
          { id: 10, name: 'Email templates', icon: () => Icon(AiOutlineMail) },
          { id: 11, name: 'Company info', icon: () => Icon(BsInfoCircleFill) },
          { id: 12, name: 'Billing', icon: () => Icon(FaUser) },
        ]}
        activeLink={activeLink}
        onClick={setId}
      />
    </div>
  );
}

export default SideNav;
