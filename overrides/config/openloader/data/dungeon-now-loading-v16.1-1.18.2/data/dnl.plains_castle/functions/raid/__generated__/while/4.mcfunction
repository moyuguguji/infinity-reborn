#built using mc-build (https://github.com/mc-build/mc-build)

scoreboard players set #WHILE_2 LANG_MC_INTERNAL 0
execute as @e[type=marker,tag=dnl.raid,tag=dnl.start_raid] if score #dnl.raidbar_id dnl.raidbar_id = @s dnl.raidbar_id run function dnl.plains_castle:raid/__generated__/while/5