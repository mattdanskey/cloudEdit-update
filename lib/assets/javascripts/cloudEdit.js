window.App = {
  Views: {},
  Routers: {},
  init: function() {
    new CloudRouter();
    Backbone.history.start();
  }
};
