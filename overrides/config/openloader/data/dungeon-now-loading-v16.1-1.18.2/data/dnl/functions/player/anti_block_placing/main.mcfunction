advancement revoke @s[advancements={dnl:player/anti_block_placing=true}] only dnl:player/anti_block_placing

tag @s add dnl.break_block

execute at @s anchored eyes run function dnl:player/anti_block_placing/loop
