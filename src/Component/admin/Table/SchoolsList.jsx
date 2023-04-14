import { Avatar, Table } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        sorter: (a, b) => a.id - b.id,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'School',
        render: (text) => (
            <p><Avatar size="medium" src={text.logo_img} style={{ marginRight: "8px" }} /> {text.name} </p>
        ),
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Subscription',
        dataIndex: 'subscriptions',
        render: (text) => (
            <p>{text.replace('_', " ")}</p>
        ),
        sorter: (a, b) => a.subscriptions - b.subscriptions,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Total Students',
        dataIndex: 'total_students',
        sorter: (a, b) => a.total_students - b.total_students,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Country',
        dataIndex: 'country',
        sorter: (a, b) => a.country.localeCompare(b.country),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Mobile Number',
        dataIndex: 'phone',
        sorter: (a, b) => a.phone.localeCompare(b.phone),
        sortDirections: ['descend', 'ascend'],
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};

const SchoolsList = ({ data }) => {
    return (
        <Table
            rowSelection={{
                type: 'checkbox',
                ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
};

export default SchoolsList;
