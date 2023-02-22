/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/6/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import "dayjs/locale/vi";
import axios from "axios";
import PropTypes from 'prop-types';
import { Modal, Select, message } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

// Component
import InputCustom from "./InputCustom";
import AutoCompleteCustom from "./AutoCompleteCustom";

// Shared
import DatePickerComponent from '../Shared/DatePickerComponent';
import { typeName, convertTimeStamp } from '../Shared/GeneralInformationTable';

// Util
import { API_URL } from "../../../../utils/Config";

// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../../Img/close.png';

const provinceDataType = ['Rút tiền', 'Đáo'];

const optionsDevicePost = [
	{id: '1', value: 'Thiết bị 1'},
	{id: '2', value: 'Thiết bị 2'},
	{id: '3', value: 'Thiết bị 3'},
	{id: '4', value: 'Thiết bị 4'},
	{id: '5', value: 'Thiết bị 5'},
	{id: '6', value: 'Thiết bị 6'},
	{id: '7', value: 'Thiết bị 7'},
	{id: '8', value: 'Thiết bị 8'},
	{id: '9', value: 'Thiết bị 9'},
	{id: '10', value: 'Thiết bị 10'},
	{id: '11', value: 'Thiết bị 11'},
	{id: '12', value: 'Thiết bị 12'},
	{id: '13', value: 'Thiết bị 13'},
	{id: '14', value: 'Thiết bị 14'},
	{id: '15', value: 'Thiết bị 15'}
];

const optionsPercentBank = [
	{id: '1', value: '1.2'},
	{id: '2', value: '1.4'},
	{id: '3', value: '1.6'},
	{id: '4', value: '1.8'},
	{id: '5', value: '2'},
];

const { confirm } = Modal;

