### Scoreboards ###
# variables
scoreboard objectives add dnl.variable dummy
scoreboard objectives add dnl.subvariable dummy
scoreboard objectives add dnl.phase dummy
scoreboard objectives add dnl.health dummy

# dnl.constants
scoreboard objectives add dnl.constant dummy

# timers
scoreboard objectives add dnl.timer dummy
scoreboard objectives add dnl.subtimer dummy
scoreboard objectives add dnl.clock dummy
scoreboard objectives add dnl.subclock dummy
scoreboard objectives add dnl.period dummy

# crafting
scoreboard objectives add dnl.craftpoint dummy
scoreboard objectives add dnl.option dummy
scoreboard objectives add dnl.success dummy

# music
scoreboard objectives add dnl.musictimer dummy

# Motion Projectiles
scoreboard objectives add dnl.mx1 dummy
scoreboard objectives add dnl.my1 dummy
scoreboard objectives add dnl.mz1 dummy

scoreboard objectives add dnl.mx2 dummy
scoreboard objectives add dnl.my2 dummy
scoreboard objectives add dnl.mz2 dummy

# Position
scoreboard objectives add dnl.posx dummy
scoreboard objectives add dnl.posy dummy
scoreboard objectives add dnl.posz dummy


# stats
scoreboard objectives add dnl.arrowshot minecraft.used:minecraft.bow
scoreboard objectives add dnl.playerdeath minecraft.custom:minecraft.time_since_death
scoreboard objectives add dnl.maxHealth dummy
scoreboard objectives add dnl.rodclick minecraft.used:minecraft.carrot_on_a_stick
scoreboard objectives add dnl.play_record minecraft.custom:minecraft.play_record
scoreboard objectives add dnl.arrowdamage dummy

# crafter
scoreboard objectives add dnl.crafter dummy

### Constants ###
scoreboard players set #100 dnl.constant 100

### Teams ###
team add dnl.team

### Init Functions ###
schedule function dnl:music/start 1d
function dnl:storage

### Death Penalty Mode ###
tag @a add dnl.mode.death_penalty

### Advancements ###
advancement grant @a only dnl:story/general/new_start

### Installation Message ###
schedule function dnl:message 1s

### Check Structure Spawning ###
execute unless score dnl.generation_check dnl.success matches 1 run schedule function dnl:generation_check 2s

tag @s add dnl.installed
