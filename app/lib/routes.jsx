var React          = require("react");
var Router         = require("react-router");
var BrowserHistory = require("react-router/lib/BrowserHistory");

var views = require("views");

module.exports = (
    <Router.Router history={BrowserHistory.history}>
        <Router.Route component={views.Root} name="root">
            <Router.Route component={views.Moo} name="moo" path="/" />
        </Router.Route>
    </Router.Router>
);
