Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home"
});

Router.route("charts", {
    template: "charts"
});

Router.route("about", {
    template: "about"
});

Router.route('city/:id', {
    template: "city",
    data: function () {
        // Return the document for the selected city (the one whose id is given)
        // The value of this id is given by  this.params.id
        return Cities.findOne(this.params.id);
    }
});

Router.route('activities/:id', {
    template: "activities",
    data: function () {
        return Activities.findOne(this.params.id);
    }
});