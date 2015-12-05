var fs = require('fs');

fs.readFile('paran.txt', function(err, data) {
   if (err) {
      return err;
   }
   //console.log(data.toString());
   var str = data.toString();
   var floor = 0;
   for (var i = 0; i < data.length; i++) {
      if (str[i] === '(') {
         floor++;
      } else if (str[i] === ')') {
         floor--;
      }
      if (floor === -1) {
         console.log(i);
         break;
      }
   }
});
