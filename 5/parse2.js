var fs = require('fs');

var gapChecker = function(line) {
   for (var i = 0; i < line.length; i++) {
      var j = i + 2;
      if (j < line.length) {
         if (line[i] === line[j]) {
            return true;
         } 
      }
   } 
   return false;
}

var twoPair = function(line) {
   for (var i = 0; i < line.length; i++) {
      var j = i + 2;
      if (j <= line.length) {
         var pair = line.substring(i,j);
         if (line.substring(j, line.length).indexOf(pair) > -1){
            return true;
         }
      }
   }
   return false;
}

var validator = function(line) {
   if (!gapChecker(line)) {
      return false;
   }

   if (!twoPair(line)) {
      return false;
   }

   return true; 
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
