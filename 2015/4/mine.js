var crypto = require('crypto');

var crack = function(input) {
   var i = 0;
   var str = '';
   while ('00000' !== str.substring(0,5)) {
      i++;
      var md5sum = crypto.createHash('md5');
      str = md5sum.update(input + i, 'utf-8').digest('hex');
   }
   return i;
}

console.log(crack('bgvyzdsv'));
