setInterval(function() {
  require('child_process').exec('node index.js', function(err, out) {
    // clear
    process.stdout.write('\033[2J\033[0;0H'); 
    // display
    console.info(err || out);
  });
}, 100)