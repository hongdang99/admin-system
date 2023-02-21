/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/25/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

// Style
import styles from './Styles/index.module.scss';

// image
import close from '../../../Img/close.png';

function ModalNote({ open, setOpen, dataInvoice }) {

	const onClick = () => {
		setOpen({});
	};

	const device = dataInvoice.device || "";
	const workTime = dataInvoice.workTime || "";
	const name = dataInvoice.name || "";
	const cardNumber = dataInvoice.cardNumber || "";
	const amountOfMoney = dataInvoice.amountOfMoney || "0 vnđ";
	const bankingFee =  dataInvoice.bankingFee || "";
	const bankFees = dataInvoice.bankFees || "0 vnđ";
	const customerCharge = dataInvoice.customerCharge || "";
	const fees = dataInvoice.fees || "0 vnđ";
	const interestRate = dataInvoice.interestRate || "0 vnđ";
	const note = dataInvoice.extends || "";
	const tag = dataInvoice.tag || "";

	return(
	    <Modal
		    title="Thông tin chi tiết"
		    centered
		    open={open}
		    closeIcon={<img src={close} alt="" width='12px' />}
		    width={600}
		    onOk={onClick}
		    onCancel={onClick}
		    wrapClassName={styles.wrapModal}
		    footer={
			    <Button onClick={onClick} type="primary" danger>
				    Đóng
			    </Button>
		    }
	    >
		    <p className={styles.wrapText}>Tên thiết bị:
			    <span className={styles.contentText}> {device}</span>
		    </p>
		    <p className={styles.wrapText}>Thời gian làm:
			    <span className={styles.contentText}> {workTime}</span>
		    </p>
		    <p className={styles.wrapText}>Chủ thẻ:
			    <span className={styles.contentText}> {name}</span>
			</p>
		    <p className={styles.wrapText}>Mã số thẻ:
			    <span className={styles.contentText}> {cardNumber}</span>
			</p>
		    <p className={styles.wrapText}>Số tiền nhận từ khách:
			    <span className={styles.contentText}> {amountOfMoney}</span>
			</p>
		    <p className={styles.wrapText}>% Phí ngân hàng:
			    <span className={styles.contentText}> {bankingFee} %</span></p>
		    <p className={styles.wrapText}>Phí thu:
			    <span className={styles.contentText}> {fees}</span>
			</p>
		    <p className={styles.wrapText}>Phí ngân hàng:
			    <span className={styles.contentText}> {bankFees}</span>
			</p>
		    <p className={styles.wrapText}>% Phí thu khách:
			    <span className={styles.contentText}> {customerCharge} %</span>
		    </p>
		    <p className={styles.wrapText}> Số tiền lãi:
			    <span className={styles.contentText}> {interestRate}</span>
			</p>
		    <p className={styles.wrapText}>Hình thức:
			    <span className={styles.contentText}> {tag}</span>
		    </p>
		    <p className={styles.wrapText}>Note:
				<span className={styles.contentText}> {note}</span>
		    </p>
	    </Modal>
    );
}

ModalNote.propTypes = {
	open: PropTypes.bool,
	setOpen: PropTypes.func,
	dataInvoice: PropTypes.object,
};

ModalNote.defaultProps = {
	open: false,
	dataInvoice: {},
};

export default React.memo(ModalNote);
