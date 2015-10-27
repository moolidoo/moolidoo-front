var React      = require("react");
var IPropTypes = require("react-immutable-proptypes");
var Immutable  = require("immutable");

var components = require("components");

var Moo = React.createClass({
    propTypes: {
        asteroid: React.PropTypes.object,
        collections: IPropTypes.map
    },
    componentDidMount: function () {
        this.props.asteroid.subscribe("users");
    },
    renderCowAndBackground: function () {
        return (
            <div>
                <div id="cow">
                    <div className="cow">
                        <div className="head">
                            <div className="ear left"></div>
                            <div className="ear right"></div>
                            <div className="face"></div>
                            <div className="nose"></div>
                            <div className="grass"></div>
                        </div>
                        <div className="body">
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                            <div className="spot"></div>
                        </div>
                        <div className="leg front left"></div>
                        <div className="leg front right"></div>
                        <div className="leg back left"></div>
                        <div className="leg back right"></div>
                        <div className="tail"></div>
                    </div>
                </div>
                <img id="grass" src="_assets/images/grass.png"/>
                {this.renderMoo()}
            </div>
        );
    },
    renderMoo: function () {
        return (
            <components.Carousel
                allowedValues={this.props.collections.get("users") || Immutable.Map()}
                asteroid={this.props.asteroid}
                indicators={false}
            />
        );
    },
    render: function () {
        return (
            <div>
                {this.renderCowAndBackground()}
            </div>
        );
    }
});

module.exports = Moo;
