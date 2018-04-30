import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './containers/Index/Index'
import Login from './containers/Login/Login'

const App: React.SFC = () => {
  return (
    <BrowserRouter forceRefresh={false}>
      <Switch>
        <Route path='/' exact component={Index}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='*'></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
