import { Drawer, Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from '../components/sidebar';
import { SidebarMenu } from '../components/sidebar/sidebar-menu';
import { toggleShowSidebar } from '../appRedux/actions/PageSettings';
import { useEffect, useState } from 'react';

const { Content, Header } = Layout;

export const CommonLayout = ({ children }) => {
    const { showSidebar } = useSelector(({ settings }) => settings);
    const dispatch = useDispatch();
    const [innerWidth, setInnerwidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setInnerwidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })
    return (
        <>
            <Layout
                className='w-screen min-h-screen'
            >
                {
                    innerWidth > 991 ?
                        <Sidebar />
                        : null
                }
                <Layout>
                    {
                        innerWidth <= 991 ?
                            <Header className="p-0">
                                <div
                                    className='w-8 h-full text-white text-3xl ml-4'
                                    onClick={() => dispatch(toggleShowSidebar(!showSidebar))}
                                >
                                    {showSidebar ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                                </div>

                            </Header>
                            : null
                    }
                    <Content className='mx-8 mt-1.5 mb-0'>
                        {children}
                    </Content>
                </Layout>

            </Layout>
            <Drawer
                title=''
                placement='left'
                closable={false}
                onClose={() => dispatch(toggleShowSidebar(false))}
                visible={showSidebar}
                className='sidebar-drawer'
            >
                <SidebarMenu fullWidth={true} />
            </Drawer>
        </>
    )
}