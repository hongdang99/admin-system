/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/16/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

// Redux
import { connect } from 'react-redux';

// components
import ModalAddNew from './ModalAddNew';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	onAddNewCustomers: (data, onSuccess, onFailure) => {
		dispatch(ADD_TODO_SAGA(data, onSuccess, onFailure));
	}
});

const ModalAddNewContainer = connect(null, mapDispatchToProps)(ModalAddNew);

export default ModalAddNewContainer;

