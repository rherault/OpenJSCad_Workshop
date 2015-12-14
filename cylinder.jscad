var w = []; //main container


function main() { 
   
    w.push(
        cylinder({r: 1, h: 10})                 // openscad like
        //cylinder({d: 1, h: 10});
        //cylinder({r: 1, h: 10, center: true})   // default: center:false
        //cylinder({r: 1, h: 10, center: [true, true, false]})  // individual x,y,z center flags
        //cylinder({r: 1, h: 10, round: true})
        //cylinder({r1: 3, r2: 0, h: 10})
        //cylinder({d1: 1, d2: 0.5, h: 10})
        //cylinder({start: [0,0,0], end: [0,0,10], r1: 1, r2: 2, fn: 50})
        
        /*CSG.cylinder({                      // object-oriented
          start: [0, -1, 0],
          end: [0, 1, 0],
          radius: 1,                        // true cylinder
          resolution: 16
        })*/
        /*CSG.cylinder({
          start: [0, -1, 0],
          end: [0, 1, 0],
          radiusStart: 1,                   // start- and end radius defined, partial cones
          radiusEnd: 2,
          resolution: 16
        })*/
        /*CSG.roundedCylinder({               // and its rounded version
          start: [0, -1, 0],
          end: [0, 1, 0],
          radius: 1,
          resolution: 16
        })*/
        )

   return w;
}