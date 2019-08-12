import { observable, action } from 'mobx'

class Login {
  @observable userInfo = {
    name: ''
  }

  @action setUsername = name => {
    this.userInfo.name = name
  }
}

export default new Login()
