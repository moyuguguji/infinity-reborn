### Generate Pillar of Relic ###
execute at @s[tag=dnl.generate] run function dnl:mobs/guardian_ghast/pillar_of_relic/spawning

execute at @s[tag=dnl.active] unless block ~ ~ ~ minecraft:bookshelf run function dnl:mobs/guardian_ghast/pillar_of_relic/destroyed
