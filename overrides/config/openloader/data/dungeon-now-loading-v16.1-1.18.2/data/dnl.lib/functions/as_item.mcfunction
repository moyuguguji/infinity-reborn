#built using mc-build (https://github.com/mc-build/mc-build)

execute if entity @s[nbt={Item:{tag:{dnl.boss_death:1b}}}] run function dnl.lib:boss_death
execute if entity @s[nbt={Item:{tag:{dnl.unconvertable:1b}}}] run tag @s add dnl.unconvertable