import * as React from 'react';
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminOps from './components/AdminOps';

//can export interfaces and use them elsewhere: export 
interface IAppProps { }
interface IAppState { }
// chirps: { id: number, user: string, text:string }[]

export default class App extends React.Component<IAppProps, IAppState> {

    render() {
        return (
            <Router>
                {/* //Navbar */}
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:id" component={AdminOps} />
                    </Switch>
                </main>
            </Router>
        )
    }
}
