### Timer ###
scoreboard players add @s dnl.timer 1

### Particle Effects ###
execute at @s[scores={dnl.timer=40}] run particle minecraft:explosion ~ ~ ~ 1 2 1 0.001 20 force

### Sound Effects ###
execute at @s[scores={dnl.timer=20}] run playsound minecraft:block.enchantment_table.use ambient @a ~ ~ ~ 16 0.5
execute at @s[scores={dnl.timer=40}] run playsound minecraft:entity.dragon_fireball.explode ambient @a ~ ~ ~ 16 1

### Generate Structure ###
execute at @s[scores={dnl.timer=40},tag=dnl.tops] run function dnl:mobs/guardian_ghast/pillar_of_relic/generate_tops
execute at @s[scores={dnl.timer=40},tag=dnl.bars] run function dnl:mobs/guardian_ghast/pillar_of_relic/generate_bars

### Tag and Scoreboard ###
tag @s[scores={dnl.timer=40}] remove dnl.generate
tag @s[scores={dnl.timer=40}] add dnl.active
scoreboard players reset @s[scores={dnl.timer=40}] dnl.timer
