import { FaRegBuilding } from 'react-icons/fa'
import { BsTerminal } from 'react-icons/bs'
import { GoBook } from 'react-icons/go'
import { Avatar, Input, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import styles from '@/styles/adminNavbar.module.css'
import { AiOutlineArrowDown, AiOutlineHome, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineProfile, AiOutlineSearch, AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai';
import { CgNotes } from 'react-icons/cg';
import { MdImageAspectRatio, MdNotificationsNone } from 'react-icons/md'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Image from 'next/image';
import AdminDashboardContent from '../../Component/admin/adminDashboardContent';
const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}
                collapsedWidth={'85px'}
                width={'270px'}
                style={{ minHeight: '100%' }}
                className={styles.layout_nav}
            >
                <div className={styles.logo} >
                    {
                        collapsed ? 'K' : 'KAINO'
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
                        gap: "1.1rem"
                    }}
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <AiOutlineHome size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'Dashboard'
                        },
                        {
                            key: '2',
                            icon: <FaRegBuilding size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'Create School',
                        },
                        {
                            key: '3',
                            icon: <BsTerminal size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'Term System',
                        },
                        {
                            key: '4',
                            icon: <GoBook size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'Lessions',
                        },
                        {
                            key: '5',
                            icon: <AiOutlineUserAdd size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'User roles',
                        },
                        {
                            key: '6',
                            icon: <CgNotes size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'Finances',
                        },
                        {
                            key: '7',
                            icon: <AiOutlineSetting size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'Settings',
                        },
                        {
                            key: '8',
                            icon: <AiOutlineLogout size={"1.6rem"} />,
                            style: { width: "100%" },
                            label: 'Log out'
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        background: colorBgContainer,
                        justifyContent: "space-between",
                        paddingInline: "20px"
                    }}
                    className={styles.display_flex}
                >
                    <div className={styles.display_flex}>
                        {React.createElement(collapsed ? AiOutlineMenuUnfold : HiOutlineMenuAlt2, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                            size: "2rem",
                            color: "#891b55"
                        })}
                        <p className={styles.headerLeft_title}>Dashboard</p>
                    </div>
                    <div className={styles.display_flex}>
                        <Input size="large" placeholder="Search here" prefix={<AiOutlineSearch color='#938ADC' size={'1.2rem'} />}
                            style={{ background: "#eeeeee" }}
                        />
                        <div className={styles.rightHeader_circle}>
                            <Image src={"/uganda_icon.png"} width={30} height={30} alt='circle' />
                        </div>
                        <div className={styles.rightHeader_circle}>
                            <MdImageAspectRatio size={'28px'} />
                        </div>
                        <div className={styles.rightHeader_circle}>
                            <MdNotificationsNone size={'28px'} />
                        </div>
                        <div style={{ marginLeft: "15px", gap: '15px' }} className={styles.display_flex}>
                            <Avatar size="large" icon={<AiOutlineProfile />} />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ height: "20px", fontWeight: '700', color: "#505050" }}>user</span>
                                <span style={{ fontWeight: '700', color: "#7B91EA" }}>admin</span>
                            </div>
                            <div><AiOutlineArrowDown /></div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer
                    }}
                >
                    <AdminDashboardContent />
                </Content>
            </Layout>
        </Layout>
    );
};
export default AdminDashboard;