import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Table({ data = [] }) {
  return (
    <div className="table-container">
      {data.map((item, index) => {
        const { uid, province, confirmed } = item;
        return (
          <div
            key={uid}
            className="table-row"
            style={{ borderBottomWidth: index === data.length - 1 ? 0 : null }}
          >
            <p className="table-data key">{province}</p>
            <p className="table-data value">{confirmed}</p>
          </div>
        );
      })}
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
