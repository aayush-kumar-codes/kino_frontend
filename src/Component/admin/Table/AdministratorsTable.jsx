import { Table } from 'antd';
import { Button } from '@mui/material';
import styles from '@/styles/adminUserRoles.module.css'

const columns = [
    {
        title: 'Account',
        dataIndex: 'account',
        key: 'account',
    },
    {
        title: 'Email Address',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Access',
        key: 'access',
        dataIndex: 'access',
    },
    {
        title: 'Last Active',
        key: 'last_active',
        dataIndex: 'last_active',
    },
    {
        title: 'Activity',
        key: 'activity',
        dataIndex: 'activity',
    },
];
const data = [
    {
        key: '1',
        account: 'John Brown',
        email: 'xyz@xyz.com',
        role: 'Super Admin',
        access: "Full",
        last_active: '25/05/2023',
        activity: <Button className={styles.btn} variant='contained' size='medium'>Remove</Button>
    },
    {
        key: '1',
        account: 'John Brown',
        email: 'xyz@xyz.com',
        role: 'Super Admin',
        access: "Full",
        last_active: '25/05/2023',
        activity: <Button className={styles.btn} variant='contained' size='medium'>Remove</Button>
    },
    {
        key: '1',
        account: 'John Brown',
        email: 'xyz@xyz.com',
        role: 'Super Admin',
        access: "Full",
        last_active: '25/05/2023',
        activity: <Button className={styles.btn} variant='contained' size='medium'>Remove</Button>
    },
    {
        key: '1',
        account: 'John Brown',
        email: 'xyz@xyz.com',
        role: 'Super Admin',
        access: "Full",
        last_active: '25/05/2023',
        activity: <Button className={styles.btn} variant='contained' size='medium'>Remove</Button>
    },

];

const AdministratorsTable = () => <div className={styles.tableContainer}>
    <Table columns={columns} dataSource={data} pagination={false}/>
</div>;

export default AdministratorsTable;