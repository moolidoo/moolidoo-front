import {createClass} from "asteroid";
import * as oauthMixin from "asteroid-oauth-mixin";
import * as collectionMixin from "asteroid-collections-mixin";

import * as reactMixin from "./asteroid-react";

var Asteroid = createClass([reactMixin, collectionMixin, oauthMixin]);

var asteroid = new Asteroid({
    platform: "browser",
    endpoint: "ws://" + READ_BACKEND_HOST + "/websocket"
});

// Decommment for debugging
// window.asteroid = asteroid;
// asteroid.ddp.socket.on("message:in", (msg) => {
//     console.log("Message IN");
//     console.log(msg);
// });
// asteroid.ddp.socket.on("message:out", (msg) => {
//     console.log("Message OUT");
//     console.log(msg);
// });

module.exports = asteroid;
