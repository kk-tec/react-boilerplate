import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react'
import Header from './Header'
import SideMenu from './SideMenu'
import './index.less'

@inject('loginStore')
class Home extends PureComponent {
  render() {
    const { userInfo } = this.props.loginStore
    return (
      <div className="home-page">
        <Header curName={userInfo.name} />
        <SideMenu />
      </div>
    )
  }
}
export default Home
