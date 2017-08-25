var PageComponent = require("ds.base/PageComponent");

var ComponentWithWidgetsServer = PageComponent.create({
        "/": function(attributes, vars) {
                return new StatusResponse('good', { });
        },
        
        type: "ComponentWithWidgetsServer"
});

module.exports = ComponentWithWidgetsServer;
