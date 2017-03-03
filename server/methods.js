Meteor.methods({
  insert: function(cityName,long,lat) {
      console.log("coucou");
      Cities.insert({
            name: cityName,
            coordinates:{long,lat}
        });
    },
    
    initUploadServerForCity: function (name, lat, long) {
        UploadServer.init({
            tmpDir: process.env.PWD + '/.uploads/tmp',
            uploadDir: process.env.PWD + '/public/images/' + name,
            checkCreateDirectories: true, //create the directories for you
            finished: function (req) {
                var fileName = "/images/" + name + "/" + req.name;
                // Insert the new city in the collection here
                Cities.insert({
            name: cityName,
            lat : lat,
            long : long ,
                picture : fileName 
        });
                
            }
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
      var idUser = Meteor.userId();
      /*console.log(idUser + " " + idActivity);*/
     var act = Activities.findOne({_id:idActivity, likes:idUser});
     /*console.log(act);*/
     if (typeof(act)=="undefined"){
           Activities.update(
             {_id:idActivity},
             {$push:{likes:idUser}}
           );}
      else {
        Activities.update(
          {_id:idActivity},
          {$pull:{likes:idUser}}
        );
      }},

      /*'countLike' : function(idActivity){
        var act = Activities.findOne({_id:idActivity, likes:idUser});
        var cunt;
        for (var i = 0; i < Activities.likes.length; i++){
          cunt=i;
        }
      return cunt;
    }*/
    
    getWeatherData:(city)=>{
      try {
        let result = HTTP.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid=c6ffc0a1962718b7336b4b16714e5efd");
        return result.data;
      } catch (e) {
            console.log("err",e);
            return e;
      }
  }
});