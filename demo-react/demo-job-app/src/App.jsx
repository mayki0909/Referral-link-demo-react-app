import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserList from './UserList'
import Navbar from './Navbar'
import UserCreate from './UserCreate'

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route path='/createUser/:id?'
                            component={UserCreate}>
                        </Route>
                        <Route exact path='/'>
                            <h1>User list</h1>
                            <UserList />
                        </Route>
                    </Switch>
                </div>
            </Router>

        )
    }

}

export default App;