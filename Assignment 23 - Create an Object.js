function onload() {
    document.getElementById("inputButton").onclick = function() {
        var start = Date.now();

        var xValue = document.getElementById("inputX").value;
        var yValue = document.getElementById("inputY").value;
        var widthValue = document.getElementById("inputWidth").value;
        var heightValue = document.getElementById("inputHeight").value;
        
        // run the function to build an object
        buildObject(xValue, yValue, widthValue, heightValue);

        // call on the results of that object
        document.getElementById("numberOutput").innerHTML = buildObject(xValue, yValue, widthValue, heightValue);
        
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

    console.log(shape);
    // return the object properties
    return "x = " + shape.x + " y = " + + shape.y + " width = " + shape.width + " height = " + shape.height;
}