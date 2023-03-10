/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 2/12/2023.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from "react";

// Base
import { flagInput } from "../../Base/Regex/FlagInput";
import { validateInputEmail } from "../../Base/Regex/checkRegex";

function useLogin() {
    const { TYPE_EMAIL, TYPE_PASSWORD, SUCCESS } = flagInput;

    const [messageError, setMessageError] = React.useState({
	    Email: '', Password: ''
    });

    const refInputEmail = React.useRef(null);
    const refInputPassword = React.useRef(null);

    const inputValue = (email) => {
        return email.current.value?.trim();
    };

    const checkValidateEmail = () => {
        if (inputValue(refInputEmail) === '') {
            return 'Email không được để trống.';
        }
        if (!validateInputEmail(inputValue(refInputEmail))) {
            return 'Vui lòng kiểm tra lại Email!';
        }
        return SUCCESS;
    };

    const checkValidatePassword = () => {
        if (inputValue(refInputPassword) === '') {
            return 'Mật khẩu không được để trống.';
        }
        return SUCCESS;
    };

    const onBlurInput = (type) => {
        setMessageError({ ...messageError, [type]: checkItemInput(type) });
    };

    const onFocusInput = (type) => {
        setMessageError({ ...messageError, [type]: '' });
    };

    const checkItemInput = (type) => {
        switch (type) {
            case TYPE_EMAIL:
                return checkValidateEmail();
            case TYPE_PASSWORD:
                return checkValidatePassword();
            default:
                return null;
        }
    };

    const checkAllInput = () => ({
	    Email: checkValidateEmail(),
        Password: checkValidatePassword(),
    });
    return({
        messageError,
        setMessageError,
	    refInputEmail,
        refInputPassword,
        onBlurInput,
        onFocusInput,
        checkAllInput,
	    TYPE_EMAIL,
        TYPE_PASSWORD,
        SUCCESS,
    });
}

export default useLogin;
