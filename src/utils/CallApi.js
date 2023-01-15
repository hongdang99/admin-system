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

export default function CallApi(
	method = "get",
	url = API_URL,
	body
) {
	return axios({
		method: method,
		url: url,
		data: body,
	}).catch((error) => {
		throw new Error("Lỗi say ra khi call API vui lòng kiểm tra lại ==========>: ", error);
	});
}