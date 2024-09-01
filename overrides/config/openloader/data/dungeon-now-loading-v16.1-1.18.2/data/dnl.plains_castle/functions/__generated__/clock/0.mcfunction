#built using mc-build (https://github.com/mc-build/mc-build)

schedule function dnl.plains_castle:__generated__/clock/0 1s
execute as @a at @s run execute if entity @s[nbt={SelectedItem:{tag:{dnl.knightly_sword:1b}},Inventory:[{Slot:-106b,id:"minecraft:shield"}]}] run function dnl.plains_castle:items/knightly_sword/effect