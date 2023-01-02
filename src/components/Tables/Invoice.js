/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 12/24/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Tag, Popconfirm } from "antd";

// Component
import ModalNote from "./ModalNote";
import { dataFakeHasInvoice, listDataInvoice } from "./DataFake";

// Styles
import styles from './Styles/index.less';

// Img
import note from '../Img/notes.png';

function Invoice() {
	const [searchText, setSearchText] = React.useState("");
	const [searchedColumn, setSearchedColumn] = React.useState("");
	const searchInput = React.useRef(null);

	// Đóng mở Modal
	const [dataInvoice, setDataInvoice] = React.useState({});


	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters, selectedKeys, confirm, dataIndex) => {
		clearFilters();
		setSearchText("");

		// Clear
		handleSearch(selectedKeys, confirm, dataIndex);
	};

	const getColumnSearchProps = (dataIndex, title) => ({
		filterDropdown: ({
             setSelectedKeys,
             selectedKeys,
             confirm,
             clearFilters,
             close
		}) => (
			<div
				style={{
					padding: 8
				}}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<Input
					ref={searchInput}
					placeholder={`Tìm kiếm theo ${title}`}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{
						marginBottom: 8,
						display: "block"
					}}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{
							width: 100
						}}
					>
						Tìm kiếm
					</Button>
					<Button
						onClick={() => clearFilters && handleReset(clearFilters, selectedKeys, confirm, dataIndex)}
						size="small"
						style={{
							width: 100
						}}
					>
						Xóa tìm kiếm
					</Button>
					<Button
						type="link"
						size="small"
						onClick={() => {
							close();
						}}
					>
						Đóng
					</Button>
				</Space>
			</div>
		),

		filterIcon: (filtered) => (
			<SearchOutlined
				style={{
					color: filtered ? "#1890ff" : undefined
				}}
			/>
		),

		onFilter: (value, record) =>
			record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},

		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: "#ffc069",
						padding: 0
					}}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			)
	});


	const onClickNote = (record) => {
		setDataInvoice(record);
	};

	const onClickDeleteItem = (id) => {
		console.log('id: ================>', id); // Log QuanDX fix bug
	};

	const columns = [
		{
			title: "Tên thiết bị",
			dataIndex: "device",
			key: "device",
			...getColumnSearchProps("device", "tên thiết bị"),
			sorter: (a, b) => a.device.length - b.device.length,
			sortDirections: ["descend", "ascend"]
		},
		{
			title: "Ngày làm",
			dataIndex: "workTime",
			key: "workTime",
		},
		{
			title: "Chủ thẻ",
			dataIndex: "name",
			key: "name",
			...getColumnSearchProps("name", "chủ thẻ"),
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ["descend", "ascend"]
		},
		{
			title: "Số thẻ",
			dataIndex: "cardNumber",
			key: "cardNumber",
		},
		{
			title: "Số tiền",
			dataIndex: "amountOfMoney",
			key: "amountOfMoney",
		},
		{
			title: "% Phí ngân hàng",
			dataIndex: "bankingFee",
			key: "bankingFee",
		},
		{
			title: "Phí ngân hàng",
			dataIndex: "bankFees",
			key: "bankFees",
		},
		{
			title: "% Phí thu khách",
			dataIndex: "customerCharge",
			key: "customerCharge",
		},
		{
			title: "Phí thu",
			dataIndex: "fees",
			key: "fees",
		},
		{
			title: "Lãi",
			dataIndex: "interestRate",
			key: "interestRate",
		},
		{
			title: "Hình thức",
			key: "tag",
			dataIndex: "tag",
			render: (_, { tag }) => (
				<>
					{tag.map((tag) => {
						let color = tag.length > 5 ? "geekblue" : "green";
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			)
		},
		{
			title: "Note",
			Key: "Note",
			dataIndex: "Note",
			align: "center",
			render: (_, record) => (
				<Space size="middle">
					<a onClick={() => onClickNote(record)}>
						<img src={note} alt='note' width="20px" />
					</a>
				</Space>
			),
		},
		{
			title: "operation",
			key: "operation",
			dataIndex: "operation",
			render: (_, record) =>
				listDataInvoice.length >= 1 ? (
					<Popconfirm
						okText="Có"
						cancelText="Không"
						title="Bạn có chắc muốn xóa ?"
						onConfirm={() => onClickDeleteItem(record.key)}
					>
						<a>Xóa</a>
					</Popconfirm>
				) : null
		},
	];

	const cancel = (current, pageSize) => {
		console.log('current: ================>', current); // Log QuanDX fix bug
		console.log('pageSize: ================>', pageSize); // Log QuanDX fix bug
	};

	const total = dataFakeHasInvoice.HasInvoice['total'] || 0;

    return(
    	<div className={styles.wrapInvoice}>
		    <Table
			    columns={columns}
			    dataSource={listDataInvoice}
			    pagination={{
				    onChange: cancel,
				    defaultCurrent: 1,
				    total
		        }}
		    />
		    <ModalNote open={Object.values(dataInvoice).length !== 0} setOpen={onClickNote} dataInvoice={dataInvoice} />
	    </div>
    );
}

Invoice.propTypes = {};

Invoice.defaultProps = {};

export default Invoice;
