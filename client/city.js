Template.city.helpers({


    places : function ()
    {
        console.log("city1="+this.activities);
        // var city = Cities.findOne({"_id" : this._id});
        //console.log("city2="+city);
        var act = [];
        //act = this.activities;
        for (var i = 0; i < this.activities.length; i++ )
        {
            if (this.activities[i].nature == "place")
                act.push(this.activities[i]);
        }
        return act;
    },

    events : function ()
    {
        var evt = [];
        for (i = 0; i < this.activities.length; i++ )
        {
            if (this.activities[i].nature == "event")
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
