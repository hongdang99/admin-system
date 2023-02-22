/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/19/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

// Style
import styles from './Styles/index.module.scss';

function AutoCompleteCustom(props) {
	const {
		style,
		isText,
		typeName,
		placeholder,
		optionsData,
		onChangeInputCustom
	} = props;

	const [value, setValue] = React.useState('');
	const [checkError, setCheckError] = React.useState('');

	const onChange = (value) => {
		let valueNew;
		if (isText) {
			valueNew = value;
		} else {
			valueNew = Number(value);
		}
		setValue(valueNew);
		setCheckError('');
	};

	const onblurAutoComplete = () => {
		if (value === '') {
			setCheckError('Dữ liệu không được để trống, vui lòng nhập.')
		} else if(!value && !isText) {
			setCheckError('Dữ liệu nhập vào không được phép chứ "Text", vui lòng kiểm tra lại.')
		} else {
			onChangeInputCustom(value, typeName);
		}
	};

	const onFilterOption = (inputValue, option) => {
		if (typeof option.value === 'string') {
			return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
		}
	};

    return(
        <div className={styles.wrapAutoComplete}>
	        <AutoComplete
		        allowClear
		        size="large"
		        onChange={onChange}
		        options={optionsData}
		        placeholder={placeholder}
		        onBlur={onblurAutoComplete}
		        filterOption={onFilterOption}
		        status={checkError && 'error'}
		        style={{...style, width: '100%'}}
	        />
	        {checkError && <span className={styles.textError}>{checkError}</span>}
        </div>
    );
}

AutoCompleteCustom.propTypes = {
	isText: PropTypes.bool,
	style: PropTypes.object,
	optionsData: PropTypes.array,
};

AutoCompleteCustom.defaultProps = {
	style: {},
	isText: false,
	optionsData: []
};

export default React.memo(AutoCompleteCustom);
