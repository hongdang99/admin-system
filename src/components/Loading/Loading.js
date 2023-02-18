import React from 'react';
import { Spin } from 'antd';

function LoadingLazy({ style = {} }) {
    return (
        <div className='loading' style={style}>
            <Spin tip="Loading" size="large" />
        </div>
    );
}


export default LoadingLazy;