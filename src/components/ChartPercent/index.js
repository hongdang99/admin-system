import React from 'react';
import { Pie } from '@ant-design/plots';

function ChartPercent() {

    const data = [
        {
            type: 'Tuần 1',
            value: 27,
        },
        {
            type: 'Tuần 2',
            value: 25,
        },
        {
            type: 'Tuần 3',
            value: 18,
        },
        {
            type: 'Tuần 4',
            value: 15,
        },
    ];

    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return(
        <React.Fragment>
            <span>Lợi nhuận tháng 1</span>
            <Pie {...config} />
        </React.Fragment>
    );
}

ChartPercent.propTypes = {};

ChartPercent.defaultProps = {};

export default ChartPercent;
