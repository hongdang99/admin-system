import React from 'react';
import { Column } from '@ant-design/plots';

function ChartColumn() {

    const data = [
        {
            type: 'Tuần 1',
            sales: 38,
        },
        {
            type: 'Tuần 2',
            sales: 52,
        },
        {
            type: 'Tuần 3',
            sales: 61,
        },
        {
            type: 'Tuần 4',
            sales: 145,
        },
    ];

    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle',
            // 配置样式
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
        },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '类别',
            },
            sales: {
                alias: '销售额',
            },
        },
    };

    return(
        <React.Fragment>
            <span>Lợi nhuận tháng 1</span>
            <Column {...config} />
        </React.Fragment>
    );
}

ChartColumn.propTypes = {};

ChartColumn.defaultProps = {};

export default ChartColumn;
