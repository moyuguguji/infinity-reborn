attribute @s[scores={dnl.maxHealth=0}] minecraft:generic.max_health base set 20
attribute @s[scores={dnl.maxHealth=1..3}] minecraft:generic.max_health base set 22
attribute @s[scores={dnl.maxHealth=4..8}] minecraft:generic.max_health base set 24
attribute @s[scores={dnl.maxHealth=9..15}] minecraft:generic.max_health base set 26
attribute @s[scores={dnl.maxHealth=16..24}] minecraft:generic.max_health base set 28
attribute @s[scores={dnl.maxHealth=25..35}] minecraft:generic.max_health base set 30
attribute @s[scores={dnl.maxHealth=36..48}] minecraft:generic.max_health base set 32
attribute @s[scores={dnl.maxHealth=49..63}] minecraft:generic.max_health base set 34
attribute @s[scores={dnl.maxHealth=64..80}] minecraft:generic.max_health base set 36
attribute @s[scores={dnl.maxHealth=81..99}] minecraft:generic.max_health base set 38
attribute @s[scores={dnl.maxHealth=100..}] minecraft:generic.max_health base set 40

effect give @s[scores={dnl.maxHealth=1}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=4}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=9}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=16}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=25}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=36}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=49}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=64}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=81}] minecraft:instant_health 1 100 true
effect give @s[scores={dnl.maxHealth=100}] minecraft:instant_health 1 100 true

playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=1,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=4,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=9,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=16,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=25,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=36,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=49,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=64,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=81,playerdeath=10..}] ~ ~ ~ 1 1 1
playsound minecraft:ui.toast.challenge_complete block @s[scores={dnl.maxHealth=100,playerdeath=10..}] ~ ~ ~ 1 1 1

### advancement ###
advancement grant @s[scores={dnl.maxHealth=25..}] only dnl:story/general/the_mortal_sinner
advancement grant @s[scores={dnl.maxHealth=100..}] only dnl:story/general/the_cursed_sinner
