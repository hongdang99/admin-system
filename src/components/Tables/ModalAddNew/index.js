/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/2/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import dayjs from "dayjs";
// import PropTypes from 'prop-types';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal, DatePicker, Input, InputNumber, Select } from 'antd';

// Component
import InputCustom from "./InputCustom";

// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../Img/close.png';


// Antd
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
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

function ModalAddNew() {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	const [data, setData] = React.useState({
         // Todo: QuanDX lưu tất cả value của các trường vào đây
	});

	const showModal = () => {
		setIsModalOpen(true);
	};

	const onClose = () => {
		setIsModalOpen(false);
	}
	const handleOk = () => {
		onClose();
	};


	const dateDefault = () => {
		const dates = new Date();
		return (
			("0" + dates.getDate()).slice(-2) +
			"/" +
			("0" + (dates.getMonth() + 1)).slice(-2) +
			"/" +
			dates.getFullYear()
		);
	};
	const onChanges = (date, dateString) => {
		// Chọn ngày làm
		console.log("dateString ============>", dateString);
	};

	const onChange = (value) => {
		console.log('value: ================>', value); // Log QuanDX fix bug
	};

	const handleProvinceChange = (value) => {
		// Hình thức
		console.log('value: ================>', value); // Log QuanDX fix bug
	};

	const handleChange = (value) => {
		// Tên thiết bị
		console.log('value: ================>', value); // Log QuanDX fix bug
	};

	const onChangeInput = (value) => {
		console.log('value: ================>', value); // Log QuanDX fix bug
	};

    return(
        <div className={styles.wrapModalAddNew}>
	        <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>
		        Thêm mới
	        </Button>
	        <Modal
		        title="Thêm mới khách hàng"
		        centered
		        width={800}
		        okText="Lưu"
		        cancelText="Đóng"
		        onOk={handleOk}
		        onCancel={onClose}
		        open={isModalOpen}
		        wrapClassName={styles.wrapModalAdd}
		        closeIcon={<img src={close} alt="" width='12px' />}
	        >
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>Tên thiết bị:</span>
			        <Select
				        size="middle"
				        defaultValue={options[0].label}
				        onChange={handleChange}
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
				        placeholder="Chọn ngày làm"
				        onChange={onChanges}
				        defaultValue={dayjs(dateDefault(), dateFormatList[0])}
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
				        placeholder="Tên chủ thẻ"
				        maxLength={50}
				        onChangeInputCustom={onChangeInput}
			        />
		        </div>
		        <div className={styles.wrapContent}>
			        <samp className={styles.titleText}>Số thẻ:</samp>
			        <InputCustom
				        placeholder="Mã số thẻ"
				        maxLength={50}
				        onChangeInputCustom={onChangeInput}
			        />
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>Số tiền nhận từ khách:</span>
			        <InputNumber style={{ width: 750 }} min={1} max={100000000000000000000} defaultValue={0} onChange={onChange} />
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>% Phí ngân hàng: </span>
			        <InputNumber style={{ width: 750 }} min={1} max={1000} defaultValue={0} onChange={onChange} />
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>% Phí thu khách:</span>
			        <InputNumber style={{ width: 750 }} min={1} max={1000} defaultValue={0} onChange={onChange} />
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>Hình thức:</span>
			        <Select
				        defaultValue={provinceData[0]}
				        style={{
					        width: 750,
				        }}
				        onChange={handleProvinceChange}
				        options={provinceData.map((province) => ({
					        label: province,
					        value: province,
				        }))}
			        />
		        </div>
		        <div>
			        <span className={styles.titleText}>Note:</span>
			        <InputCustom
				        type
				        maxLength={250}
				        onChangeInputCustom={onChangeInput}
			        />
		        </div>
	        </Modal>
        </div>
    );
}

ModalAddNew.propTypes = {};

ModalAddNew.defaultProps = {};

export default React.memo(ModalAddNew);
