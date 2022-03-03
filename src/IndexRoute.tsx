import Home from "./BookStore/Home";
import BookDetails from './BookStore/BookDetails';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"



const IndexRoute = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/details">
                    <BookDetails />
                </Route>
            </Switch>

        </Router>
    )
}

export default IndexRoute