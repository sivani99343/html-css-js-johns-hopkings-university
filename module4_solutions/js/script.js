(function () {

    var names = ["Sivani", "Jack", "Jenifer", "Jason", "Aroan", "Rajesh", "Sumith", "Parker", "Lason", "Jack"];
    
    for (var s = 0; s < names.length; s++) {
    
      var firstLetter = names[s].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[s]);
      } 
      else {
        helloSpeaker.speak(names[s]);
      }
    }
    
    })();