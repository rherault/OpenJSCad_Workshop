var w = []; //main container

function main() { 
   
    w.push(
        sphere(10)
    );
    
    w.push(
        sphere({r: 10}).translate([30,0,0]).scale([1,2,3]).rotateX(45).center(true)  // Note: center:true is default (unlike other primitives, as OpenSCAD)
    );

   return w;
}