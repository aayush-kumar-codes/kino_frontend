import { Table } from 'antd';
import { Button } from '@mui/material';

const columns = [
    {
        title: 'Browser',
        dataIndex: 'browser',
        key: 'browser',
    },
    {
        title: 'IP Address',
        dataIndex: 'ip_address',
        key: 'ip_address',
    },

    {
        title: 'Date/Time',
        key: 'date_time',
        dataIndex: 'date_time',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
    },
];
const data = [
    {
        key: '1',
        browser: 'Chrome on Window',
        ip_address: '192. 168. 111. 11',
        date_time: '1/04/2023 : 10: 10am',
        action: <Button variant='contained' size='medium'>Action</Button>
    },
    {
        key: '1',
        browser: 'Chrome on Window',
        ip_address: '192. 168. 111. 11',
        date_time: '1/04/2023 : 10: 10am',
        action: <Button variant='contained' size='medium'>Action</Button>
    }, {
        key: '1',
        browser: 'Chrome on Window',
        ip_address: '192. 168. 111. 11',
        date_time: '1/04/2023 : 10: 10am',
        action: <Button variant='contained' size='medium'>Action</Button>
    },

];

const ActivityLogTable = () => <div style={{ marginTop: "1rem", }}>
    <Table columns={columns} dataSource={data} pagination={false} />
</div>;

export default ActivityLogTable;