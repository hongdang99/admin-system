/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 09/09/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

// todo-note: validate email
const validateInputEmail = (text) => {
    /* reg exp để kiểm tra xem chuỗi định dạng email */
    /* kiểm tra linh@bkav.com || linh@bkav.com.vn */
    /* -->,;:~!%^$#=?/`<--: những ký tự này không cho phép */
    // const regexp =
    //     /^(([^<>()[\][\]\\.,;:~!%^$#=?/`\s@"]+(\.[^<>()[\][\]\\.,;:~!%^$#=?/\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regexp.test(text);
    return String(text)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
//
// const validatePasswordCharacters = (text: string) => {
//     /* validate từ 6-> 15  ký tự */
//     const regexp = /^.{0,15}$/;
//     return regexp.test(text);
// };

// const validateNumber = (number: number) => {
//     const checkNumber = /^\d+$/;
//     return checkNumber.test(String(number));
// }

const validatePasswordString = (text) => {
    /* không có ký tự chũ Việt Nam */
    const regexp = /^[A-Za-z0-9]*$/;
    return regexp.test(text);
};

const removeAscent = (text) => {
    if (text === null || text === undefined) return text;
    text = text.toLowerCase();
    text = text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    text = text.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    text = text.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    text = text.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    text = text.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    text = text.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    text = text.replace(/đ/g, 'd');
    return text;
};


const isName = (text) => {
    const regexName = /^[a-zA-Z ]{2,}$/g;
    return regexName.test(removeAscent(text));
};

export { validatePasswordString, isName, validateInputEmail };
