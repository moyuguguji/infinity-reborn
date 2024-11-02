### Glass Break ###
fill ~-12 ~-12 ~-12 ~12 ~12 ~12 minecraft:air replace black_stained_glass_pane
playsound block.glass.break ambient @a ~ ~ ~ 1.0 1 1

### Summon villager zombies ###
summon zombie_villager ~ ~ ~ {VillagerData:{profession:"minecraft:none",type:"minecraft:plains"},Offers:{},Tags:["dnl.mob","dnl.cleric_hideout","dnl.zombie_villager"]}
summon zombie_villager ~ ~ ~ {VillagerData:{profession:"minecraft:none",type:"minecraft:plains"},Offers:{},Tags:["dnl.mob","dnl.cleric_hideout","dnl.zombie_villager"]}
summon zombie_villager ~ ~ ~ {VillagerData:{profession:"minecraft:none",type:"minecraft:plains"},Offers:{},Tags:["dnl.mob","dnl.cleric_hideout","dnl.zombie_villager"]}

scoreboard players add @s dnl.phase 1
