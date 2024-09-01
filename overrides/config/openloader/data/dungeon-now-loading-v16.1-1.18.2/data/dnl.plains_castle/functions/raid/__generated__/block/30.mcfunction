#built using mc-build (https://github.com/mc-build/mc-build)

playsound minecraft:entity.experience_orb.pickup master @a[distance=..10] ~ ~ ~ 1 0.5 0
tellraw @a[distance=..10] {"text":"● You cannot mine this block","color":"red","italic":false}
execute if entity @s[tag=dnl.start_raid] run setblock ~ ~ ~ campfire[lit=true] replace
execute unless entity @s[tag=dnl.start_raid] run setblock ~ ~ ~ campfire[lit=false] replace
kill @e[type=minecraft:item,distance=..2,nbt={Item:{id:"minecraft:campfire"},Age:0s},sort=nearest,limit=1]
kill @e[type=minecraft:item,distance=..2,nbt={Item:{id:"minecraft:charcoal"},Age:0s},sort=nearest,limit=1]