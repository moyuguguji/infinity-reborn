# enable all mob ai of the railway outpost #
execute at @s as @e[tag=noai] run data merge entity @s {NoAI:0b,Attributes:[{Name:generic.follow_range,Base:100.0}]}
tag @e[tag=noai] remove noai

execute as @e[type=area_effect_cloud,tag=summon_stray_jokey] at @s run summon spider ~ ~ ~ {PersistenceRequired:1b,NoAI:1b,Tags:["noai","camp_mob"],Passengers:[{id:"minecraft:stray",PersistenceRequired:1b,NoAI:1b,Tags:["noai","camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}]}
kill @e[type=area_effect_cloud,tag=summon_stray_jokey]

execute as @s store result score @s dnl.health run data get entity @s Health 1

# 200 ~ 300 #
execute at @s[tag=!set_spawn] run summon area_effect_cloud ~ ~ ~ {Tags:["frost_watcher_spawn"],Duration:2147483647}
tag @s add set_spawn

execute at @s[scores={dnl.health=200..300}] positioned ~ ~1.62 ~ as @e[type=arrow,distance=..1,nbt={pickup:0b},tag=!frost_watcher_arrow] run data merge entity @s {PierceLevel:10b,Tags:["frost_watcher_arrow","level0"],CustomPotionEffects:[{Id:2b,Amplifier:1b,Duration:100}]}


# 100 ~ 200 #
data merge entity @s[scores={dnl.health=100..200},tag=!phase_change1] {HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:3s},{id:"minecraft:punch",lvl:2s}]}},{}]}
execute at @s[scores={dnl.health=100..200},tag=!phase_change1] run playsound entity.enderman.teleport ambient @a[distance=..16] ~ ~ ~ 1.0 2 1
execute at @s[scores={dnl.health=100..200},tag=!phase_change1] run tp @s @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1]
execute at @s[scores={dnl.health=100..200},tag=!phase_change1] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~3 ~-3 ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute at @s[scores={dnl.health=100..200},tag=!phase_change1] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~ ~-3 ~3 {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute at @s[scores={dnl.health=100..200},tag=!phase_change1] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~-3 ~-3 ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute at @s[scores={dnl.health=100..200},tag=!phase_change1] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~ ~-3 ~-3 {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}

tag @s[scores={dnl.health=100..200},tag=!phase_change1] add phase_change1

execute at @s[scores={dnl.health=100..200},tag=phase_change1] positioned ~ ~1.62 ~ as @e[type=arrow,distance=..1,nbt={pickup:0b},tag=!frost_watcher_arrow] run data merge entity @s {PierceLevel:10b,Tags:["frost_watcher_arrow","level1"],CustomPotionEffects:[{Id:2b,Amplifier:2b,Duration:100},{Id:4b,Amplifier:0b,Duration:100}]}

# 0 ~ 100 #
data merge entity @s[scores={dnl.health=..100},tag=!phase_change2] {HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:5s},{id:"minecraft:punch",lvl:3s}]}},{}]}
execute at @s[scores={dnl.health=..100},tag=!phase_change2] run playsound entity.enderman.teleport ambient @a[distance=..16] ~ ~ ~ 1.0 2 1
execute at @s[scores={dnl.health=..100},tag=!phase_change2] run tp @s @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1]
execute at @s[scores={dnl.health=..100},tag=!phase_change2] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~3 ~-3 ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute at @s[scores={dnl.health=..100},tag=!phase_change2] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~ ~-3 ~3 {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute at @s[scores={dnl.health=..100},tag=!phase_change2] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~-3 ~-3 ~ {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}
execute at @s[scores={dnl.health=..100},tag=!phase_change2] at @e[type=area_effect_cloud,tag=frost_watcher_spawn,sort=nearest,limit=1] run summon stray ~ ~-3 ~-3 {Tags:["camp_mob"],HandItems:[{id:"minecraft:bow",Count:1b,tag:{Enchantments:[{id:"minecraft:power",lvl:1s},{id:"minecraft:punch",lvl:1s}]}},{}],HandDropChances:[0.000F,0.085F],ArmorItems:[{},{},{id:"minecraft:iron_chestplate",Count:1b,tag:{Unbreakable:1b}},{id:"minecraft:diamond_helmet",Count:1b,tag:{Unbreakable:1b}}],ArmorDropChances:[0.085F,0.085F,0.000F,0.000F]}

tag @s[scores={dnl.health=..100},tag=!phase_change2] add phase_change2

execute at @s[scores={dnl.health=..100},tag=phase_change2] positioned ~ ~1.62 ~ as @e[type=arrow,distance=..1,nbt={pickup:0b},tag=!frost_watcher_arrow] run data merge entity @s {PierceLevel:10b,Tags:["frost_watcher_arrow","level2"],CustomPotionEffects:[{Id:2b,Amplifier:4b,Duration:100},{Id:4b,Amplifier:1b,Duration:100}]}
execute at @s[scores={dnl.health=..100},tag=phase_change2] as @e[type=arrow,distance=1..4,nbt={pickup:1b},tag=!frost_watcher_arrow] run function dnl:mobs/watcher_camp/frost_watcher_barrier
