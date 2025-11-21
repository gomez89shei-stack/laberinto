// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100008080807070707070707070707070707080808070302020202020202020204070701070701070707070707070707010707050202060703020202020202020607070707070707010707070707070707070703020202020607030202020202040707010707070707030607070707070107070107030204070107030202020206070701070107010701070107070707070707010701070107010701070302040707070107010705020607010701070107070701070107070707070107010701070707010705020407030206070107010707070107070701070107070701070107070705020202060705020202060705020207070707070707070707070707070707`, img`
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 . . . . . . . . . . . 2 
2 . 2 2 . 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 . 2 2 2 2 2 . . 2 2 2 2 2 . 2 
2 . 2 . . . 2 . 2 . . . . . . 2 
2 . 2 . 2 . 2 . 2 . 2 2 2 2 2 2 
2 . 2 . 2 . 2 . 2 . 2 . . . 2 2 
2 . 2 . 2 . . . 2 . 2 . 2 . 2 2 
2 . 2 . 2 2 2 2 2 . 2 . 2 . 2 2 
2 . 2 . . . 2 . . . 2 . 2 . 2 2 
2 . 2 2 2 . 2 . 2 2 2 . 2 . 2 2 
2 . . . . . 2 . . . . . 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn4,sprites.castle.tileGrass1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
