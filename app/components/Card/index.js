import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import './index.css';

function Card({ children, title, style = {}, footer }) {
  const { width, backgroundColor } = style;
  return (
    <div className="card-container" style={{ width }}>
      <div className="card-title">
        {title && <p className="title-card">{title}</p>}
      </div>
      <div className="card-content" style={{ backgroundColor }}>
        <div className="card-body">
          {children}
        </div>
        {footer && <div className="card-footer">
          <Link className="footer-link">
            {footer}
            <IoIosArrowForward size={17} color="#fff" style={{ marginLeft: 5 }} />
          </Link>
        </div>
        }
      </div>
    </div>
  );
}

Card.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  footer: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
