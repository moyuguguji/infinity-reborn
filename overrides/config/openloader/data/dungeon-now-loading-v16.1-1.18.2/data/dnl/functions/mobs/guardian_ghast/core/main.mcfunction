### Inactive ###
execute as @s[tag=!dnl.broken_seal] run function dnl:mobs/guardian_ghast/core/passive/unbroken

### Run init function ###
execute as @s[tag=!dnl.init.core] run function dnl:mobs/guardian_ghast/core/init

### Musics ###
execute as @s[tag=dnl.music.temple_of_tears.boss] run function dnl:mobs/guardian_ghast/core/music

### Fireballs ###
execute as @e[type=minecraft:fireball] at @s in minecraft:overworld run function dnl:mobs/guardian_ghast/optimization/fireball

### Bossbar ###
execute store result bossbar dnl:guardian_ghast value run scoreboard players get @s dnl.health
execute at @s run bossbar set dnl:guardian_ghast players @a[distance=..80]

### Phase 1 ###
# - stun all the guardian ghasts. There is 12 bossbars but they will decrease by 1
execute store result score @s[scores={dnl.phase=1}] dnl.variable run execute if entity @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,tag=dnl.stunned]
execute as @s[scores={dnl.phase=1}] run function dnl:mobs/guardian_ghast/core/phase/effect/1

### Phase Transition ###
execute as @s[scores={dnl.phase=1,dnl.variable=3..}] run function dnl:mobs/guardian_ghast/core/phase/transition/2

### Phase 2 ###
# - the 12 pillar of relic appears and the player must destroy the pillar in order to completely destroy the ghasts.

### Phase Transition ###
execute as @s[scores={dnl.phase=2,dnl.variable=3}] run function dnl:mobs/guardian_ghast/core/phase/transition/3

### Phase 3 ###
# - After 3 pillar of relics are destroyed, one of the guardian ghast starts to attack the player.
execute as @s[scores={dnl.phase=3}] run function dnl:mobs/guardian_ghast/core/phase/effect/3

### Phase Transition ###
execute as @s[scores={dnl.phase=3,dnl.variable=9}] run function dnl:mobs/guardian_ghast/core/phase/transition/4

### Phase 4 ###
# - After 7 pillar of relics are destroyed, two ghasts will attack the player at once.
execute as @s[scores={dnl.phase=4}] run function dnl:mobs/guardian_ghast/core/phase/effect/4
execute store result score @s[scores={dnl.phase=4}] dnl.subvariable run execute if entity @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,tag=dnl.stunned]

### Phase Transition ###
execute as @s[scores={dnl.phase=4,dnl.variable=12..}] run function dnl:mobs/guardian_ghast/core/phase/transition/5

### Phase 5 ###
# - When all the pillars are destroyed and 3 ghasts are stunned, the ghasts will be re-awakened. Only 1 ghast will attack the player.
execute as @s[scores={dnl.phase=5}] run function dnl:mobs/guardian_ghast/core/phase/effect/5

### Phase Transition ###
execute as @s[scores={dnl.phase=5,dnl.health=..6}] run function dnl:mobs/guardian_ghast/core/phase/transition/6

### Phase 6 ###
# - Two ghasts will attack the player at once.
execute as @s[scores={dnl.phase=6}] run function dnl:mobs/guardian_ghast/core/phase/effect/6

### Phase Transition ###
execute as @s[scores={dnl.phase=6,dnl.health=..3}] run function dnl:mobs/guardian_ghast/core/phase/transition/7

### Phase 7 ###
execute as @s[scores={dnl.phase=7}] run function dnl:mobs/guardian_ghast/core/phase/effect/7

### Phase Transition ###
execute as @s[scores={dnl.phase=7..,dnl.health=..0}] run function dnl:mobs/guardian_ghast/core/phase/transition/end
