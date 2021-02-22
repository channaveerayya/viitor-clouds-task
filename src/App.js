import React, { useEffect, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { loadData } from './redux/actions'
import Loading from './components/Loading'
const Alert = React.lazy(() => import('./components/Alert'))
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))
const Login = React.lazy(() => import('./components/Login'))
const PageNotFound = React.lazy(() => import('./components/404'))
const PrivateRouting = React.lazy(() => import('./layout/PrivateRouting'))
const SignUp = React.lazy(() => import('./components/SignUp'))
const Todo = React.lazy(() => import('./components/Todo'))
const Todos = React.lazy(() => import('./components/Todos'))
const View = React.lazy(() => import('./components/View'))

function App() {
  useEffect(() => {
    store.dispatch(loadData())
  }, [])
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signUp' component={SignUp} />
            <PrivateRouting exact path='/dashboard' component={Dashboard} />
            <PrivateRouting exact path='/dashboard/:id' component={View} />
            <PrivateRouting exact path='/todos' component={Todos} />
            <PrivateRouting exact path='/todos/:id' component={Todo} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export default App
