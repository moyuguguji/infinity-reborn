#built using mc-build (https://github.com/mc-build/mc-build)

execute as @a[tag=!dnl.installed] run function dnl.lib:message
scoreboard objectives add dnl.death deathCount
scoreboard objectives add dnl.rng dummy
scoreboard objectives add dnl.id dummy
execute unless score #dnl.id dnl.id matches 0.. run scoreboard players set #dnl.id dnl.id 0
scoreboard objectives add dnl.count dummy
scoreboard objectives add dnl.health dummy
scoreboard objectives add dnl.phase dummy
scoreboard objectives add dnl.temp dummy
scoreboard objectives add dnl.col_count dummy
scoreboard objectives add dnl.difficulty dummy
scoreboard objectives add dnl.raidbar_id dummy
scoreboard players set #dnl.raidbar_id dnl.raidbar_id 0
bossbar add dnl.raidbar0 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar1 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar2 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar3 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar4 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar5 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar6 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar7 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar8 {"text":"Reserved","color":"aqua"}
bossbar add dnl.raidbar9 {"text":"Reserved","color":"aqua"}
scoreboard objectives add dnl.timer dummy
scoreboard objectives add dnl.second dummy
scoreboard objectives add dnl.minute dummy
scoreboard objectives add dnl.constant dummy
scoreboard players set #1 dnl.constant 1
scoreboard players set #2 dnl.constant 2
scoreboard players set #3 dnl.constant 3
scoreboard players set #4 dnl.constant 4
scoreboard players set #5 dnl.constant 5
scoreboard players set #6 dnl.constant 6
scoreboard players set #7 dnl.constant 7
scoreboard players set #8 dnl.constant 8
scoreboard players set #9 dnl.constant 9
scoreboard objectives add dnl.bossbar_id dummy
scoreboard players set #dnl.bossbar_id dnl.bossbar_id 0
bossbar add dnl.bossbar0 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar1 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar2 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar3 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar4 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar5 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar6 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar7 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar8 {"text":"Reserved","color":"aqua"}
bossbar add dnl.bossbar9 {"text":"Reserved","color":"aqua"}