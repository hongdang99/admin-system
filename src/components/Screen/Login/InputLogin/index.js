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
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

// Style
import styles from './Styles/index.module.scss';

// Img
import EyeView from '../../../Img/eyeView.png';
import EyeHide from '../../../Img/eyeHide.png';

const  InputLogin = React.forwardRef((props, ref) => {
	const { className, type, onBlurInput, onFocusInput, messageError } = props;

	const [isView, setIsView] = React.useState(true);

	const refInput =  React.useRef(null);
	React.useImperativeHandle(ref, () => refInput.current);

	const handleBlur = (e) => {
		onBlurInput(type, e);
	};

	const handleFocus = () => {
		onFocusInput(type);
	};

	const onClickIconEye = () => {
		setIsView(!isView);
	};

    return(
    	<React.Fragment>
		    {
			    type === 'password' ? (
				    <div className={ClassNames(styles.wrapPasswordInputLogin, className)}>
					    <div>
						    <input
							    ref={refInput}
							    type={isView ? type : 'text'}
							    onBlur={handleBlur}
							    onFocus={handleFocus}
							    className={ClassNames(styles.input, messageError && styles.inputError)}
						    />
						    <img alt='icon Eye' src={isView ? EyeView : EyeHide} className={styles.iconEye} onClick={onClickIconEye} />
					    </div>
					    {
						    messageError && <span className={styles.textError}>{messageError}</span>
					    }
				    </div>
			    ) : (
				    <div className={ClassNames(styles.wrapTextInputLogin, className)}>
					    <input
						    type={type}
						    onBlur={handleBlur}
						    onFocus={handleFocus}
						    className={ClassNames(styles.input, messageError && styles.inputError)}
					    />
				    </div>
			    )
		    }
	    </React.Fragment>
    );
})

InputLogin.propTypes = {
	messageError: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	onBlurInput: PropTypes.func,
	onFocusInput: PropTypes.func,
};

InputLogin.defaultProps = {
	type: 'text'
};

export default InputLogin;
