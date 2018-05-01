import * as React from 'react'
import { History } from 'history'
import { Dropdown } from '../../components'
import './Header.css'

interface HeaderState {
}

interface HeaderProps {
  user: {[key: string]: string}
  history: History
  isLogin: boolean
  signOut: Function
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
    }
  }

  render() {
    const dropdownList = (
      <nav className='header-user-options'>
        <a onClick={() => {console.dir(1)}}>Profile</a>
        <div></div>
        <a onClick={() => {this.props.signOut()}}>Sign out</a>
      </nav>
    )
    
    const loginOrNot = this.props.isLogin? (
        <Dropdown placement='right' content={dropdownList} arrow trigger='click' style={{top: '40px'}}>
          <img className='header-avatar' src={this.props.user.avatar}/>
          <span className='header-name'>{this.props.user.username}</span>
        </Dropdown>
      )
      : (
        <div className='header-btns'>
          <button className='header-login' onClick={() => {this.props.history.push('/login')}}>登 录</button>
          <button className='header-register'>注 册</button>
        </div>
      )

    return (
      <header className='header'>
        <div className='header-user'>{loginOrNot}</div>
      </header>
    )
  }
}
