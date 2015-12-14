var w = []; //main container


function main() { 
   
    w.push(
        cube()                            // openscad like
        //cube(1)
        //cube({size: 1})
        //cube({size: [1,2,3]})
        //cube({size: 1, center: true})    // default center:false
        //cube({size: 1, center: [true,true,false]}) // individual axis center true or false
        //cube({size: [1,2,3], round: true})
        
        /*CSG.roundedCube({                  // rounded cube
            center: [0, 0, 0],
            radius: 1,
            roundradius: 0.2,
            resolution: 8,
        })*/
        );

   return w;
}