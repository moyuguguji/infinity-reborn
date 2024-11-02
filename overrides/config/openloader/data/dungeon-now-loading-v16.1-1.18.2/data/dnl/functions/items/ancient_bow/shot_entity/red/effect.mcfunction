scoreboard players add @s dnl.timer 1

execute as @s[scores={dnl.timer=5}] run function dnl:items/ancient_bow/arrow/red/fireball
execute as @s[scores={dnl.timer=8}] run function dnl:items/ancient_bow/arrow/red/fireball
execute as @s[scores={dnl.timer=11}] run function dnl:items/ancient_bow/arrow/red/fireball
execute as @s[scores={dnl.timer=14}] run function dnl:items/ancient_bow/arrow/red/fireball
execute as @s[scores={dnl.timer=17}] run function dnl:items/ancient_bow/arrow/red/fireball

tag @s[scores={dnl.timer=32}] remove dnl.item.entity
tag @s[scores={dnl.timer=32}] remove dnl.ancient_bow.red_effect
scoreboard players reset @s[scores={dnl.timer=32..}] dnl.timer
