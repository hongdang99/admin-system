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
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Modal, DatePicker, Select } from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';

// Component
import InputCustom from "./InputCustom";

// Shared
import { dateFormatList, today, typeName } from '../Shared/GeneralInformationTable';

// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../../Img/close.png';

// Antd
const provinceData = ['Rút tiền', 'Đáo'];

const options = [
	{id: '1', value: 'Thiết bị 1', label: 'Thiết bị 1'},
	{id: '2', value: 'Thiết bị 2', label: 'Thiết bị 2'},
	{id: '3', value: 'Thiết bị 3', label: 'Thiết bị 3'},
	{id: '4', value: 'Thiết bị 4', label: 'Thiết bị 4'},
	{id: '5', value: 'Thiết bị 5', label: 'Thiết bị 5'},
	{id: '6', value: 'Thiết bị 6', label: 'Thiết bị 6'},
	{id: '7', value: 'Thiết bị 7', label: 'Thiết bị 7'},
	{id: '8', value: 'Thiết bị 8', label: 'Thiết bị 8'},
	{id: '9', value: 'Thiết bị 9', label: 'Thiết bị 9'},
	{id: '10', value: 'Thiết bị 10', label: 'Thiết bị 10'},
	{id: '11', value: 'Thiết bị 11', label: 'Thiết bị 11'},
	{id: '12', value: 'Thiết bị 12', label: 'Thiết bị 12'},
	{id: '13', value: 'Thiết bị 13', label: 'Thiết bị 13'},
	{id: '14', value: 'Thiết bị 14', label: 'Thiết bị 14'},
	{id: '15', value: 'Thiết bị 15', label: 'Thiết bị 15'}
];

function ModalAddNew(props) {
	const { isModal, onCloseModal } = props;

	const initializationValue = {
		[typeName.devicePost]: options[0].label, // Tên thiết bị
		[typeName.workTime]: today(), // Ngày làm
		[typeName.accountName]: '', // Chủ thẻ
		[typeName.cardNumber]: '', // Số thẻ
		[typeName.amountOfMoney]: 0, // Số tiền
		[typeName.bankingFee]: 0, // % Phí ngân hàng
		[typeName.customerCharge]: 0, // % Phí thu khách
		[typeName.tag]: provinceData[0], // Hình thức
		[typeName.note]: '', // Note
	};

	// All Data Modal Add news
	const [data, setData] = React.useState(initializationValue);

	// Loading
	const [confirmLoading, setConfirmLoading] = React.useState(false);

	const onCancelModal = () => {
		setData(initializationValue);
		onCloseModal();
	};

	const onOkModal = () => {
		if (data.accountName && data.cardNumber && data.amountOfMoney && data.bankingFee && data.customerCharge) {
			setConfirmLoading(true);
			// Fake call API
			setTimeout(() => {
				onCancelModal();
				setConfirmLoading(false);
			}, 2000);
			console.log('data: ================>', data); // Log QuanDX fix bug
		} else {
			Modal.warning({
				title: 'Thông tin khách hàng không được để trống!',
				content: 'Vui lòng nhập đầy đủ thông tin khách hàng.',
			});
		}
	};

	const onChangeDevice = (value) => {
		// Tên thiết bị
		setData({...data, [typeName.devicePost]: value  });
	};

	const onChangeDatePicker = (date, dateString) => {
		// Chọn ngày làm
		setData({ ...data, [typeName.workTime]: dateString });
	};

	const onChangeTag = (value) => {
		// Hình thức
		setData({ ...data, [typeName.tag]: value  });
	};

	const onChangeInput = (value, type) => {
		setData({ ...data, [typeName[type]]: value })
	};

    return(
	    <Modal
		    title="Thêm mới khách hàng"
		    centered
		    width={800}
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
			    <Select
				    size="middle"
				    defaultValue={options[0].label}
				    onChange={onChangeDevice}
				    style={{
					    width: 750,
				    }}
				    options={options}
			    />
		    </div>
		    <div className={styles.wrapContent}>
			    <span className={styles.titleText}>Ngày làm:</span>
			    <DatePicker
				    style={{
					    width: 750,
				    }}
				    locale={locale}
				    placeholder="Chọn ngày làm"
				    onChange={onChangeDatePicker}
				    defaultValue={dayjs(today(), dateFormatList[0])}
				    format={dateFormatList}
				    dateRender={(current) => {
					    const style = {};
					    if (current.date() === 1) {
						    style.border = "1px solid #1890ff";
						    style.borderRadius = "50%";
					    }
					    return (
						    <div className="ant-picker-cell-inner" style={style}>
							    {current.date()}
						    </div>
					    );
				    }}
			    />
		    </div>
		    <div className={styles.wrapContent}>
			    <span className={styles.titleText}>Chủ thẻ:</span>
			    <InputCustom
				    data={data}
				    typeName={typeName.accountName}
				    placeholder="Tên chủ thẻ"
				    maxLength={50}
				    onChangeInputCustom={onChangeInput}
			    />
		    </div>
		    <div className={styles.wrapContent}>
			    <samp className={styles.titleText}>Số thẻ:</samp>
			    <InputCustom
				    data={data}
				    typeName={typeName.cardNumber}
				    placeholder="Mã số thẻ"
				    maxLength={50}
				    onChangeInputCustom={onChangeInput}
			    />
		    </div>
		    <div className={styles.wrapContent}>
			    <span className={styles.titleText}>Số tiền nhận từ khách:</span>
			    <InputCustom
				    data={data}
				    typeInputNumber
				    typeMoney
				    style={{ width: 750 }}
				    typeName={typeName.amountOfMoney}
				    max={100000000000000000000}
				    onChangeInputCustom={onChangeInput}
			    />
		    </div>
		    <div className={styles.wrapContent}>
			    <span className={styles.titleText}>% Phí ngân hàng: </span>
			    <InputCustom
				    data={data}
				    typeInputNumber
				    style={{ width: 750 }}
				    typeName={typeName.bankingFee}
				    max={100000000}
				    onChangeInputCustom={onChangeInput}
			    />
		    </div>
		    <div className={styles.wrapContent}>
			    <span className={styles.titleText}>% Phí thu khách:</span>
			    <InputCustom
				    data={data}
				    typeInputNumber
				    style={{ width: 750 }}
				    typeName={typeName.customerCharge}
				    max={100000000}
				    onChangeInputCustom={onChangeInput}
			    />
		    </div>
		    <div className={styles.wrapContent}>
			    <span className={styles.titleText}>Hình thức:</span>
			    <Select
				    defaultValue={provinceData[0]}
				    style={{
					    width: 750,
				    }}
				    onChange={onChangeTag}
				    options={provinceData.map((province) => ({
					    label: province,
					    value: province,
				    }))}
			    />
		    </div>
		    <div>
			    <span className={styles.titleText}>Note:</span>
			    <InputCustom
				    data={data}
				    typeName={typeName.note}
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
