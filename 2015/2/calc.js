var fs = require('fs');

var calcVol = function(l, w, h) {
   return l * w * h;
}

var calcPeri = function(s1, s2) {
   return 2 * s1 + 2 * s2;
}

var ribbon = function(l, w, h) {
   var amt = calcVol(l, w, h);
   if ((l >= w) && (l >= h)) {
      amt += calcPeri(w, h);
   } else if ((w >= l) && (w >= h)){
      amt += calcPeri(h, l);
   } else if ((h >= w) && (h >= l)){
      amt += calcPeri(w, l);
   }
   return amt;
}

var surfaceArea = function(l, w, h) {
   var side1 = l * w;
   var side2 = w * h;
   var side3 = h * l;
   var total = 0;
   if ((side1 >= side2) && (side2 <= side3)) {
      total += side2;
   } else if ((side2 >= side3) && (side1 >= side3)) {
      total += side3;
   } else if ((side1 <= side2) && (side1 <= side3)){
      total += side1;
   }
   return 2 * side1 + 2 * side2 + 2 * side3 + total;
}

fs.readFile('dimensions.txt', function(err, data) {
   if (err) {
      return err;
   }
   var total = 0;
   var arr = data.toString().split('\n');
   for (var i = 0; i < arr.length; i++) {
      var linesplit = arr[i].split('x');
      if (linesplit.length === 3) {
         var l = parseFloat(linesplit[0]);
         var w = parseFloat(linesplit[1]);
         var h = parseFloat(linesplit[2]);
         total += ribbon(l, w, h);
      }
   }
   console.log(total);
});
