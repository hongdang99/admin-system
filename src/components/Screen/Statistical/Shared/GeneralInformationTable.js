/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/8/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

const dateFormatList = ["DD/MM/YYYY"];

const today = () => {
	const dates = new Date();
	return (
		("0" + dates.getDate()).slice(-2) + "/" + ("0" + (dates.getMonth() + 1)).slice(-2) + "/" +dates.getFullYear()
	);
};

const convertMDY = (dateStringDMY) => {
	const dataNew = dateStringDMY || today();
	const parts = dataNew.split('/');
	return parts[1] + '/' + parts[0] + '/' + parts[2];
};


const convertTimeStamp = (dateStringMDY) => {
	const dateString = dateStringMDY || convertMDY();
	const dateObject = new Date(dateString);
	return dateObject.getTime();
};


const typeName = {
	devicePost: 'devicePost', // Tên máy Pos làm
	workTimestamp: 'workTimestamp', // Ngày làm
	accountName: 'accountName', // Chủ thẻ
	cardNumber: 'cardNumber', // Số thẻ
	money: 'money', // Số tiền
	percentBank: 'percentBank', // % Phí ngân hàng
	bankFees: 'bankFees', // Phí ngân hàng
	percentCustomer: 'percentCustomer', // % Phí thu khách
	fees: 'fees', // Phí thu
	interestRate: 'interestRate', // Lãi
	extends: 'extends',  // Note
	type: 'type', // Hình thức
}

export { dateFormatList, today, convertMDY, convertTimeStamp, typeName };
