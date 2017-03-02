Template.home.helpers({
    cities : function ()
    {
        return Cities.find({});
    }

});



Template.home.events({
    "click button" : function(event){
        event.preventDefault();
        var cityName = $("#f1").val();
        var long = $("#f2").val(); 
        var lat = $("#f3").val(); 
       
       Meteor.call("insert",cityName,long,lat);
        Meteor.call("initUploadServerForCity",cityName,long,lat);
        
        $("#f1").val(""); 
        $("#f2").val(""); 
        $("#f3").val(""); 
    }
});