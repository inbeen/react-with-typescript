import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect, Dispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import * as actions from '../../actions'
import { UserState } from '../../types'
import { getUserData } from '../../selectors'
import http from '../../http'
import './Login.css'

const mapStateToProps = state => {
  return {
    user: getUserData(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: bindActionCreators(actions.userLoginRequest, dispatch) 
  }
}

interface LoginState {
  username: string
  password: string
}

type LoginProps = ReturnType<typeof mapStateToProps>
                  & ReturnType<typeof mapDispatchToProps>
                  & RouteComponentProps<{}>

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.login = this.login.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.setPassword = this.setPassword.bind(this)
  }

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    if(user) this.props.history.push('/')
  }

  setUsername(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value
    this.setState({
      username: value
    })
  }

  setPassword(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value
    this.setState({
      password: value
    })
  }

  login() {
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.loginAction(data, this.props.history.push)
  }

  render() {
    const logo = require('../../asserts/image/111.png')

    return (
      <div className='login'>
        <div className='login-header'>
          <img className='login-logo' src={logo}/>
        </div>
        <div className='login-form'>
          <div className='login-form-header'>Sign in to forInterview</div>
          <div className='login-form-body'>
            <span className='login-form-input'>
              <span><i className='fa fa-user'></i></span>
              <input type='text'
                     placeholder='Username'
                     value={this.state.username}
                     onChange={this.setUsername}/>
            </span>
            <span className='login-form-input'>
            <span><i className='fa fa-lock'></i></span>
              <input type='password'
                     placeholder='Password'
                     value={this.state.password}
                     onChange={this.setPassword}/>
            </span>
            <button className='login-btn' onClick={this.login}>Sign in</button>
          </div>
          <p className='create-account'>Or sign up now!</p>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
