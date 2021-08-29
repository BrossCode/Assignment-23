function onload() {
    document.getElementById("inputButton").onclick = function() {
        var start = Date.now();

        // takes inputs
        var xValue = document.getElementById("inputX").value;
        var yValue = document.getElementById("inputY").value;
        var widthValue = document.getElementById("inputWidth").value;
        var heightValue = document.getElementById("inputHeight").value;
        
        // run the function to build an object
        var coolshape1 = buildObject(xValue, yValue, widthValue, heightValue);
        console.log(coolshape1);

        // new inputs
        var xValue = document.getElementById("inputX2").value;
        var yValue = document.getElementById("inputY2").value;
        var widthValue = document.getElementById("inputWidth2").value;
        var heightValue = document.getElementById("inputHeight2").value;

        // run function to build object 2
        var coolshape2 = buildObject(xValue, yValue, widthValue, heightValue);
        console.log(coolshape2);

        // call on the results of that object
        document.getElementById("numberOutput").innerHTML = buildObject(xValue, yValue, widthValue, heightValue).toString();

        document.getElementById("trueFalseOutput").innerHTML = checkOverlaps(coolshape1,coolshape2);

        var end = Date.now() - start;
        document.getElementById("runTime").innerHTML = end;
    }

}

function buildObject(xValue, yValue, widthValue, heightValue) {
    // Assign inputs to variables.
    // Convert them to numbers instead of strings.
    var x = parseInt(xValue); var y = parseInt(yValue); 
    var width = parseInt(widthValue); var height = parseInt(heightValue);

    // Declare an Object exists.
    // assign it some variables.
    var shape = {x: x,y: y,width: width,height: height};
    return shape;
}

function checkOverlaps(coolshape1,coolshape2) {
        // Need to compare x and y at their range of values
    // add width to x and height to y to make perimeters
    // loop through and increase i, store outputs in arrays
    // another loop to check the values before turning if it overlaps?
    // problematic with multiple objects?

    // array to store x values of rectangle
    var xRange = [];
    var xRange2 = [];

    // var to store y values of rectangle
    var yRange = [];
    var yRange2 = [];

    // true / false if overlaps
    var doTheyOverlap = false;

    // loops to create perimeter with x and width, y and height
    for (var i = coolshape1.x; i < coolshape1.x + coolshape1.width; i++) {
        xRange.push(i);
    }
    for (var j = coolshape1.y; j < coolshape1.y + coolshape1.height; j++) {
        yRange.push(j);
    }
    for (var i = coolshape2.x; i < coolshape2.x + coolshape2.width; i++) {
        xRange2.push(i);
    }
    for (var j = coolshape2.y; j < coolshape2.y + coolshape2.height; j++) {
        yRange2.push(j);
    }

    // checks for a match and returns true
    for (i = 0; i < xRange.length; i++) {
      if  (xRange.lastIndexOf(xRange2[i]) != -1) {
          doTheyOverlap = true;
      }
    }
    for (i = 0; i < yRange.length; i++) {
      if  (yRange.lastIndexOf(yRange2[i]) != -1) {
        doTheyOverlap = true;
    }
    }
    return doTheyOverlap;
}