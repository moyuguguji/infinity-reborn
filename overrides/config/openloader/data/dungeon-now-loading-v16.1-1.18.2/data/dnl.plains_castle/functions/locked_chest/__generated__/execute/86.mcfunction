#built using mc-build (https://github.com/mc-build/mc-build)

execute positioned ~ ~0.5 ~ run kill @e[type=minecraft:area_effect_cloud,tag=dnl.locked_chest_bar,tag=dnl.plains_castle_locked_chest,distance=..1]
playsound minecraft:entity.arrow.hit_player master @a ~ ~ ~ 1 1 0
data modify block ~ ~ ~ LootTable set value "dnl:structures/plains_castle/treasure_chest/locked"
data remove block ~ ~ ~ Lock

advancement grant @a[distance=..10,limit=1,sort=nearest] only dnl:story/structures/plains_castle/loot_treasure_chest


advancement grant @a[distance=..10,limit=1,sort=nearest] only dnl:story/structures/plains_castle/loot_all_treasure_chest treasure_locked

clear @a[distance=..10,nbt={Inventory:[{tag:{display:{Name:'{"text":"Plains Castle Key§r","color":"gold","italic":false}'}}}]},limit=1,sort=nearest] minecraft:stick{display:{Name:'{"text":"Plains Castle Key§r","color":"gold","italic":false}'}} 1
kill @s