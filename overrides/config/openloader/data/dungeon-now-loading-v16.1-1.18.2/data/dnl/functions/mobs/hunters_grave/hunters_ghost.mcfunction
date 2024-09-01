execute as @s[type=skeleton,tag=dnl.hunters_ghost] store result score @s dnl.health run data get entity @s Health 1

execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=3.5..4,tag=!dnl.phase_change] {HandItems:[{id:"minecraft:stone_sword",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Knife","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:sharpness",lvl:3s},{id:"minecraft:knockback",lvl:2s}]}},{}],Attributes:[{Name:generic.movement_speed,Base:0.3}]}
execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=4..4.5,tag=!dnl.phase_change] {HandItems:[{id:"minecraft:bow",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Bow","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:power",lvl:3s}]}},{}],ActiveEffects:[{Id:14b,Amplifier:0b,Duration:32766}],Attributes:[{Name:generic.movement_speed,Base:0.25}]}

tag @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,tag=!dnl.phase_change,scores={dnl.health=..100}] add dnl.phase_change
execute at @a run scoreboard players add @s[type=skeleton,tag=dnl.hunters_ghost,tag=dnl.phase_change,distance=..16] dnl.variable 1

#execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=1.5..2,tag=dnl.phase_change] {HandItems:[{id:"minecraft:stone_sword",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Knife","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:sharpness",lvl:3s},{id:"minecraft:knockback",lvl:2s}]}},{}],Attributes:[{Name:generic.movement_speed,Base:0.4}]}
#execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=2..2.5,tag=dnl.phase_change] {HandItems:[{id:"minecraft:bow",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Bow","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:power",lvl:3s}]}},{}],ActiveEffects:[{Id:14b,Amplifier:0b,Duration:32766}],Attributes:[{Name:generic.movement_speed,Base:0.25},{Name:generic.movement_speed,Base:0.25}]}

execute if entity @s[tag=dnl.phase_change,nbt={HurtTime:10s}] at @s run playsound entity.enderman.teleport ambient @a[distance=..16] ~ ~ ~ 1.0 2 1
execute if entity @s[tag=dnl.phase_change,scores={dnl.variable=100}] at @s run playsound entity.enderman.teleport ambient @a[distance=..16] ~ ~ ~ 1.0 2 1
execute at @a run spreadplayers ~ ~ 1 4 false @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=..16,tag=dnl.phase_change,nbt={HurtTime:10s}]
execute at @a run spreadplayers ~ ~ 1 4 false @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=..16,tag=dnl.phase_change,scores={dnl.variable=100}]
execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=..3,tag=dnl.phase_change,nbt={HurtTime:10s}] {HandItems:[{id:"minecraft:stone_sword",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Knife","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:sharpness",lvl:3s},{id:"minecraft:knockback",lvl:2s}]}},{}],Attributes:[{Name:generic.movement_speed,Base:0.4}]}
execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=3..,tag=dnl.phase_change,nbt={HurtTime:10s}] {HandItems:[{id:"minecraft:bow",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Bow","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:power",lvl:3s}]}},{}],ActiveEffects:[{Id:14b,Amplifier:0b,Duration:32766}],Attributes:[{Name:generic.movement_speed,Base:0.25},{Name:generic.movement_speed,Base:0.5}]}

execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=..3,tag=dnl.phase_change,scores={dnl.variable=100}] {HandItems:[{id:"minecraft:stone_sword",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Knife","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:sharpness",lvl:3s},{id:"minecraft:knockback",lvl:2s}]}},{}],Attributes:[{Name:generic.movement_speed,Base:0.4}]}
execute at @a run data merge entity @s[type=minecraft:skeleton,tag=dnl.hunters_ghost,distance=3..,tag=dnl.phase_change,scores={dnl.variable=100}] {HandItems:[{id:"minecraft:bow",Count:1b,tag:{display:{Name:'{"text":"Hunter\'s Bow","color":"gold","italic":false}'},Enchantments:[{id:"minecraft:power",lvl:3s}]}},{}],ActiveEffects:[{Id:14b,Amplifier:0b,Duration:32766}],Attributes:[{Name:generic.movement_speed,Base:0.25},{Name:generic.movement_speed,Base:0.5}]}
execute at @s[tag=dnl.phase_change,scores={dnl.health=..12}] run particle minecraft:soul ~ ~1 ~ 0.3 0.5 0.3 0.01 1
execute at @s if block ~ ~-1 ~ minecraft:air run data merge entity @s[tag=dnl.phase_change,scores={dnl.health=..100}] {FallDistance:0.0f}

scoreboard players set @s[type=skeleton,tag=dnl.hunters_ghost,tag=dnl.phase_change,scores={dnl.variable=100}] dnl.variable 0
