Template.reset.events({
	"click button" : function(){
		Meteor.call("reset", function(){
			alert("reset")
		})
	}
});

/*Template.city.helpers({
    places : function ()
    {
        return Activities.find({"nature" : "place"});
    },

    events : function ()
    {
        return Activities.find({"nature" : "event"});
    },

});*/