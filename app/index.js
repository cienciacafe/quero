import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import ThingsPage from './pages/Things'
import HomePage from './pages/Home'

import 'normalize.css'
import 'fonts/fonts.scss'

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={() => (
      <Redirect to={{ pathname: '/home' }} />
    )} />
    <Switch>
      <Route path="/home" component={HomePage} />
      <Route path="/:projectID/:postID" component={ThingsPage} />
      <Route component={() => ('Página não encontrada!')} />
    </Switch>
  </div>
  </Router>,
  document.getElementById('app')
)
