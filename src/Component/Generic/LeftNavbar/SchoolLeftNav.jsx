import { Layout, Menu } from 'antd';
import styles from '@/styles/adminNavbar.module.css'
import { AiOutlineCheckCircle, AiOutlineHome, AiOutlineLogout, AiOutlinePlusCircle, AiOutlineSetting, AiOutlineWallet } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BsBook } from 'react-icons/bs';
import { IoIosPeople, IoMdSchool } from 'react-icons/io';
import { BiUser } from 'react-icons/bi';
import { MdAccountBox } from 'react-icons/md';
import { useSelector } from 'react-redux';

const { Sider } = Layout;

function SchoolLeftNav() {
    const router = useRouter()
    const pathname = router.asPath.split('/dashboard/school/')[1];
    const { isCollapsed } = useSelector(state => state.navbar)
    const [defaultSelectedItem, setDefaultSelectedItem] = useState('1')

    useEffect(() => {
        if (pathname) {

        }
        else
            setDefaultSelectedItem('1')
    }, [])

    const handleChange = ({ key }) => {
        if (key === '1')
            router.push('/dashboard/school')

    }

    return (
        <Sider trigger={null} collapsible collapsed={isCollapsed}
            collapsedWidth={'85px'}
            width={'270px'}
            style={{ minHeight: '100%' }}
            className={styles.layout_nav}
        >
            <div className={styles.logo} >
                {
                    isCollapsed ? 'K' : 'KAINO'
                }
            </div>
            <Menu
                theme="dark"
                mode="inline"
                style={{
                    background: '#891b55',
                    padding: "10px 16px",
                    borderRadius: "0 20px 16px 0",
                    display: "flex",
                    flexDirection: 'column',
                    gap: "0.5rem",
                    color: '#fff',
                    fontWeight: '600'
                }}
                defaultSelectedKeys={['1']}
                selectedKeys={[defaultSelectedItem]}
                onSelect={(info) => handleChange(info)}
            >
                <Menu.Item key="1" icon={<AiOutlineHome size={"1.6rem"} />} style={{ width: "100%" }}>
                    Dashboard
                </Menu.Item>
                <Menu.SubMenu key="2" icon={<AiOutlinePlusCircle size={"1.6rem"} />} title="Create" style={{ width: "100%" }}>
                    <Menu.Item key="3" style={{ width: "100%" }}>Student</Menu.Item>
                    <Menu.Item key="4" style={{ width: "100%" }}>Parent</Menu.Item>
                    <Menu.Item key="5" style={{ width: "100%" }}>Teachers</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="6" icon={<BsBook size={"1.6rem"} />} style={{ width: "100%" }}>
                    Classes
                </Menu.Item>
                <Menu.Item key="7" icon={<IoMdSchool size={"1.6rem"} />} style={{ width: "100%" }}>
                    Students
                </Menu.Item>
                <Menu.Item key="8" icon={<IoIosPeople size={"1.6rem"} />} style={{ width: "100%" }}>
                    Teachers
                </Menu.Item>
                <Menu.Item key="9" icon={<BiUser size={"1.6rem"} />} style={{ width: "100%" }}>
                    Parents
                </Menu.Item>
                <Menu.Item key="10" icon={<AiOutlineCheckCircle size={"1.6rem"} />} style={{ width: "100%" }}>
                    Roll-Call
                </Menu.Item>
                <Menu.Item key="11" icon={<AiOutlineWallet size={"1.6rem"} />} style={{ width: "100%" }}>
                    Subscription
                </Menu.Item>
                <Menu.Item key="12" icon={<MdAccountBox size={"1.6rem"} />} style={{ width: "100%" }}>
                    Accounts
                </Menu.Item>
                <Menu.Item key="13" icon={<AiOutlineSetting size={"1.6rem"} />} style={{ width: "100%" }}>
                    Settings
                </Menu.Item>
                <Menu.Item key="14" icon={<AiOutlineLogout size={"1.6rem"} />} style={{ width: "100%" }}>
                    Log out
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SchoolLeftNav