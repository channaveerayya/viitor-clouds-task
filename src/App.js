import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signUp' component={SignUp} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
