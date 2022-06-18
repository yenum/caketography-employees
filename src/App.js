import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Create from './pages/create/Create'
import Employee from './pages/employee/Employee'
import ThemeSelector from './components/ThemeSelector'

import './App.css'

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/search'>
          <Search/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        <Route path='/employees/:id'>
          <Employee/>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
