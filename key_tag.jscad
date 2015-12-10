var w = []; //main container

function createText(){
    var text = "D2254";
    var t = []; //container of text
    
    var l = vector_text(0,0,text); // get line segments [ [ [x1,y1], [x2,y2] ...], [ ]... ]

    l.forEach(function(s) {     // process the line segments
        t.push(rectangular_extrude(s, { w:2, h:2 }));
    });
    return t;
}

function createText2(){
    var text = "Please always return to D2265";
    var t2 = []; //container of text
    
    var l2 = vector_text(0,0,text); // get line segments [ [ [x1,y1], [x2,y2] ...], [ ]... ]

    l2.forEach(function(s) {     // process the line segments
        t2.push(rectangular_extrude(s, { w:2, h:2 }));
    });
    return t2;
}

function main() { 
   
    var textReturned = [];
    textReturned = createText();
    
    var textReturned2 = [];
    textReturned2 = createText2();
    
    w.push(
        union(textReturned).setColor(hsl2rgb(2,1,0.5)).translate([0,5,12]).scale(0.8)
    );
    
    w.push(
        union(textReturned2).setColor(hsl2rgb(2,1,0.5)).translate([5,220,50]).scale(0.2)
    );
    
    w.push(union(
      difference(
         cube({size: [100,50,10]}),
         cylinder({r: 8, h: 10}).translate([90,25,0])
      )
    ));
   
   return w;
}
