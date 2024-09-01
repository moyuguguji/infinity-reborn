execute if entity @a[tag=!dnl.mode.op] as @e[tag=dnl.mob] at @s run function dnl:mobs/list

### From Custom (Planned to be changed)
# hunter's grave
execute as @e[type=skeleton,tag=dnl.hunters_ghost] run function dnl:mobs/hunters_grave/hunters_ghost
execute as @e[type=area_effect_cloud,tag=dnl.hunters_wolf] run function dnl:mobs/hunters_grave/hunters_wolf
execute as @e[type=wolf,tag=dnl.grey] run function dnl:mobs/hunters_grave/grey
execute as @e[type=armor_stand,tag=dnl.hunters_bow] run function dnl:mobs/hunters_grave/hunters_bow
execute as @e[type=item,nbt={Item:{tag:{Tags:["hunter_killed"]}}}] run function dnl:mobs/hunters_grave/hunters_ghost2

# cleric's hideout
#execute as @e[type=zombie_villager,tag=potion_target,tag=!potioned] run function dnl:mobs/clerics_hideout/zombie_villager
#execute as @e[type=zombie_villager,tag=potion_target,tag=potioned] run function dnl:mobs/clerics_hideout/zombie_villager2
#execute as @e[type=villager,name="Cleric \"Z\""] run function dnl:mobs/clerics_hideout/cleric_z_villager

# railway outpost
execute as @e[type=minecraft:pillager,tag=station_chief] run function dnl:mobs/railway_outpost/station_chief
execute as @e[type=item,nbt={Item:{tag:{Tags:["station_chief_killed"]}}}] run function dnl:mobs/railway_outpost/station_chief_killed

# watcher_camp
execute as @e[type=minecraft:stray,tag=frost_watcher] run function dnl:mobs/watcher_camp/frost_watcher
execute as @e[type=minecraft:arrow,tag=frost_watcher_arrow] run function dnl:mobs/watcher_camp/frost_watcher_arrow
execute as @e[type=item,nbt={Item:{tag:{Tags:["frost_watcher_killed"]}}}] run function dnl:mobs/watcher_camp/frost_watcher_killed

# crawlers_lair
execute as @e[type=minecraft:cave_spider,tag=dnl.poison_eyes] run function dnl:mobs/crawlers_lair/poison_eyes/main

# gallery of illusion
execute as @e[type=minecraft:illusioner,tag=illusioned_gallery,tag=boss] run function dnl:mobs/gallery_of_illusion/illusioner/main
execute as @e[type=minecraft:armor_stand,tag=chain_moving_armor] at @s if entity @a[distance=..5,gamemode=survival] run function dnl:mobs/gallery_of_illusion/chain_moving_armor
execute as @e[type=minecraft:armor_stand,tag=iron_moving_armor] at @s if entity @a[distance=..5,gamemode=survival] run function dnl:mobs/gallery_of_illusion/iron_moving_armor
execute as @e[type=minecraft:armor_stand,tag=diamond_moving_armor] at @s if entity @a[distance=..5,gamemode=survival] run function dnl:mobs/gallery_of_illusion/diamond_moving_armor
execute as @e[type=minecraft:area_effect_cloud,tag=illusioned_gallery] run function dnl:mobs/gallery_of_illusion/aec

# forgotten_field
execute as @e[type=minecraft:villager,tag=forgotten_field_mob,tag=poppy_seller] run function dnl:mobs/forgotten_field/poppy_seller
execute as @e[type=minecraft:iron_golem,tag=forgotten_field_mob,tag=boss] run function dnl:mobs/forgotten_field/iron_golem
