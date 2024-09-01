### Data Change ### (This function exists due to jigsaw error on skeleton, where holding item is always converted to normal bow without nbt.)
data modify entity @s HandItems[0] set from storage dnl:lord_of_olympus.sword
data modify entity @s HandItems[1] set from storage dnl:lord_of_olympus.shield

tag @s add dnl.init
