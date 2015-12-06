var fs = require('fs');

var LightsOne = function() {
   this.lights = [];
   for (var i = 0; i < 1000; i++) {
      var arr = [];
      for (var k = 0; k < 1000; k++) {
         arr.push(false);
      }
      this.lights.push(arr);
   }

   this.alter = function(options) {
      for (var i = options.x1; i <= options.x2; i++) {
         for (var k = options.y1; k <= options.y2; k++) {
            if (options.mode === 'on') {
               this.lights[i][k] = true;
            } else if (options.mode === 'off') {
               this.lights[i][k] = false;
            } else if (options.mode === 'toggle') {
               this.lights[i][k] = !this.lights[i][k];
            }
         }
      }
   }

   this.onCount = function() {
      var onCount = 0;
      for (var i = 0; i < this.lights.length; i++) {
         for (var k = 0; k < this.lights[i].length; k++) {
            if (this.lights[i][k]) {
               onCount++;
            }
         }
      }
      return onCount;
   }
}

var LightsTwo = function() {
   this.lights = [];
   for (var i = 0; i < 1000; i++) {
      var arr = [];
      for (var k = 0; k < 1000; k++) {
         arr.push(0);
      }
      this.lights.push(arr);
   }

   this.alter = function(options) {
      for (var i = options.x1; i <= options.x2; i++) {
         for (var k = options.y1; k <= options.y2; k++) {
            if (options.mode === 'on') {
               this.lights[i][k] += 1;
            } else if (options.mode === 'off') {
               if (this.lights[i][k] > 0) {
                  this.lights[i][k] -= 1;
               }
            } else if (options.mode === 'toggle') {
               this.lights[i][k] += 2;
            }
         }
      }
   }

   this.onCount = function() {
      var onCount = 0;
      for (var i = 0; i < this.lights.length; i++) {
         for (var k = 0; k < this.lights[i].length; k++) {
            if (this.lights[i][k]) {
               onCount += this.lights[i][k];
            }
         }
      }
      return onCount;
   }
}

var parseLine = function(line) {
   var options = {};
   var numbers = line.match(/\d+/g);
   if (numbers === null) return;
   options['x1'] = numbers[0];
   options['y1'] = numbers[1];
   options['x2'] = numbers[2];
   options['y2'] = numbers[3];

   for (var key in options) {
      options[key] = parseFloat(options[key]);
   }

   if (line.indexOf('on') > -1) {
      options['mode'] = 'on';
   } else if (line.indexOf('off') > -1) {
      options['mode'] = 'off';
   } else if (line.indexOf('toggle') > -1) {
      options['mode'] = 'toggle';
   }
   return options;
}

fs.readFile('input.txt', function(err, data) {
   if (err) {
      return err;
   }
   
   var lightsOne = new LightsOne();   
   var lightsTwo = new LightsTwo();

   var lines = data.toString().split('\n');
   for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var options = parseLine(line);
      if (options) {
         lightsOne.alter(parseLine(line));
         lightsTwo.alter(parseLine(line));
      }
   }
   console.log(lightsOne.onCount());
   console.log(lightsTwo.onCount());
});
