### Dungeon Mobs ###
execute at @a as @s[tag=dnl.slime,tag=!dnl.disable_silent,distance=..3] run function dnl:mobs/sinkhole/slime

### Boss ###
execute if entity @s[tag=dnl.slimecore] run function dnl:mobs/sinkhole/slimecore/list
