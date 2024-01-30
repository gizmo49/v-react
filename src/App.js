import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import "assets/scss/_index.scss";
import SignIn from "pages/PublicPages/SignIn/SignIn";
import ExploreLocation from "pages/travel/ExploreLocation/ExploreLocation";
import SignUp from "pages/PublicPages/SignUp/SignUp";
import ExplorePostView from "pages/travel/ExplorePostView/ExplorePostView";

function App() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={ExploreLocation}
                />
                <Route
                    exact
                    path='/explore/:slug'
                    component={ExplorePostView}
                />
                <Route
                    exact
                    path='/sign-in'
                    component={SignIn}
                />
                <Route
                    exact
                    path='/sign-up'
                    component={SignUp}
                />
            </Switch>
        </Router>
    );
}

export default App;
