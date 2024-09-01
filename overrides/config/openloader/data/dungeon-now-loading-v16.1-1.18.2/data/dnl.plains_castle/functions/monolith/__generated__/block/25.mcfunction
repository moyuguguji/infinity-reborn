#built using mc-build (https://github.com/mc-build/mc-build)

playsound minecraft:entity.experience_orb.pickup master @a[distance=..10] ~ ~ ~ 1 0.5 0
tellraw @a[distance=..10] {"text":"● You cannot mine this block","color":"red","italic":false}
setblock ~ ~ ~ crying_obsidian replace
execute positioned ~ ~1 ~ unless entity @e[type=minecraft:glow_item_frame,tag=dnl.crafter_frame,distance=..1.1] run summon glow_item_frame ~ ~ ~ {Facing:1b,Invulnerable:0b,Fixed:0b,Tags:["dnl.crafter_frame"],Item:{}}
kill @e[type=minecraft:item,distance=..2,nbt={Item:{id:"minecraft:crying_obsidian"},Age:0s},sort=nearest,limit=1]