import React from 'react'
import '../styles/SideNav.css'
import { PiUsersThreeBold, PiNotebookThin } from 'react-icons/pi'
import {
  HomeOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  HeartOutlined,
  LeftOutlined,
  SettingOutlined
} from '@ant-design/icons'


export default function SideNav() {
  return (
    <div className='SideNav'>
      <div className="up">
        <span className='profilePhoto'></span>
        <span className="goHome">
          <HomeOutlined />
        </span>
        <span className="usersGroup">
          <PiUsersThreeBold />
        </span>
        <span className='calendar'>
          <CalendarOutlined />
        </span>
        <span className='share'>
          <ShareAltOutlined />
        </span>
        <span className="file">
          <FileTextOutlined />
        </span>
        <span className="npteBook">
          <PiNotebookThin />
        </span>
        <span className="heart">
          <HeartOutlined />
        </span>
        <span className="arrow">
          <LeftOutlined />
        </span>
      </div>
      <div className="down">
        <span className="setting">
          <SettingOutlined />
        </span>
        <span className="profileName">
          AS
        </span>
      </div>
    </div>
  )
}
