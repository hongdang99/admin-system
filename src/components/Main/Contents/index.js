/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/15/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import {
	UserOutlined,
	PieChartOutlined,
	CalendarOutlined,
	AppstoreAddOutlined,
	TransactionOutlined,
	UsergroupAddOutlined,
} from '@ant-design/icons';

// Component
import ScreenContext from "../../../context/screenContext";
const Statistical = React.lazy(() => import('../../Screen/Statistical'));

/* eslint-disable */
// Style
import styles from './Styles/index.module.scss';

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const items = [
	getItem('Thống kê', 'statistical', <PieChartOutlined />),
	getItem('Giao dịch', 'transaction',<TransactionOutlined />),
	getItem('Lịch đáo thẻ', 'calendar', <CalendarOutlined />),
	getItem('Khách hàng', 'customer', <UsergroupAddOutlined />),
	getItem('Nhân viên', 'staff', <UserOutlined />),
	getItem('Quản lý tài khoản', 'accountManagement', <AppstoreAddOutlined />),
];

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Contents(props) {
	const { collapsed } = props;
	const {setScreen, screen} = React.useContext(ScreenContext);

	const onClickItem = (event) => {
		setScreen(event.key)
	};

	const renderScreen = () => {
		switch (screen) {
			case 'transaction':
				return <About />;
			default:
				return <Statistical />;
		}
	};

    return(
	    <div className={styles.content}>
		    <div
			    style={{
				    width: !collapsed && 220,
			    }}
		    >
			    <Menu
				    className={styles.menuLeft}
				    defaultSelectedKeys={[screen]}
				    defaultOpenKeys={[screen]}
				    mode="inline"
				    theme="dark"
				    inlineCollapsed={collapsed}
				    items={items}
				    onClick={onClickItem}
			    />
		    </div>
		    <div className={styles.viewScreen}>
			    {renderScreen()}
		    </div>
	    </div>
    );
}

Contents.propTypes = {
	collapsed: PropTypes.bool,
};

Contents.defaultProps = {
	collapsed: false,
};

export default Contents;
