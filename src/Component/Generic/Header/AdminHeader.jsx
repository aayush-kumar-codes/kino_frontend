import { Avatar, Input, Layout, theme } from 'antd';
import React from 'react';
import styles from '@/styles/adminNavbar.module.css'
import { AiOutlineArrowDown, AiOutlineMenuUnfold, AiOutlineProfile, AiOutlineSearch } from 'react-icons/ai';
import { MdImageAspectRatio, MdNotificationsNone } from 'react-icons/md'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Image from 'next/image';
const { Header } = Layout;

function AdminHeader({ collapsed, setCollapsed, headerText }) {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header
            style={{
                background: colorBgContainer,
                justifyContent: "space-between",
                paddingInline: "20px",
                minHeight: '64px',
            }}
            className='menu_left_Header'
        >
            <div className={styles.display_flex}>
                {React.createElement(collapsed ? AiOutlineMenuUnfold : HiOutlineMenuAlt2, {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                    size: "2rem",
                    color: "#891b55"
                })}
                <p className={styles.headerLeft_title}>{headerText}</p>
            </div>
            <div className={styles.display_flex} style={{ marginLeft: "8px" }}>
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
    )
}

export default AdminHeader