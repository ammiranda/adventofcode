var fs = require('fs');

var LightArr = function() {
   this.lights = [];
   for (var i = 0; i < 1000; i++) {
      var arr = [];
      for (var j = 0; j < 1000; j++) {
         arr.push(false);
      }
      this.lights.push(arr);
   }

   this.parseLine = function(line) {
      if (line.indexOf('on') > -1) {
         this.turnon(line);
      } else if (line.indexOf('off') > -1) {
         this.turnoff(line);
      } else if (line.indexOf('toggle') > -1) {
         this.toggle(line);
      }
   }
   
   this.onOffParse = function(line) {
      var words = line.split(' ');
      var x1 = words[2].split(',')[0];
      var y1 = words[2].split(',')[1];
      var x2 = words[4].split(',')[0];
      var y2 = words[4].split(',')[1];
      return {'x1': x1, 'y1': y1, 'x2': x2, 'y2': y2};
   }

   this.turnon = function(line) {
      var coords = this.onOffParse(line);
   }

   this.lightCount = function() {
      var lightsOn = 0;
      for (var i = 0; i < 1000; i++) {
         for (var j = 0; j < 1000; j++) {
            if (this.lights[i][j]) {
               lightsOn++;
            }
         }
      }
      return lightsOn;
   }
}

fs.readFile('input.txt', function(err, data) {
   if (err) {
      throw err;
   }

   var lights = new LightArr();
   lights.parseLine('turn on 887,9 through 959,629');
   var lines = data.toString().split('\n');
   for (var i = 0; i < lines.length; i++) {
     // console.log(lines[i]);
   }
});
