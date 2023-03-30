import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/about" component={About} />
      <Route exact component={NotFound} />
    </Switch>
  </>
)

export default App
