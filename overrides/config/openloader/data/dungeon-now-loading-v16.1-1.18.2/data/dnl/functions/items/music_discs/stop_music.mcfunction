execute at @a[scores={dnl.play_record=1..}] run stopsound @a[distance=..16] record minecraft:music_disc.strad
tag @a[scores={dnl.play_record=1..}] remove played_music
scoreboard players reset @a dnl.play_record
