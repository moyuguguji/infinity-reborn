### Data Change ### (This function exists due to jigsaw error on skeleton, where holding item is always converted to normal bow without nbt.)
data modify entity @s HandItems[0] set from storage dnl:lord_of_olympus.sword

### Bossbar ###
function dnl:mobs/olympus/lord_of_olympus/bossbar

tag @s add dnl.init
