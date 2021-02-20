import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={() => <h1>Landing</h1>} />
        <Switch>
          <Route exact path='/login' component={() => <h1>login</h1>} />
          <Route exact path='/signUp' component={() => <h1>signUp</h1>} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
