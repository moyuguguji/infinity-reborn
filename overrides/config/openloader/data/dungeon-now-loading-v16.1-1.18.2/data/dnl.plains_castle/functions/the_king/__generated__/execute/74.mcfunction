#built using mc-build (https://github.com/mc-build/mc-build)

function dnl.plains_castle:the_king/summon
scoreboard players operation @e[type=#dnl.lib:mobs,tag=dnl.boss,sort=nearest,limit=1] dnl.id = @s dnl.id
scoreboard players operation @s dnl.bossbar_id = @e[type=#dnl.lib:mobs,tag=dnl.boss,sort=nearest,limit=1] dnl.bossbar_id
scoreboard players reset @s dnl.timer
tag @s add dnl.spawn
kill @s