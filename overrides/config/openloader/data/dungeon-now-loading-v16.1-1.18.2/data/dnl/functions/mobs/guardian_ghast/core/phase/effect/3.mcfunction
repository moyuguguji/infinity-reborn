### Timer ###
scoreboard players add @s dnl.clock 1

### Next Attacker ###
execute as @s[scores={dnl.clock=300..}] run tag @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,tag=dnl.awoken,limit=1,tag=!dnl.attacker,sort=random,distance=..80] add dnl.attacker

### Reset Timer ###
scoreboard players reset @s[scores={dnl.clock=300..}] dnl.clock
