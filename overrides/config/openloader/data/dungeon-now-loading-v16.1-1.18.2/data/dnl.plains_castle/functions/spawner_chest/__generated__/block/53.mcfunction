#built using mc-build (https://github.com/mc-build/mc-build)

playsound minecraft:entity.experience_orb.pickup master @a[distance=..10] ~ ~ ~ 1 0.5 0
tellraw @a[distance=..10] {"text":"● You cannot mine this block","color":"red","italic":false}
setblock ~ ~ ~ chest[type=single]{Lock:"Spawner Chest§r"} replace
kill @e[type=minecraft:item,distance=..2,nbt={Item:{id:"minecraft:chest"},Age:0s},sort=nearest,limit=1]