scoreboard players add @s dnl.timer 1

execute as @s[scores={dnl.timer=5}] run function dnl:items/ancient_bow/arrow/blue/icehail
execute as @s[scores={dnl.timer=8}] run function dnl:items/ancient_bow/arrow/blue/icehail
execute as @s[scores={dnl.timer=11}] run function dnl:items/ancient_bow/arrow/blue/icehail
execute as @s[scores={dnl.timer=14}] run function dnl:items/ancient_bow/arrow/blue/icehail
execute as @s[scores={dnl.timer=17}] run function dnl:items/ancient_bow/arrow/blue/icehail

kill @s[type=minecraft:arrow,scores={dnl.timer=32}]
