Template.activities.helpers({
    pictures : function() {
        var pic = [];
        for (var i = 0; i < this.pictures.length; i++)
        {
            pic.push(this.pictures[i]);
        }
        return pic;
    },

    comments : function() {
        var comments = [];
        console.log(this.comments);
        for (var i = 0; i < this.comments.length; i++)
        {
            comments.push(this.comments[i]);
        }
        return comments;
    }
});
