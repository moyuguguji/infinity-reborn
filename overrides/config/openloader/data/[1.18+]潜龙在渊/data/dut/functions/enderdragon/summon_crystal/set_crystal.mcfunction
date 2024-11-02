setblock ~ ~ ~ air
setblock ~ ~1 ~ air

playsound entity.evoker.cast_spell voice @a ~ ~ ~
summon end_crystal ~ ~ ~ {Tags:["dut_bydragon"]}
summon marker ~ ~ ~ {Tags:["dut_bydragon","dut_crystal"]}

setblock ~1 ~ ~1 end_stone_bricks
setblock ~-1 ~ ~-1 end_stone_bricks
setblock ~-1 ~ ~1 end_stone_bricks
setblock ~1 ~ ~-1 end_stone_bricks
setblock ~1 ~1 ~1 end_stone_bricks
setblock ~-1 ~1 ~-1 end_stone_bricks
setblock ~-1 ~1 ~1 end_stone_bricks
setblock ~1 ~1 ~-1 end_stone_bricks

setblock ~1 ~-1 ~ end_stone_brick_stairs[facing=west,half=bottom]
setblock ~-1 ~-1 ~ end_stone_brick_stairs[facing=east,half=bottom]
setblock ~ ~-1 ~1 end_stone_brick_stairs[facing=north,half=bottom]
setblock ~ ~-1 ~-1 end_stone_brick_stairs[facing=south,half=bottom]

setblock ~1 ~2 ~ end_stone_brick_stairs[facing=west,half=top]
setblock ~-1 ~2 ~ end_stone_brick_stairs[facing=east,half=top]
setblock ~ ~2 ~1 end_stone_brick_stairs[facing=north,half=top]
setblock ~ ~2 ~-1 end_stone_brick_stairs[facing=south,half=top]

setblock ~ ~4 ~ end_stone_bricks
setblock ~ ~3 ~ end_stone_bricks
setblock ~ ~2 ~ end_stone_bricks
setblock ~ ~-1 ~ end_stone_bricks
setblock ~ ~-2 ~ end_stone_bricks
setblock ~ ~-3 ~ end_stone_bricks

setblock ~ ~5 ~ end_stone_brick_wall
setblock ~ ~-4 ~ end_stone_brick_wall

setblock ~1 ~3 ~ end_stone_brick_wall
setblock ~-1 ~3 ~ end_stone_brick_wall
setblock ~ ~3 ~1 end_stone_brick_wall
setblock ~ ~3 ~-1 end_stone_brick_wall

setblock ~1 ~-2 ~ end_stone_brick_wall
setblock ~-1 ~-2 ~ end_stone_brick_wall
setblock ~ ~-2 ~1 end_stone_brick_wall
setblock ~ ~-2 ~-1 end_stone_brick_wall

setblock ~1 ~-1 ~1 end_stone_brick_wall
setblock ~-1 ~-1 ~-1 end_stone_brick_wall
setblock ~-1 ~-1 ~1 end_stone_brick_wall
setblock ~1 ~-1 ~-1 end_stone_brick_wall

setblock ~1 ~2 ~1 end_stone_brick_wall
setblock ~-1 ~2 ~-1 end_stone_brick_wall
setblock ~-1 ~2 ~1 end_stone_brick_wall
setblock ~1 ~2 ~-1 end_stone_brick_wall
kill @s