// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.shift();
    });
  },

  playFirst: function(){
    this.at(0).play();
  },


  //ASK WHY THIS DOESNT WORK
  // events: {'add': function(){console.log('yah');}}
  //     if (this.length === 1) {
  //       // debugger;
  //       this.playFirst();
  //     }
  //   }
  // }



  // dequeue: function(song){
  //   debugger;
  //  this.remove(song);
  // }

});
