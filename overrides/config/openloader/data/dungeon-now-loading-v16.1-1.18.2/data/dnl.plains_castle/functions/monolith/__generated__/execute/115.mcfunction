#built using mc-build (https://github.com/mc-build/mc-build)

function dnl.plains_castle:monolith/material
function dnl.lib:monolith/material
execute if score #dnl.success dnl.temp matches 1.. run function dnl.plains_castle:monolith/__generated__/execute/116
execute align xyz positioned ~-1 ~ ~-1 unless entity @e[type=minecraft:item_frame,nbt={Item:{tag:{dnl.material:1b}}},tag=!dnl.used,dx=2,dy=2,dz=2] run function dnl.plains_castle:monolith/__generated__/execute/117
data modify entity @s Invulnerable set value 0
tag @s add dnl.checked