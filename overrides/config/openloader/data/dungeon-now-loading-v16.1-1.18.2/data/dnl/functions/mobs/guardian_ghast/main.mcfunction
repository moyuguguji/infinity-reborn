### Init ###
execute as @s[tag=!dnl.init] run function dnl:mobs/guardian_ghast/init

### Permanent Effects ###
effect give @s minecraft:resistance 1000000 4 true

### Keep the Ghast from Flying Away ###
execute at @s[tag=!dnl.attacker] unless block ~ ~-1 ~ minecraft:blackstone run tag @e[type=minecraft:area_effect_cloud,limit=1,sort=nearest,tag=dnl.guardian_ghast,tag=dnl.platform] add dnl.restore
execute at @s[tag=!dnl.attacker] unless block ~ ~-1 ~ minecraft:blackstone run tp @s @e[type=minecraft:area_effect_cloud,limit=1,sort=nearest,tag=dnl.guardian_ghast,tag=dnl.platform]

### State Transition ###
execute as @s[tag=dnl.transition.sleeping] run function dnl:mobs/guardian_ghast/state/sleeping/transition
execute as @s[tag=dnl.transition.awoken] run function dnl:mobs/guardian_ghast/state/awoken/transition
execute as @s[tag=dnl.transition.stunned] run function dnl:mobs/guardian_ghast/state/stunned/transition

### State Effects ###
execute as @s[tag=dnl.awoken] run function dnl:mobs/guardian_ghast/state/awoken/effect
execute as @s[tag=dnl.stunned] run function dnl:mobs/guardian_ghast/state/stunned/effect

### Relic Ability ###
execute as @s[tag=dnl.attacker] run function dnl:mobs/guardian_ghast/ability/start
