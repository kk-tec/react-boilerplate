import React, { PureComponent } from 'react'
import { Menu, Icon, Button } from 'antd'

const { SubMenu } = Menu
const MenuItem = Menu.Item

class SideMenu extends PureComponent {
  state = {
    collapsed: false,
    defaultSelectedKeys: ['1'],
    menuList: [
      {
        key: '1',
        icon: 'pie-chart',
        label: 'Option 1'
      },
      {
        key: '2',
        icon: 'desktop',
        label: 'Option 2'
      },
      {
        key: '3',
        icon: 'inbox',
        label: 'Option 3'
      },
      {
        key: 'sub1',
        icon: 'mail',
        label: 'Navigation One',
        children: [
          {
            key: '5',
            label: 'Option 5'
          },
          {
            key: '6',
            label: 'Option 6'
          },
          {
            key: '7',
            label: 'Option 7'
          },
          {
            key: '8',
            label: 'Option 8'
          }
        ]
      },
      {
        key: 'sub2',
        icon: 'appstore',
        label: 'Navigation Two',
        children: [
          {
            key: '9',
            label: 'Option 9'
          },
          {
            key: '10',
            label: 'Option 10'
          },
          {
            key: 'sub3',
            label: 'Submenu',
            children: [
              {
                key: '11',
                label: 'Option 11'
              },
              {
                key: '12',
                label: 'Option 12'
              }
            ]
          }
        ]
      }
    ]
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  renderMenuItem = menu => {
    const { key, label, icon } = menu
    return (
      <Menu.Item key={key}>
        <Icon type={icon} />
        <span>{label}</span>
      </Menu.Item>
    )
  }

  renderSubMenu = menu => {
    const { key, label, icon, children } = menu
    return (
      <SubMenu
        key={key}
        title={
          <span>
            <Icon type={icon} />
            <span>{label}</span>
          </span>
        }>
        {children.map(item => {
          if (item.children && item.children.length > 0) {
            return this.renderSubMenu(item)
          } else {
            return this.renderMenuItem(item)
          }
        })}
      </SubMenu>
    )
  }

  renderMenuList = () => {
    const { menuList } = this.state
    return menuList.map(menu => {
      if (menu.children && menu.children.length > 0) {
        return this.renderSubMenu(menu)
      } else {
        return this.renderMenuItem(menu)
      }
    })
  }

  render() {
    const { collapsed, defaultSelectedKeys } = this.state
    return (
      <div className="side-menu">
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          className="menu-btn">
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          mode="inline"
          theme="dark"
          style={{ height: '100%' }}
          inlineCollapsed={collapsed}>
          {this.renderMenuList()}
        </Menu>
      </div>
    )
  }
}

export default SideMenu
