var React = require("react");

var bootstrap = require("react-bootstrap");
var asteroid = require("lib/asteroid");

var styles = {
    content: {
        width: "100%",
        height: "100%"
    },
    header: {
        width: "100%",
        height: "50px",
        transition: "left 0.3s ease",
        position: "absolute",
        zIndex: 100
    },
    loginButton: {
        position: "absolute",
        left: "calc(100% - 200px)",
        width: "200px",
        zIndex: 100
    }
};

var Root = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },
    mixins: [
        asteroid.getControllerViewMixin()
    ],
    toggleLogin: function () {
        return asteroid.loggedIn ?
        asteroid.logout() :
        asteroid.loginWith("google");
    },
    renderChildren: function () {
        return React.cloneElement(this.props.children, {
            asteroid: asteroid,
            collections: this.state.collections
        });
    },
    render: function () {
        return (
            <div>
                <bootstrap.Button className="btn btn-social btn-google" onClick={this.toggleLogin} style={styles.loginButton}>
                    <i className="fa fa-google"></i> {asteroid.loggedIn ? "Logout" : "Login"}
                </bootstrap.Button>
                <div style={styles.content}>
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
});

module.exports = Root;
