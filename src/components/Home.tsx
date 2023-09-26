import React, { useState } from 'react'
import '../styles/home.css'
import { FiUserX, FiUserCheck } from 'react-icons/fi'
import { BiUserVoice } from 'react-icons/bi'
import DropDown from './DropDown'
import {
  DownOutlined,
  TagOutlined,
  MailOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
  FileTextOutlined
} from '@ant-design/icons'




export default function Home() {



  return (
    <div className='home'>
      <div className="homeUp">
        <div className="leftUp">
          <div className="title">
            <p>London Internship Program</p>
            <span className="city">
              London
            </span>
          </div>
        </div>
        <div className="centerUp">
          {/* <p>Opportunity Browsing</p> */}
          <DropDown />
        </div>
        <div className="rightUp">
          <div className="tags">
            <span className="tag">
              <TagOutlined />
            </span>
            <span className="tag">
              <FiUserX />
            </span>
            <span className="tag">
              <FiUserCheck />
            </span>
            <span className="tag">
              <BiUserVoice />
            </span>
            <span className="tag">
              <MailOutlined />
            </span>
          </div>
          <div className="moveTo">
            <p>Move To Video Interview |</p>
            <span>
              <DownOutlined />
            </span>
          </div>
        </div>
      </div>
      <div className="homeDown">
        <div className="leftDown">
          <div className="search">
            <SearchOutlined />
            <input type="search" placeholder='Serach by name, edu, exp or #tag' className='searchBar' />
            <span>
              <ExclamationCircleOutlined />
            </span>
          </div>
          <div className="filters">
            <div className="head">
              <p className='tit'>Filters</p>
              <p className='qty'>0 Selected</p>
            </div>
            <div className="filter">

              <p>
                <span className='textfile'><FileTextOutlined /></span>
                Personal Information
              </p>
              <span className='downarrow'><DownOutlined /></span>
            </div>
            <div className="filter">
              <p>
                <span className='textfile'><FileTextOutlined /></span>
                Education
              </p>
              <span className='downarrow'><DownOutlined /></span>
            </div>
            <div className="filter">
              <p>
                <span className='textfile'><FileTextOutlined /></span>
                Work Experience
              </p>
              <span className='downarrow'><DownOutlined /></span>
            </div>
            <div className="filter">
              <p>
                <span className='textfile'><FileTextOutlined /></span>
                Activity Filter
              </p>
              <span className='downarrow'><DownOutlined /></span>
            </div>
            <div className="filter lastFilter">
              <p>
                <span className='textfile'><FileTextOutlined /></span>
                Advanced Filter
              </p>
              <span className='downarrow'><DownOutlined /></span>
            </div>
          </div>
        </div>
        <div className="rightDown">
          <div className="header">
            <div className="headerleft">
              <input type="checkbox" />
              <p>247 Candidates</p>
            </div>
            <div className="headerright">
              <p className='qualified'>Qualified</p>
              <p className='task'>Task <span>25</span></p>
              <p className='disqualified'>Disqualified <span>78</span></p>
            </div>
          </div>
          <div className="persons">
            <div className="person"><input type="checkbox" />
              <span className="photo">AS</span>
              <div className="info">
                <h2 className="name">Aaliyah Sanderson</h2>
                <p className="address">Riyadh,Suadi Arabia</p>
                <p className="educ">Bachelor - Cambridge University (2019-2023)</p>
                <div className="hashtags">
                  <span className="hashtag">#top_Candidate</span>
                  <span className="hashtag">#top_Candidate</span>
                </div>
                <div className="tgs">
                  <span className="tgg">New York</span>
                  <span className="tgg">Marketing</span>
                  <span className="tgg">London</span>
                </div>
              </div>
            </div>
            <div className="person "><input type="checkbox" />
              <span className="photo">JD</span>
              <div className="info">
                <h2 className="name">John Doe</h2>
                <p className="address">Bostom, USA</p>
                <p className="educ">Bachelor - MIT (2019-2023)</p>
                <div className="hashtags">
                  <span className="hashtag">#top_Candidate</span>
                  <span className="hashtag">#top_Candidate</span>
                </div>
                <div className="tgs">
                  <span className="tgg">New York</span>
                  <span className="tgg">Marketing</span>
                  <span className="tgg">London</span>
                </div>
              </div>
            </div>
            <div className="person"><input type="checkbox" />
              <span className="photo">TM</span>
              <div className="info">
                <h2 className="name">Thomas Matt</h2>
                <p className="address">Edinburgh, UK</p>
                <p className="educ">Bachelor - Harvard University (2019-2023)</p>
                <div className="hashtags">
                  <span className="hashtag">#top_Candidate</span>
                  <span className="hashtag">#top_Candidate</span>
                </div>
                <div className="tgs">
                  <span className="tgg">New York</span>
                  <span className="tgg">Marketing</span>
                  <span className="tgg">London</span>
                </div>
              </div>
            </div>
            <div className="person"><input type="checkbox" />
              <span className="photo">KS</span>
              <div className="info">
                <h2 className="name">Kamilia Smith</h2>
                <p className="address">London, UK</p>
                <p className="educ">Bachelor - Boston University (2019-2023)</p>
                <div className="hashtags">
                  <span className="hashtag">#top_Candidate</span>
                  <span className="hashtag">#top_Candidate</span>
                </div>
                <div className="tgs">
                  <span className="tgg">New York</span>
                  <span className="tgg">Marketing</span>
                  <span className="tgg">London</span>
                </div>
              </div>
            </div>
            <div className="person"><input type="checkbox" />
              <span className="photo">RJ</span>
              <div className="info">
                <h2 className="name">Roy Jade</h2>
                <p className="address">Cambridge, UK</p>
                <p className="educ">Bachelor - Yale (2019-2023)</p>
                <div className="hashtags">
                  <span className="hashtag">#top_Candidate</span>
                  <span className="hashtag">#top_Candidate</span>
                </div>
                <div className="tgs">
                  <span className="tgg">New York</span>
                  <span className="tgg">Marketing</span>
                  <span className="tgg">London</span>
                </div>
              </div>
            </div>
            <div className="person"><input type="checkbox" />
              <span className="photo">ME</span>
              <div className="info">
                <h2 className="name">Mohamed Emam</h2>
                <p className="address">Benha,EG</p>
                <p className="educ">Bachelor - Benha University (2020-2024)</p>
                <div className="hashtags">
                  <span className="hashtag">#top_Candidate</span>
                  <span className="hashtag">#top_Candidate</span>
                </div>
                <div className="tgs">
                  <span className="tgg">New York</span>
                  <span className="tgg">Marketing</span>
                  <span className="tgg">London</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