function ModalAddNew(props) {
	const { isModal, onCloseModal } = props;

	const initializationValue = {
		customerId: "000000000",
		[typeName.devicePost]: '', // Tên thiết bị
		[typeName.workTimestamp]: convertTimeStamp(), // Ngày làm
		[typeName.accountName]: '', // Chủ thẻ
		[typeName.cardNumber]: '', // Số thẻ
		[typeName.money]: 0, // Số tiền
		[typeName.percentBank]: 0, // % Phí ngân hàng
		[typeName.percentCustomer]: 0, // % Phí thu khách
		[typeName.type]: provinceDataType[0], // Hình thức
		[typeName.extends]: '', // Note
	};

	// All Data Modal Add news
	const [data, setData] = React.useState(initializationValue);

	// Loading
	const [confirmLoading, setConfirmLoading] = React.useState(false);

	const onCancelModal = () => {
		onCloseModal();
	};

	const onSuccess = () => {
		message.success('Thêm khách hàng mới thành công');
		setData({
			...data,
			[typeName.accountName]: '', // Chủ thẻ
			[typeName.cardNumber]: '', // Số thẻ
			[typeName.money]: 0, // Số tiền
			[typeName.extends]: '', // Note
		});
	};

	const onError = () => {
		confirm({
			okText: 'Thử lại',
			icon: <WarningOutlined style={{ color: 'red', fontSize: 35 }} />,
			cancelText: 'Đóng',
			title: 'Thêm khách hàng không thành công.',
			content: 'Rất tiếc vị sự bất tiện này, bạn có thể thử lại.',
			onOk() {onCallApi()},
			onCancel() {},
		});
	};

	const onFinally = () => {
		setConfirmLoading(false);
	};

	const onCallApi = () => {
		setConfirmLoading(true);
		callApiAdd();
	};

	const callApiAdd = () => {
		axios({
			method: "post",
			url: API_URL,
			data: {...data},
		}).then((response) => {
			if (response.status === 200) {
				onSuccess();
			}
		}).catch((error) => {
			onError();
			throw new Error("Thêm khách hàng mới thất bại ======== [[ Error ]] ==========>:", error);
		}).finally(() => {
			onFinally();
		});
	};

	const onOkModal = () => {
		if (data.devicePost && data.accountName && data.cardNumber && data.money && data.percentBank && data.percentCustomer && data.type) {
			onCallApi();
		} else {
			Modal.warning({
				title: 'Thông tin khách hàng không được để trống!',
				content: 'Vui lòng nhập đầy đủ thông tin khách hàng.',
			});
		}
	};

	const  onDatePicker = (dataTimeStamp) => {
		setData({ ...data, [typeName.workTimestamp]: dataTimeStamp });
	};

	const onChangeTag = (value) => {
		// Hình thức
		setData({ ...data, [typeName.type]: value  });
	};

	const onChangeInput = (value, type) => {
		setData({ ...data, [typeName[type]]: value })
	};

	console.log('123: ================>', 123); // Log QuanDX fix bug

	return(
		<Modal
			title="Thêm mới khách hàng"
			centered
			width={900}
			okText="Lưu"
			cancelText="Đóng"
			onOk={onOkModal}
			onCancel={onCancelModal}
			confirmLoading={confirmLoading}
			open={isModal}
			wrapClassName={styles.modalAddNew}
			closeIcon={<img src={close} alt="" width='12px' />}
		>
			<div className={styles.wrapContent}>
				<span className={styles.titleText}>Tên thiết bị:</span>
				<AutoCompleteCustom
					isText
					placeholder="Vui lòng nhập tên thiết bị"
					typeName={typeName.devicePost}
					optionsData={optionsDevicePost}
					onChangeInputCustom={onChangeInput}
				/>
			</div>
			<div className={styles.wrapContent}>
				<span className={styles.titleText}>Ngày làm:</span>
				<DatePickerComponent
					style={{width: '100%'}}
					onDatePicker={onDatePicker}
				/>
			</div>
			<div className={styles.wrapContent}>
				<span className={styles.titleText}>Chủ thẻ:</span>
				<InputCustom
					data={data}
					maxLength={100}
					placeholder="Tên chủ thẻ"
					typeName={typeName.accountName}
					onChangeInputCustom={onChangeInput}
				/>
			</div>
			<div className={styles.wrapContent}>
				<samp className={styles.titleText}>Số thẻ:</samp>
				<InputCustom
					data={data}
					maxLength={50}
					placeholder="Mã số thẻ"
					typeName={typeName.cardNumber}
					onChangeInputCustom={onChangeInput}
				/>
			</div>
			<div className={styles.wrapContent}>
				<span className={styles.titleText}>Số tiền nhận từ khách:</span>
				<InputCustom
					data={data}
					typeInputNumber
					typeName={typeName.money}
					max={100000000000000000000}
					onChangeInputCustom={onChangeInput}
				/>
			</div>
			<div className={styles.wrapContent}>
				<span className={styles.titleText}>% Phí ngân hàng: </span>
				<AutoCompleteCustom
					typeName={typeName.percentBank}
					optionsData={optionsPercentBank}
					onChangeInputCustom={onChangeInput}
					placeholder="Vui lòng nhập % phí ngân hàng"
				/>
			</div>
			<div className={styles.wrapContent}>
				<span className={styles.titleText}>% Phí thu khách:</span>
				<AutoCompleteCustom
					optionsData={optionsPercentBank}
					typeName={typeName.percentCustomer}
					onChangeInputCustom={onChangeInput}
					placeholder="Vui lòng nhập % phí thu khách"
				/>
			</div>
			<div className={styles.wrapContent}>
				<span className={styles.titleText}>Hình thức:</span>
				<Select
					size="large"
					onChange={onChangeTag}
					style={{ width: '100%' }}
					defaultValue={provinceDataType[0]}
					options={provinceDataType.map((province) => ({
						label: province,
						value: province,
					}))}
				/>
			</div>
			<div>
				<span className={styles.titleText}>Note:</span>
				<InputCustom
					data={data}
					typeName={typeName.extends}
					typeTextArea
					maxLength={250}
					onChangeInputCustom={onChangeInput}
				/>
			</div>
		</Modal>
    );
}

ModalAddNew.propTypes = {
	isModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
};

ModalAddNew.defaultProps = {
	isModal: false,
};

export default React.memo(ModalAddNew);
