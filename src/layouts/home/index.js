import React, { PureComponent } from 'react'
import { observer, inject } from 'mobx-react'
import Header from './Header'
import SideMenu from './SideMenu'
import './index.less'

class Home extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <SideMenu />
      </div>
    )
  }
}
export default Home
