import * as React from 'react';
import { matchPath, useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

interface IProps {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
  key: number;
}

export function MenuItem({ title, imageUrl, size, linkUrl }: IProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${matchPath}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
