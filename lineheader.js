module.exports = function(RED) {
    function lineHeaderNode(config) {
        RED.nodes.createNode(this,config);
        this.token = config.token
        var node = this;
        node.on('input', function(msg) {
            msg.headers = {'content-type':'application/x-www-form-urlencoded','Authorization':'Bearer '+ node.token};
            msg.payload = {"message":msg.payload};
            node.send(msg);
        });
    }
    RED.nodes.registerType("lineheader",lineHeaderNode);
}
