import { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageHeader } from 'antd'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <div className="pt-20">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App
