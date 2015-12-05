var fs = require('fs');


var validator = function(line) {
   if (!vowelcounter(line)) {
      return false;
   }

   if (!badSubStrings(line)){
      return false;
   }

   if (!dupeSubs(line)) {
      return false;
   }

   return true;
}

var dupeSubs = function(line) {
   for (var i = 0; i < line.length; i++) {
      var j = i + 1;
      if (j !== line.length) {
         if (line[i] === line[j]) {
            return true;
         }
      }
   }
   return false;
}

var badSubStrings = function(line) {
   var badSubs = ['ab', 'cd', 'pq', 'xy'];
   for (var i = 0; i < badSubs.length; i++) {
      if (line.indexOf(badSubs[i]) !== -1){
         return false;
      }
   }
   return true;
}

var vowelcounter = function(line) {
   var vowels = line.match(/[aeiou]/gi);
   if (vowels === null) {
      return false;
   }
   return vowels.length >= 3;
}

fs.readFile('input.txt', function(err, data) {
   var lines = data.toString().split('\n');
   var niceCount = 0;
   for (var i = 0; i < lines.length; i++) {
      if (validator(lines[i])) {
         niceCount++;
      }
   }
   console.log(niceCount);
});
