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
import PropTypes from 'prop-types';
import { Input, InputNumber } from "antd";

const { TextArea } = Input;

function InputCustom(props) {
	const {
		style,
		placeholder,
		maxLength,
		onChangeInputCustom,
		typeTextArea,
		typeName,
		data,
		typeInputNumber,
		typeMoney
	} = props;

	const [valueInput, setValueInput] = React.useState(data[typeName]);
	const [checkMax, setCheckMax] = React.useState(0);
	const [checkError, setCheckError] = React.useState('');

	React.useLayoutEffect(() => {
		setValueInput(data[typeName]);
	}, [data[typeName]])

	const onChangeInput = (e) => {
		const { value } = e.target;
		if (value.length) {
			setCheckError('');
		}
		setValueInput(value);
		setCheckMax(value.length);
		onChangeInputCustom(value, typeName);
	};

	const onChangeInputNumber = (values) => {
		setCheckMax(values);
		const valueNew = typeMoney ? `${values}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : values;
		setValueInput(valueNew);
		onChangeInputCustom(valueNew, typeName);
	};

	const onBlurInput = () => {
		if (checkMax === 0) {
			setCheckError('error');
		}
	};


	if (typeInputNumber) {
		return (
			<InputNumber
				max={maxLength}
				onBlur={onBlurInput}
				defaultValue={0}
				value={valueInput}
				style={{ ...style }}
				status={(maxLength === checkMax || checkError) &&  "error"}
				onChange={onChangeInputNumber}
			/>
		);
	}

    return(
    	<React.Fragment>
		    {
			    typeTextArea ? (
				    <TextArea
					    value={valueInput}
					    onBlur={onBlurInput}
					    onChange={onChangeInput}
				        status={maxLength === checkMax || checkError && "error"}
					    maxLength={maxLength}
					    showCount
					    rows={4}
					    style={{ marginBottom: '25px' }}
				    />
			    ) : (
			    	<Input
					    onBlur={onBlurInput}
					    value={valueInput}
					    autoSize
					    showCount
					    placeholder={placeholder}
					    maxLength={maxLength}
					    status={(maxLength === checkMax || checkError === 'error') && "error"}
					    onChange={onChangeInput}
			    />)
		    }
	    </React.Fragment>
    );
}

InputCustom.propTypes = {
	maxLength: PropTypes.number,

	data: PropTypes.object,
	style: PropTypes.object,

	typeMoney: PropTypes.bool,
	typeTextArea: PropTypes.bool,
	typeInputNumber: PropTypes.bool,

	typeName: PropTypes.string,
	placeholder: PropTypes.string,

	onChangeInputCustom: PropTypes.func,
};

InputCustom.defaultProps = {
	data: {},
	style: {},
	typeTextArea: false,
	typeMoney: false,
	typeInputNumber: false,
	placeholder: 'Vui lòng nhập',
};

export default InputCustom;
