Template.city.helpers({


    places : function ()
    {
        console.log("city1="+this.activities);
        // var city = Cities.findOne({"_id" : this._id});
        //console.log("city2="+city);
        var act = [];
        if (this.activities == null)
          return act;
        //act = this.activities;
        for (var i = 0; i < this.activities.length; i++ )
        {
            if (this.activities[i] != null && this.activities[i].nature == "place")
                act.push(this.activities[i]);
        }
        return act;
    },

    events : function ()
    {
        var evt = [];
         if (this.activities == null)
          return evt;
        for (i = 0; i < this.activities.length; i++ )
        {
            if (this.activities[i] != null && this.activities[i].nature == "event")
                evt.push(this.activities[i]);
        }
        return evt;
    },
   mapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }

});

Template.city.events({
  'submit form': function(e) {
    e.preventDefault();

    var city = this._id;
    console.log("city = " + city );

    var activity = {
      name: $(e.target).find('[name=newActivity]').val(),
      description: $(e.target).find('[name=description]').val(),
      nature: "event",
      url: $(e.target).find('[name=url]').val(),
      dateStart: $(e.target).find('[name=StartDate]').val(),
      dateEnd: $(e.target).find('[name=DateEnd]').val(),
    };
    console.log("activity = " + activity );

    Meteor.call("insertActivity", activity, function(err,idActivity) {
      console.log("Erreur"+err);
      Meteor.call("updateCity", city, idActivity);

    });
    //Meteor.call("updateCity", city, activity);
  }
});