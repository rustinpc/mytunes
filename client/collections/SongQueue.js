// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
      //this.model.render();
    });


    // this.on('ended', function() {
    //   this.shift();
    //   if (this.length > 0) {
    //     this.playFirst();
    //   }
    // });

    this.on('dequeue', function(song){
      this.remove(song);
      if(this.length > 0){
        this.playFirst();
      }
    });

  },

  playFirst: function(){
    if (this.length > 0) {
      this.at(0).play();
    }
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
