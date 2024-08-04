### Bossbar ###
# Visibility Disable
execute as @s run bossbar set dnl:lord_of_olympus visible false

schedule function dnl:mobs/olympus/lord_of_olympus/advancements/reward 1t

### Revoke Advancement ###
advancement revoke @s only dnl:mobs/lord_of_olympus/death
