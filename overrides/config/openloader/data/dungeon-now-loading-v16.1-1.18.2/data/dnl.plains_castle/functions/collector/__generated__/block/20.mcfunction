#built using mc-build (https://github.com/mc-build/mc-build)

setblock ~ ~ ~ minecraft:chiseled_stone_bricks
setblock ~1 ~ ~ minecraft:air destroy
setblock ~-1 ~ ~ minecraft:air destroy
setblock ~ ~ ~1 minecraft:air destroy
setblock ~ ~ ~-1 minecraft:air destroy
execute store result score #count dnl.temp if entity @e[type=minecraft:glow_item_frame,distance=..1,tag=dnl.collector_item_frame,tag=dnl.knightly_sword_fragment]
execute unless score #count dnl.temp matches 4 run function dnl.plains_castle:collector/__generated__/block/21
playsound minecraft:entity.experience_orb.pickup master @a[distance=..10] ~ ~ ~ 1 0.5 0
tellraw @a[distance=..10] {"text":"● You cannot mine this block","color":"red","italic":false}
kill @e[type=minecraft:item,distance=..2,nbt={Item:{id:"minecraft:chiseled_stone_bricks"},Age:0s},sort=nearest,limit=1]