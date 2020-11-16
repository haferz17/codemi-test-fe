import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function BarChart({ data = [] }) {
    return (
        <div className="chart-container">
            {data.map(item => {
                const { id, percent } = item
                return (
                    <div key={id} className="bar" style={{ height: percent }}>
                        <div className="top-bar" />
                        <div className="bottom-bar" />
                    </div>
                )
            })}
        </div>
    );
}

BarChart.propTypes = {
    data: PropTypes.array
};

export default BarChart;
