import { Avatar, Table } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id'
    },
    {
        title: 'Invoice from',
        dataIndex: 'invoice_from',
    },
    {
        title: 'Subscription',
        dataIndex: 'subscription',
    },
    {
        title: 'Created On',
        dataIndex: 'created_on',
    },
    {
        title: 'Amount (UGX)',
        dataIndex: 'assigned_students',
    },
    {
        title: 'Status',
        render: (text) => (
            <p>{text} </p>
        ),
    },
    {
        title: 'Details',
        render: (text) => (
            <p>{text} </p>
        ),
    }
];

const InvoicesTable = ({ data }) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
        />
    );
};

export default InvoicesTable;
