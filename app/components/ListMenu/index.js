import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

function ListMenu({
    title,
    id,
    to = '/',
    list = [],
    borderTop = true,
    activeLink,
    onClick,
}) {
    return (
        <div className={borderTop ? 'menu-container border' : 'menu-container'}>
            <div className="menu-content">
                <Link
                    to={to}
                    className={!list.length ? 'link' : 'link disabled'}
                    onClick={() => onClick(id)}
                >
                    <p className={id !== activeLink ? 'menu-title' : 'menu-title active'}>
                        {title}
                    </p>
                </Link>
                {list.map(item => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id} className="menu-list">
                            <Link
                                onClick={() => onClick(item.id)}
                                className="menu-icon-name link"
                            >
                                {Icon && <Icon />}
                                <p
                                    className={
                                        item.id !== activeLink ? 'menu-name' : 'menu-name active'
                                    }
                                >
                                    {item.name}
                                </p>
                            </Link>
                            {item.badge && (
                                <div className="menu-badge">
                                    <p>{item.badge}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

ListMenu.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    id: PropTypes.number,
    to: PropTypes.string,
    list: PropTypes.array,
    borderTop: PropTypes.bool,
    activeLink: PropTypes.number,
};

export default ListMenu;
