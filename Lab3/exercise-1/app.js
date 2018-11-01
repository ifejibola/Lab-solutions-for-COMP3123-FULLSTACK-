                //Pipes and File Streams
                //Callbacks and Asynchronous code

// 5.  In appjs, write code to create a readable stream to the data text file
// require built-in file system module 
var fs = require('fs');

// create reaable stream to read in the file 
var stream = fs.createReadStream("data.txt");

// Note: Readable stream inheris from the Event Emitter. subcribe to the 'data' event and create a 
// callback function to be called when data is received from the readbale stream.
stream.on("data", function(data){
    console.log(data);
})

// 8. Convert buffer to String

