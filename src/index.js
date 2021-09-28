import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactinfoMain from './ContactInfo/ContactinfoMain';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={ContactinfoMain} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'));
