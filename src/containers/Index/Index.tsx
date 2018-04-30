import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, RouteComponentProps } from 'react-router-dom'
import * as actions from '../../actions'
import Header from '../../containers/Header/Header'
import { getUserData } from '../../selectors'
import http from '../../http'

const mapStateToProps = state => {
  return {
    user: getUserData(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: bindActionCreators(actions.userLogin, dispatch) 
  }
}

interface IndexState {
  isLogin: boolean
}

type IndexProps = ReturnType<typeof mapStateToProps> 
                  & ReturnType<typeof mapDispatchToProps>
                  & RouteComponentProps<{}>

class Index extends React.Component<IndexProps, IndexState> {
  constructor(props: IndexProps) {
    super(props)
    this.state = {
      isLogin: false
    }
    this.signOut = this.signOut.bind(this)
  }

  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    if(!user) return
    this.setState({isLogin: true})
    if(this.props.user.username === '') {
      this.props.loginAction(user)
    }
  }

  signOut() {
    localStorage.clear()
    this.setState({isLogin: false})
  }

  render() {
    return (
      <div className='dashboard'>
        <Header user={this.props.user} history={this.props.history}
                isLogin={this.state.isLogin} signOut={this.signOut}></Header>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
