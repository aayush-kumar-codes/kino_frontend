import { Avatar, Badge, Input, Layout, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/adminNavbar.module.css'
import { AiOutlineArrowDown, AiOutlineMenuUnfold, AiOutlineProfile, AiOutlineSearch } from 'react-icons/ai';
import { MdImageAspectRatio, MdNotificationsNone } from 'react-icons/md'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import Image from 'next/image';
import NotificationList from '../RightBarContent/NotificationList';
const { Header } = Layout;
import { dispatch } from '@/redux/store';
import { getNotificationsRequest, getNotificationsReset } from '@/redux/slices/getNotifications';
import { useSelector } from 'react-redux';

function AdminHeader({ collapsed, setCollapsed, headerText }) {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [data, setData] = useState([])
    const getNotificationsState = useSelector(state => state.getNotifications)
    const [search, setSearch] = useState('')
    const [isNotification, setIsNotification] = useState(false)
    const [isUnread, setIsUnread] = useState(true)

    useEffect(() => {
        if (isUnread)
            dispatch(getNotificationsRequest())
        else
            dispatch(getNotificationsRequest('view=1'))
    }, [isUnread])

    useEffect(() => {
        if (getNotificationsState.isSuccess) {
            setData(getNotificationsState.data?.data)
            dispatch(getNotificationsReset())
        }
    }, [getNotificationsState.isSuccess])

    const handleSearch = (e) => {
        e.preventDefault()
        const mainDocs = window.document.getElementsByClassName('ant-layout-content')[0]
        const arrayDocs = mainDocs.querySelectorAll('p, h1, h2, h3, h4, h5, h6,td,th')
        arrayDocs.forEach(item => {
            const content = item.textContent
            if (content.toLowerCase().includes(search.toString().toLowerCase())) {
                item.classList.add('highlights')
            }
        })
    }

    const getCount = (data) => {
        return data.filter(item => item.is_read === false).length
    }

    return (
        <>
            <Header
                style={{
                    background: colorBgContainer,
                    justifyContent: "space-between",
                    paddingInline: "20px",
                    minHeight: '64px',
                    lineHeight: 'normal'
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
                    <form onSubmit={handleSearch}>
                        <Input size="large" placeholder="Search here" prefix={<AiOutlineSearch color='#938ADC' size={'1.2rem'} />}
                            style={{ background: "#eeeeee" }}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                    <div className={styles.rightHeader_circle}>
                        <Image src={"/uganda_icon.png"} width={30} height={30} alt='circle' />
                    </div>
                    <div className={styles.rightHeader_circle}>
                        <MdImageAspectRatio size={'28px'} />
                    </div>
                    <div className={styles.rightHeader_circle}>
                        <Badge count={getCount(data)}>
                            <MdNotificationsNone style={{ cursor: 'pointer' }} size={'28px'} onClick={() => setIsNotification(isNotification ? false : true)} />
                        </Badge>
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
            {
                isNotification && <NotificationList data={data} isUnread={isUnread} setIsUnread={setIsUnread} />
            }
        </>
    )
}

export default AdminHeader