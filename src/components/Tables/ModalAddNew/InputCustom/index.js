/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/3/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import { Input } from "antd";
import PropTypes from 'prop-types';

const { TextArea } = Input;

function InputCustom({ placeholder, maxLength, onChangeInputCustom, type }) {

	const [checkMax, setCheckMax] = React.useState(0);

	const onChangeInput = (e) => {
		const { value } = e.target;
		if(value.length > 0) {
			onChangeInputCustom(value);
		}
		setCheckMax(value.length);
	};

    return(
    	<React.Fragment>
		    {
			    type ? (
				    <TextArea
					    onChange={onChangeInput}
				        status={maxLength === checkMax && "error"}
					    maxLength={maxLength}
					    rows={4}
				    />
			    ) : (
			    	<Input
					    autoSize
					    placeholder={placeholder}
					    maxLength={maxLength}
					    status={maxLength === checkMax && "error"}
					    onChange={onChangeInput}
			    />)
		    }
	    </React.Fragment>
    );
}

InputCustom.propTypes = {
	maxLength: PropTypes.number,

	type: PropTypes.bool,

	placeholder: PropTypes.string,

	onChangeInputCustom: PropTypes.func,
};

InputCustom.defaultProps = {
	type: false,
	placeholder: 'Vui lòng nhập',
};

export default InputCustom;
