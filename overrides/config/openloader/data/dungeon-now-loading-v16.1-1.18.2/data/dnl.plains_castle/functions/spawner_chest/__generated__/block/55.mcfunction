#built using mc-build (https://github.com/mc-build/mc-build)

playsound minecraft:entity.arrow.hit_player master @a[distance=..10] ~ ~ ~ 1 1 0
particle lava ~ ~0.3 ~ 0.3 0.3 0.3 0.0001 10 normal
execute positioned ~ ~0.5 ~ run kill @e[type=minecraft:area_effect_cloud,tag=dnl.spawner_chest_bar,tag=dnl.plains_castle_spawner_chest,distance=..1]
data modify block ~ ~ ~ LootTable set value "dnl:structures/plains_castle/treasure_chest/spawner"
data remove block ~ ~ ~ Lock
kill @s