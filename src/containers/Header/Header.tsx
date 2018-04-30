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
    const links = {
      'Profile': () => {console.dir(1)},
      '': () => {console.dir(3)},
      'Sign out': () => {
        this.props.signOut()
      }
    }
    
    const loginOrNot = this.props.isLogin? (
        <Dropdown placement='right' links={links}>
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
        <img className='header-brand' src='https://i.loli.net/2018/03/19/5aafd07b355b2.jpg'/>
        <nav className='header-nav'>
          <div className='header-nav-item'>
            <div className='header-search'>
              <input type='text'/>
            </div>
          </div>
          <a className='header-nav-item'>页面1</a>
          <a className='header-nav-item'>页面2</a>
          <a className='header-nav-item'>页面3</a>
        </nav>
        <div className='header-user'>{loginOrNot}</div>
      </header>
    )
  }
}
