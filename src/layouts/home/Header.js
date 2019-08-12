import React, { PureComponent } from 'react'

const Header = props => {
  return (
    <div className="header">
      <div className="logout-btn">
        <span className="name">{props.curName}</span>
      </div>
    </div>
  )
}
export default Header
