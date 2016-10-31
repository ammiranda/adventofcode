var fs = require('fs'); 

fs.readFile('route.txt', function(err, data) {
   if (err) {
      throw err;
   }
   var str = data.toString();

   console.log(uniqueHouses(str));    
});

var move = function(ch, coordsObj, obj) {
   if (ch === '>') {
      coordsObj.x += 1;
   } else if (ch === '<') {
      coordsObj.x -= 1;
   } else if (ch === '^') {
      coordsObj.y += 1;
   } else if (ch === 'v') {
      coordsObj.y -= 1;
   }

   var coordStr = coordsObj.x + ',' + coordsObj.y;
   if (!obj[coordStr]) {
      obj[coordStr] = 1;
   }
}

var uniqueHouses = function(str) {
   var obj = {'0,0': 1};
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var newHouses = 0;
   var robo = {'x': 0, 'y': 0}; 
   var santa = {'x': 0, 'y': 0};
   for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (i % 2 === 0) {
        move(ch, robo, obj);
      } else {
        move(ch, santa, obj);
      }
   }
   for (var key in obj) {
      newHouses++;
   }
   return newHouses;
}

