import React from "react"
import SignUp from "./SignUp"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
// https://getbootstrap.com/docs/4.1/utilities/flex/

function App() {
  return (
    <Container 
      className="d-flex align-items-center justify-content-center" // align-items-center: vertical center, justify-content-center: horizontal center
      style = {{ minHeight: "100vh"}}> 
      <div className="w-100" style={{maxWidth: '400px'}}>  
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;