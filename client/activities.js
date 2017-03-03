Template.activities.helpers({
    /*pictures : function() {
        var pic = [];
        for (var i = 0; i < this.pictures.length; i++)
        {
            pic.push(this.pictures[i]);
        }
        return pic;
    },*/

    /*comments : function() {
        var comments = [];
        console.log(this.comments);
        for (var i = 0; i < this.comments.length; i++)
        {
            comments.push(this.comments[i]);
        }

        return comments;
    }*/
    countlikes : function(){
       // console.log("OK");
        console.log("data:", Template.currentData());
        return Template.currentData().likes.length;
        /*return 2;*/
    }

});

Template.activities.events({
    'submit form': function(e) {
        e.preventDefault();

        var comments = {
            user: {
                        _id: Meteor.userId(),
                        email: Meteor.user().emails[0].address
                    },
            date: new Date(),
            text: $(e.target).find('[name=description]').val(),
        }
        Meteor.call("addCom", comments, Template.currentData()._id);
        return false;
    },

    'click #aime' : function(e){
        e.preventDefault();

        Meteor.call("addLike", Template.currentData()._id);
        /*Meteor.call("countLike", Template.currentData()._id);*/
    }
});