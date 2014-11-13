// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  dequeue: function(song){
    debugger;
   this.remove(song);
  }

});
