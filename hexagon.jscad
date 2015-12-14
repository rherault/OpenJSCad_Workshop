// title      : Hexagon for Max Project
// author     : Romain C. herault
// license    : MIT License
// revision   : 0.001
// tags       : Hexagon
// file       : hexagon.jscad

function main() {

// to know where to place the points for any polygones: http://www.mathopenref.com/coordpolycalc.html

    return (
        //Hexagon radius 20mm height 20mm
        difference(
            CAG.fromPoints([ [10,-17],[-10,-17],[-20,0],[-10,17],[10,17],[20,0] ]).extrude({offset: [0, 0, 20]}),
            CAG.fromPoints([ [5,-9],[-5,-9],[-10,0],[-5,9],[5,9],[10,0] ]).extrude({offset: [0, 0, 10]}).translate([0,0,5])
        )
    )
}