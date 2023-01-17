/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/17/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';

// Component
import InputLogin from "./InputLogin";

// Style
import styles from './Styles/index.module.scss';

// Img
import Logo from '../../Img/login.png';

function Login() {
	const [messageError, setMessageError] = React.useState('');
	const refInputEmail =  React.useRef(null);

	const onBlurInput = (type) => {
		console.log('type: ================>', type); // Log QuanDX fix bug
	};

	const onFocusInput = (type) => {
		console.log('type: ================>', type); // Log QuanDX fix bug
	};

    return(
        <div className={styles.wrapLogin}>
	        <div className={styles.contentLogin}>
		        <div className={styles.contentLoginLeft}>
					<img className={styles.imgLogin} alt='login' src={Logo} />
		        </div>
		        <div className={styles.contentLoginRight}>
					<span className={styles.title}>Sign In</span>
			        <span className={styles.text}>Email Address</span>
			        <InputLogin
				        type='text'
				        ref={refInputEmail}
				        onBlurInput={onBlurInput}
				        onFocusInput={onFocusInput}
				        messageError={messageError}
			        />
			        <span className={styles.text}>Password</span>
			        <InputLogin type='password' />
			        <button className={styles.btnLogin}>Sign In</button>
		        </div>
	        </div>
        </div>
    );
}

export default Login;
