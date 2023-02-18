const NAME = {
    LOGIN: "login", // Đăng nhập 
    TRANSACTIONS: "transactions", // Giao dịch
    CALENDAR: "calendar", // Lịch đáo thẻ
    CUMTOMER: 'customer', // Khách hàng
    ACCOUNT_MANAGEMENT: 'account-management', // quản lý tài khoản
    STAFF: 'staff', // nhân viến
    STATISTICAL: 'statistical', // Thống kê
}
const ROUTES = {
    LOGIN: `/${NAME.LOGIN}`,
    TRANSACTIONS: `/${NAME.TRANSACTIONS}`,
    CALENDAR: `/${NAME.CALENDAR}`,
    CUMTOMER: `/${NAME.CUMTOMER}`,
    STAFF: `/${NAME.STAFF}`,
    ACCOUNT_MANAGEMENT: `/${NAME.ACCOUNT_MANAGEMENT}`,
    STATISTICAL: `/${NAME.STATISTICAL}`,
}

export default ROUTES;