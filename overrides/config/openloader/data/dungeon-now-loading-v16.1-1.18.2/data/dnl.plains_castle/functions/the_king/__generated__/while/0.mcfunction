#built using mc-build (https://github.com/mc-build/mc-build)

scoreboard players set #WHILE_0 LANG_MC_INTERNAL 0
execute as @e[type=#dnl.lib:mobs,tag=dnl.set_bossbar] if score #dnl.bossbar_id dnl.bossbar_id = @s dnl.bossbar_id run function dnl.plains_castle:the_king/__generated__/while/1