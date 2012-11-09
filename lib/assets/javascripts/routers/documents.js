CloudRouter = Backbone.Router.extend({
  routes: {
    "documents/:id": "edit",
    "": "index",
    "new": "newDoc"
  },

  edit: function(id) {
          var doc = new Document({ id: id});
          doc.fetch({
            success: function(model, resp) {
                       new EditView({ model: doc});
                     },
            error: function() {
                     new Error({ message: 'Could not find that document.' });
                     window.location.hash = '#';
                   }
          });
        },

  index: function() {
           $.getJSON('/documents', function(data) {
             if(data) {
               var documents = _(data).map(function(i) { return new Document(i); });
               new IndexView({ documents: documents });
             } else {
               new Error({ message: "Error loading documents." });
             }
           });
         },

  newDoc: function() {
            new EditView({ model: new Document() });
          }
});
