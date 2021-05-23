import { Layout } from 'antd';

import { SidebarMenu } from './sidebar-menu';

const { Sider } = Layout;

export const Sidebar = () => {

 return (
  <Sider
   breakpoint="lg"
   collapsedWidth="0"
  >
   <div className="h-4 m-8 bg-white bg-opacity-20" />
   <SidebarMenu />
  </Sider>

 )
}