#                       (    min( 20, max(defence/5, defence - damage/(2+toughness/4)))  )
# totaldamage = damage *( 1- ___________________________________________________________ ) * (1 - ResistanceLevel * 0.2) * (Enchantment Protection Factor)
#                       (                             25                                 )
# #Damage MobAIOther 0.00 (multiple of 100)
# yes, i know i don't need the hashtag... but i don't care

#                           (      min( 20.00, max(defence0.00/5, defence0.00 - damage0.00*1.00/(2.00+toughness0.00/4))) )
# totaldamage = damage0.00 *( 1.00- ____________________________________________________________________________________ ) * (1.00 - ResistanceLevel * 0.20) / 1.00.00.00
#                           (                               25                                                           )


execute store result score #poz_x1 MobAIOther run attribute @s minecraft:generic.armor get 100
execute store result score #poz_y1 MobAIOther run attribute @s minecraft:generic.armor_toughness get 100

#(defence/5) = poz_x2
scoreboard players operation #poz_x2 MobAIOther = #poz_x1 MobAIOther
scoreboard players set #poz_y2 MobAIOther 5
scoreboard players operation #poz_x2 MobAIOther /= #poz_y2 MobAIOther

#(defence - damage/(2+toughness/4)) = poz_x1
scoreboard players set #poz_y2 MobAIOther 4
scoreboard players add #poz_y1 MobAIOther 200
scoreboard players operation #poz_y1 MobAIOther /= #poz_y2 MobAIOther
scoreboard players operation #poz_y2 MobAIOther = #Damage MobAIOther
scoreboard players set #poz_z2 MobAIOther 100
scoreboard players operation #poz_y2 MobAIOther *= #poz_z2 MobAIOther
scoreboard players operation #poz_y2 MobAIOther /= #poz_y1 MobAIOther

scoreboard players operation #poz_x1 MobAIOther -= #poz_y2 MobAIOther

#max(x2, x1) = z2
execute if score #poz_x2 MobAIOther > #poz_x1 MobAIOther run scoreboard players operation #poz_z2 MobAIOther = #poz_x2 MobAIOther
execute if score #poz_x1 MobAIOther >= #poz_x2 MobAIOther run scoreboard players operation #poz_z2 MobAIOther = #poz_x1 MobAIOther

#min(20, z2) = x2
scoreboard players set #poz_y2 MobAIOther 2000
execute if score #poz_z2 MobAIOther < #poz_y2 MobAIOther run scoreboard players operation #poz_x2 MobAIOther = #poz_z2 MobAIOther
execute if score #poz_y2 MobAIOther <= #poz_z2 MobAIOther run scoreboard players operation #poz_x2 MobAIOther = #poz_y2 MobAIOther

#1-(x2/25) = y3
scoreboard players set #poz_y2 MobAIOther 25
scoreboard players operation #poz_z2 MobAIOther /= #poz_y2 MobAIOther
scoreboard players set #poz_y3 MobAIOther 100
scoreboard players operation #poz_y3 MobAIOther -= #poz_z2 MobAIOther

#(1 - Resistance * 0.2) = y2
scoreboard players reset #poz_x1 MobAIOther
execute store result score #poz_x1 MobAIOther store success score #poz_x2 MobAIOther run data get entity @s ActiveEffects[{Id:11b}].Amplifier
scoreboard players operation #poz_x1 MobAIOther += #poz_x2 MobAIOther
scoreboard players set #poz_y2 MobAIOther 20
scoreboard players operation #poz_x1 MobAIOther *= #poz_y2 MobAIOther
scoreboard players set #poz_y2 MobAIOther 100
scoreboard players operation #poz_y2 MobAIOther -= #poz_x1 MobAIOther

# Damage * y3 * y2 * x3
scoreboard players set #poz_x1 MobAIOther 100
scoreboard players operation #Damage MobAIOther *= #poz_y3 MobAIOther
scoreboard players operation #Damage MobAIOther /= #poz_x1 MobAIOther
scoreboard players operation #Damage MobAIOther *= #poz_y2 MobAIOther
scoreboard players operation #Damage MobAIOther /= #poz_x1 MobAIOther
scoreboard players operation #Damage MobAIOther *= #poz_x3 MobAIOther
scoreboard players operation #Damage MobAIOther /= #poz_x1 MobAIOther
