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
import ProfileView from "pages/dashboard/ProfileView/ProfileView";
import ShareExplorePostView from "pages/travel/ShareExplorePostView/ShareExplorePostView";

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
                    path='/explore/share/:slug'
                    component={ShareExplorePostView}
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
                <Route
                    exact
                    path='/me'
                    component={ProfileView}
                />
            </Switch>
        </Router>
    );
}

export default App;
