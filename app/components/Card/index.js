import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Card({ children, title, style = {} }) {
  const { width, backgroundColor } = style
  return (
    <div className="card-container" style={{ width }}>
      <div className="card-title">
        {title && <p className="title-card">{title}</p>}
      </div>
      <div className="card-content" style={{ backgroundColor }}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
