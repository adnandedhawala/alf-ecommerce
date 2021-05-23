import { Menu } from "antd";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuKey } from '../../appRedux/actions/PageSettings';
import { categoryroutes } from '../../helpers/utils'

export const SidebarMenu = ({fullWidth}) => {

 const { menuKey } = useSelector(({ settings }) => settings)
 const history = useHistory();
 const dispatch = useDispatch();

 const handleMenuChange = (key, link) => {
  dispatch(setMenuKey(key));
  history.push(link)
 }

 return (
  <Menu style={{ height: fullWidth?'100%':'auto' }} theme="dark" mode="inline" defaultSelectedKeys={[menuKey.toString()]}>
   <Menu.Item key='1' onClick={() => handleMenuChange(1, '/product-category')}>
    All
  </Menu.Item>
   {
    categoryroutes.map((value, index) => {
     return (
      <Menu.Item key={index + 2} onClick={() => handleMenuChange(index + 2, '/product-category/' + value.link)}>
       {value.label}
      </Menu.Item>
     )
    })
   }
  </Menu>

 )
}