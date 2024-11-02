#built using mc-build (https://github.com/mc-build/mc-build)

setblock ~ ~ ~ minecraft:crying_obsidian replace
summon glow_item_frame ~ ~1 ~ {Facing:1b,Invulnerable:0b,Fixed:0b,Tags:["dnl.crafter_frame"],Item:{}}
tag @s add dnl.init