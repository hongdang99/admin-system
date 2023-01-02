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
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Modal, DatePicker, Input, InputNumber } from 'antd';
// import PropTypes from 'prop-types';

// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../Img/close.png';

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const { TextArea } = Input;

function ModalAddNew() {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

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
		console.log("dateString ============>", dateString);
	};

	const onChange = (value) => {
		console.log('value: ================>', value); // Log QuanDX fix bug
	};

    return(
        <div className={styles.wrapModalAddNew}>
	        <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>
		        Thêm mới
	        </Button>
	        <Modal
		        title="Thêm mới khách hàng"
		        width={600}
		        onOk={handleOk}
		        open={isModalOpen}
		        onCancel={onClose}
		        wrapClassName={styles.wrapModalAdd}
		        closeIcon={<img src={close} alt="" width='12px' />}
	        >
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>Tên thiết bị:</span>
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>Ngày làm:</span>
			        <DatePicker
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
		        </div>
		        <div className={styles.wrapContent}>
			        <samp className={styles.titleText}>Số thẻ:</samp>
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>Số tiền nhận từ khách:</span>
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>% Phí ngân hàng: </span>
			        <InputNumber min={1} max={1000} defaultValue={0} onChange={onChange} />
		        </div>
		        <div className={styles.wrapContent}>
			        <span className={styles.titleText}>% Phí thu khách:</span>
			        <InputNumber min={1} max={1000} defaultValue={0} onChange={onChange} />
		        </div>
		        <dvi className={styles.wrapContent}>
			        <span className={styles.titleText}>Hình thức:</span>
		        </dvi>
		        <div>
			        <span className={styles.titleText}>Note:</span>
			        <TextArea rows={4} />
		        </div>
	        </Modal>
        </div>
    );
}

ModalAddNew.propTypes = {};

ModalAddNew.defaultProps = {};

export default React.memo(ModalAddNew);
