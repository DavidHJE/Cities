Meteor.methods({
  insert: function(cityName,long,lat) {
      console.log("coucou");
      Cities.insert({
            name: cityName,
            lat : lat,
            long : long 
        });
    }
});
