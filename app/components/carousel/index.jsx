var React      = require("react");
var R          = require("ramda");
var Radium     = require("radium");
var bootstrap  = require("react-bootstrap");
var IPropTypes = require("react-immutable-proptypes");

var components = require("components");
var colors     = require("lib/colors");

var styles = {
    divTips: {
        width: "20%",
        height: "50%",
        float: "right",
        marginRight: "11%",
        marginTop: "10%",
        backgroundColor: colors.white,
        textAlign: "center"
    }
};

var Carousel = React.createClass({
    propTypes: {
        allowedValues: IPropTypes.map,
        asteroid: React.PropTypes.object,
        indicators: React.PropTypes.bool
    },
    getInitialState: function () {
        return {
            activeIndex: 0,
            direction: null
        };
    },
    getUserImageAndName: function (user) {
        var image = user.get("services").get("google").get("picture");
        var id = user.get("_id");
        var name = user.get("profile").get("name");
        var tips = user.get("tips") || 0;
        return this.renderCarouselItem({image, name, id, tips});
    },
    handleSelect: function (selectedIndex, selectedDirection) {
        this.setState({
            activeIndex: selectedIndex,
            direction: selectedDirection
        });
    },
    addTipsToUser: function (id) {
        this.props.asteroid.call("addTips", id)
            .catch(e => console.log(e));
    },
    renderCarouselItem: function ({image, name, id, tips}) {
        return (
            <bootstrap.CarouselItem key={id} style={{height: "100vh"}}>
                <div style={styles.divTips}>
                    <h4>{"Give a mootip to"}</h4>
                    <components.Spacer direction="v" size={20} />
                    <h3>{name}</h3>
                    <components.Spacer direction="v" size={20} />
                    <bootstrap.Button onClick={
                        R.partial(this.addTipsToUser, [id])}
                        style={{
                            position: "inherit",
                            outline: "none",
                            width: "200px"
                        }}
                    >
                        {"mootip"}
                    </bootstrap.Button>
                    <components.Spacer direction="v" size={50} />
                    <span style={{bottom: "10px"}}>
                        {`${name} has received`}
                        <components.Spacer direction="v" size={30} />
                        <span style={{fontWeight: 600}}>{`${tips}`}</span>{" mootips"}
                    </span>
                </div>
                <img id="muccone" src={image} style={{height: "900px", width: "900px"}}/>
            </bootstrap.CarouselItem>
        );
    },
    render: function () {
        var users = this.props.allowedValues;
        return (
            <div className="carousel-moo">
                <Radium.Style
                    rules={{
                        ".carousel-inner": {
                            overflow: "visible"
                        },
                        ".carousel-control": {
                            width: "10%"
                        }
                    }}
                    scopeSelector=".carousel-moo"
                />
                <bootstrap.Carousel
                    activeIndex={this.state.activeIndex}
                    defaultActiveIndex={0}
                    indicators={this.props.indicators}
                    nextIcon={<components.Icon className="glyphicon-chevron-right" icon="chevron-right" />}
                    onSelect={this.handleSelect}
                    prevIcon={<components.Icon className="glyphicon-chevron-left" icon="chevron-left" />}
                    style={{height: "calc(100vh)"}}
                >
                    {users.map(this.getUserImageAndName)}
                </bootstrap.Carousel>
            </div>
        );
    }
});

module.exports = Radium(Carousel);
