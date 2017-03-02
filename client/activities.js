Template.activities.helpers({
    pictures : function() {
        var pic = [];
        for (var i = 0; i < this.pictures.length; i++)
        {
            pic.push(this.pictures[i]);
        }
        return pic;
    },

    /*comments : function() {
        var comments = [];
        console.log(this.comments);
        for (var i = 0; i < this.comments.length; i++)
        {
            comments.push(this.comments[i]);
        }
        return comments;
    }*/
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
    }
});