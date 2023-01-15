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
import {Button} from "antd";
import PropTypes from 'prop-types';
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

// Style
import styles from  './Styles/index.module.scss';

function MenuTop(props) {
	const { collapsed, setCollapsed } = props;

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

    return(
	    <div className={styles.menuTop}>
		    <Button
			    type="primary"
			    onClick={toggleCollapsed}
			    className={styles.btn}
		    >
			    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		    </Button>
	    </div>
    );
}

MenuTop.propTypes = {
	collapsed: PropTypes.bool,
	setCollapsed: PropTypes.func,
};

MenuTop.defaultProps = {
	collapsed: false,
	setCollapsed: () => null,
};

export default MenuTop;
