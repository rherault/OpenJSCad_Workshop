var w = []; //main container


function main() { 
   
    w.push(
        sphere()                         // openscad like
        //sphere(1)
        //sphere({r: 2})                  // Note: center:true is default (unlike other primitives, as OpenSCAD)
        //sphere({r: 2, center: false})     // Note: OpenSCAD doesn't support center for sphere but we do
        //sphere({r: 2, center: [true, true, false]}) // individual axis center 
        //sphere({r: 10, fn: 100 })
        //sphere({r: 10, fn: 100, type: 'geodesic'})  // geodesic approach (icosahedron further triangulated)
        
        //CSG.sphere();                      // object-oriented
        /*CSG.sphere({
          center: [0, 0, 0],
          radius: 2,                      // must be scalar
          resolution: 32
        })*/
        )

   return w;
}