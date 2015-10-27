var React = require("react");

var asteroid = require("lib/asteroid");

var styles = {
    content: {
        width: "100%",
        height: "100%"
    }
};

var Root = React.createClass({
    propTypes: {
        children: React.PropTypes.node
    },
    mixins: [
        asteroid.getControllerViewMixin()
    ],
    renderChildren: function () {
        return React.cloneElement(this.props.children, {
            asteroid: asteroid,
            collections: this.state.collections
        });
    },
    render: function () {
        return (
            <div>
                <div style={styles.content}>
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
});

module.exports = Root;
