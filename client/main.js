Template.reset.events({
	"click button" : function(){
		Meteor.call("reset", function(){
			alert("reset")
		})
	}
});

$(document).ready(function() {
    $( window ).load( function()
    {
        $( '.list' ).masonry( { itemSelector: '.item' } );
    });
});

