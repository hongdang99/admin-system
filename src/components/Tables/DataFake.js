/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/27/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */


const dataFakeHasInvoice = {
	HasInvoice: {
		total: 50,
		count: 16,
		itemIds: ["1", "2" , "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
	}
};

const dataFakeInvoice = {
	Invoice: {
		"1": {
			data: {
				key: "1",
				device: "Thiết bị 1", // Post làm
				workTime: "24/12/2022", // Ngày làm
				name: "An Giang", // Chủ thẻ
				cardNumber: "1", // Số thẻ
				amountOfMoney: "100,000,000 vnđ", // Số tiền
				bankingFee: "1,32", // % Phí ngân hàng
				bankFees: "300,000 vnđ", // Phí ngân hàng
				customerCharge: "1.8", // % Phí thu khác
				fees: "620,000 vnđ", // Phí thu
				interestRate: "320,000 vnđ", // Lãi
				note: "Đã xác nhận",
				tag: ["Đáo"]
			}
		},
		"2": {
			data: {
				key: "2",
				device: "Thiết bị 2",
				workTime: "24/12/2022",
				name: "Bà rịa – Vũng tàu",
				cardNumber: "2",
				amountOfMoney: "80,000,000 vnđ",
				bankingFee: "1,32",
				bankFees: "300,000 vnđ",
				customerCharge: "1.8",
				fees: "560,000 vnđ",
				interestRate: "260,000 vnđ",
				note: "Đã xác nhận",
				tag: ["Đáo"]
			}
		},
		"3": {
			data: {
				key: "3",
				device: 'Thiết bị 3',
				workTime: '24/12/2022',
				name: "Bắc Giang",
				cardNumber: '3',
				amountOfMoney: '10,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '300,000 vnđ',
				customerCharge: '1.8',
				fees: '490,000 vnđ',
				interestRate: '190,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"4": {
			data: {
				key: "4",
				device: 'Thiết bị 4',
				workTime: '24/12/2022',
				name: "Bắc Kạn",
				cardNumber: '4',
				amountOfMoney: '90,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '200,000 vnđ',
				customerCharge: '1.8',
				fees: '400,000 vnđ',
				interestRate: '200,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"5": {
			data: {
				key: "5",
				device: 'Thiết bị 5',
				workTime: '24/12/2022',
				name: "Bạc Liêu",
				cardNumber: '5',
				amountOfMoney: '70,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '330,000 vnđ',
				customerCharge: '1.8',
				fees: '660,000 vnđ',
				interestRate: '330,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"6": {
			data: {
				key: "6",
				device: 'Thiết bị 6',
				workTime: '24/12/2022',
				name: "Bắc Ninh",
				cardNumber: '6',
				amountOfMoney: '60,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '290,000 vnđ',
				customerCharge: '1.8',
				fees: '500,000 vnđ',
				interestRate: '110,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"7": {
			data: {
				key: "7",
				device: 'Thiết bị 7',
				workTime: '24/12/2022',
				name: "Bến Tre",
				cardNumber: '7',
				amountOfMoney: '50,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '350,000 vnđ',
				customerCharge: '1.8',
				fees: '560,000 vnđ',
				interestRate: '210,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"8": {
			data: {
				key: "8",
				device: 'Thiết bị 8',
				workTime: '24/12/2022',
				name: "Bình Định",
				cardNumber: '8',
				amountOfMoney: '140,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '200,000 vnđ',
				customerCharge: '1.8',
				fees: '450,000 vnđ',
				interestRate: '250,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"9": {
			data: {
				key: "9",
				device: 'Thiết bị 9',
				workTime: '24/12/2022',
				name: "Cà Mau",
				cardNumber: '9',
				amountOfMoney: '35,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '360,000 vnđ',
				customerCharge: '1.8',
				fees: '630,000 vnđ',
				interestRate: '230,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"10": {
			data: {
				key: "10",
				device: 'Thiết bị 10',
				workTime: '24/12/2022',
				name: "Cần Thơ",
				cardNumber: '10',
				amountOfMoney: '30,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '300,000 vnđ',
				customerCharge: '1.8',
				fees: '630,000 vnđ',
				interestRate: '330,000 vnđ',
				note: 'Ok đã đáo',
				tag: ["Rút tiền"],
			}
		},
		"11": {
			data: {
				key: "11",
				device: 'Thiết bị 11',
				workTime: '24/12/2022',
				name: "Hải Phòng",
				cardNumber: '11',
				amountOfMoney: '33,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '320,000 vnđ',
				customerCharge: '1.8',
				fees: '540,000 vnđ',
				interestRate: '220,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"12": {
			data:
				{
					key: "12",
					device: 'Thiết bị 12',
					workTime: '24/12/2022',
					name: "Hậu Giang",
					cardNumber: '12',
					amountOfMoney: '35,000,000 vnđ',
					bankingFee: '1,32',
					bankFees: '380,000 vnđ',
					customerCharge: '1.8',
					fees: '580,000 vnđ',
					interestRate: '200,000 vnđ',
					note: 'Đã xác nhận đáo',
					tag: ["Đáo"],
				}
				},
		"13": {
			data: {
				key: "13",
				device: 'Thiết bị 13',
				workTime: '24/12/2022',
				name: "Thành phố Hồ Chí Minh",
				cardNumber: '13',
				amountOfMoney: '4,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '390,000 vnđ',
				customerCharge: '1.8',
				fees: '590,000 vnđ',
				interestRate: '200,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"14": {
			data: {
				key: "14",
				device: 'Thiết bị 14',
				workTime: '24/12/2022',
				name: "Lâm Đồng",
				cardNumber: '14',
				amountOfMoney: '90,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '400,000 vnđ',
				customerCharge: '1.8',
				fees: '800,000 vnđ',
				interestRate: '400,000 vnđ',
				note: 'Đã xác nhận đáo',
				tag: ["Đáo"],
			}
		},
		"15": {
			data: {
				key: "15",
				device: 'Thiết bị 15',
				workTime: '24/12/2022',
				name: "Kon Tum",
				cardNumber: '15',
				amountOfMoney: '50,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '230,000 vnđ',
				customerCharge: '1.8',
				fees: '400,000 vnđ',
				interestRate: '170,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Rút tiền"],
			}
		},
		"16": {
			data: {
				key: "16",
				device: 'Thiết bị 16',
				workTime: '24/12/2022',
				name: "Hòa Bình",
				cardNumber: '16',
				amountOfMoney: '20,000,000 vnđ',
				bankingFee: '1,32',
				bankFees: '20,000 vnđ',
				customerCharge: '1.8',
				fees: '30,000 vnđ',
				interestRate: '10,000 vnđ',
				note: 'Xác nhận đáo',
				tag: ["Đáo"],
			}
		}
	}
};

const listDataInvoice = [];

const dataProcessingInvoice = (data) => {
	const { Invoice } = data;
	if (Object.keys(Invoice).length) {
		for (const property in Invoice) {
			if (Invoice.hasOwnProperty(property)) {
				const itemInvoice = Invoice[property].data;
				listDataInvoice.push(itemInvoice);
			}
		}
	}
};

dataProcessingInvoice(dataFakeInvoice);

export { dataFakeHasInvoice, dataFakeInvoice, listDataInvoice };

