Meteor.methods({
  insert: function(cityName,long,lat) {
      console.log("coucou");
      Cities.insert({
            name: cityName,
            lat : lat,
            long : long 
        });
    },

    insertActivity : function(activity) {
    	return Activities.insert(activity);
    },

    updateCity : function(idCity, idActivity){
    	var activit = Activities.findOne({"_id":idActivity}) ;

		return Cities.update({"_id":idCity}, {$push: {"activities": activit}});
    },

    'addCom': function(com, idActivity){
      Activities.update(
        {_id:idActivity},
        {$push:{comments:com}}
      );
    },

    'addLike': function(idActivity){
      Activities.update(
        {_id:idActivity},
        {$push:{likes:[]}}
      );
    }
});