/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 1/15/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import axios from "axios";

// Config
import { API_URL } from './Config';

export default function ApiAddData(
	method = "get",
	url = API_URL,
	body,
	onSuccess,
	onFailure,
) {
	return axios({
		method: method,
		url: url,
		data: body,
	}).then((response) => {
		onSuccess();
	}).catch((error) => {
		onFailure();
		throw new Error('[[ERROR]]:Add data lỗi vui lòng kiểm tra lại:', error);
	});
}

// import axios from 'axios';
// async function CallApi(url, onSuccess, onFailure) {
// 	await axios
// 		.get(`${url}`, {
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'version': 'v.0.0.0'
// 			},
// 		})
// 		.then((response) => {
// 			if(response === 200) {
// 				console.log('response: =======[ Thành công ]========>', response); // Log QuanDX fix bug
// 				onSuccess();
// 			}
// 		})
// 		.catch((error) => {
// 			onFailure();
// 			throw new Error('[[ERROR]]:Gọi api lấy danh sách thông kê bị lỗi:', error);
// 		});
// }
//
// export default CallApi;
