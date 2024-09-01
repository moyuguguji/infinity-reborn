#built using mc-build (https://github.com/mc-build/mc-build)


kill @e[type=minecraft:glow_item_frame,distance=..1,tag=dnl.collector_item_frame,tag=dnl.knightly_sword_fragment]
summon glow_item_frame ~ ~ ~1 {Facing:3b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}
summon glow_item_frame ~1 ~ ~ {Facing:5b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}
summon glow_item_frame ~ ~ ~-1 {Facing:2b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}
summon glow_item_frame ~-1 ~ ~ {Facing:4b,Invulnerable:1b,Invisible:1b,Fixed:1b,Tags:["dnl.collector_item_frame",dnl.knightly_sword_fragment],Item:{id:"minecraft:iron_ingot",Count:1b}}
