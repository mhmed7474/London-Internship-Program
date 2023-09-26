import React from 'react';
import { DownOutlined, } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import '../styles/dropdown.css'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        <p>Applied</p>
        <span>1745</span>
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        <p>ShortListed</p>
        <span>453</span>
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        <p>Technical Interview</p>
        <span>123</span>
      </a>
    ),
  },
  {
    key: '4',
    label: (
      <a target="_blank" rel="noopener noreferrer" className='selected'>
        <p>Opportunity Browsing</p>
        <span>243</span>
      </a>
    )
  },
  {
    key: '5',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        <p>Video Interview |</p>
        <span>25</span>
      </a>
    )
  },
  {
    key: '6',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        Video Interview || <span>25</span>
      </a>
    )
  },
  {
    key: '7',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        <p> Video Interview |||</p>
        <span>243</span>
      </a>
    )
  },
  {
    key: '8',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        <p>Offer</p>
        <span>25</span>
      </a>
    )
  },
  {
    key: '9',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        <p>Withdrawn</p>
        <span>25</span>
      </a>
    )
  },

];

const DropDown: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <p> Opportunity Browsing </p>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropDown