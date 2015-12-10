///////////////////////////////////
// Step by step for the workshop //
// This code is not supposed to  //
// work. This is a walk through. //
// Please look at the key_tag    //
// file for the actual result.   //
///////////////////////////////////

//Start by creating a container that will be rendered
var w = []; //main container

//Then, create a Main function

function main(){
	//Inside the main, create a rectangle. Differente value can be inputed, try it out
	cube({size: [100,50,10]});
}

//To be able to render, you need to put the cube in a container and return the container

function main(){
	//Inside the main, create a rectangle. Differente value can be inputed, try it out
	w.push(cube({size: [100,50,10]}));
	
	return w;
}

//To create a hole, we need a cylinder. Add it in the main

w.push(cylinder({r: 8, h: 10}));

//We need to use a Difference to create a hole
w.push(union(
      difference(
         cube({size: [100,50,10]}),
         cylinder({r: 8, h: 10})
      )
    ));
    
//We need now to move the cylinder in the right position
cylinder({r: 8, h: 10}).translate([90,25,0])

//Let's personalise the key tag with some text. First, we need to prepare few things. Inside the main:
	var textReturned = [];
    textReturned = createText();
    
//We now create the function createText()

function createText(){
    var text = "D2254";
    var t = []; //container of text
    
    var l = vector_text(0,0,text); // get line segments [ [ [x1,y1], [x2,y2] ...], [ ]... ]

    l.forEach(function(s) {     // process the line segments
        t.push(rectangular_extrude(s, { w:2, h:2 }));
    });
    return t;
}

//We now need to add the text created onto the tag
w.push(
        union(textReturned).setColor(hsl2rgb(2,1,0.5)).translate([0,5,12]).scale(0.8)
    );
