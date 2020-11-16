import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Table({ data = [] }) {
  return (
    <div className="table-container">
      {data.map((item, index) => {
        const { id, key, value } = item;
        return (
          <div
            key={id}
            className="table-row"
            style={{ borderBottomWidth: index === data.length - 1 ? 0 : null }}
          >
            <p className="table-data key">{key}</p>
            <p className="table-data value">{value}</p>
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
