data merge entity @s {Age:-20000}
execute at @a run data merge entity @s[distance=..5,tag=!dnl.tamed] {NoAI:0b,Sitting:0b}
execute at @s[tag=!dnl.tamed] run advancement grant @a[distance=..10,advancements={dnl:story/structures/hunters_grave/gray=false}] only dnl:story/structures/hunters_grave/gray
execute at @a run tag @s[distance=..5] add dnl.tamed
