### Tag Core for decreasing health ###
tag @e[tag=dnl.hivenest,tag=dnl.bee_swarm,tag=dnl.core,distance=..50,limit=1,sort=nearest] add dnl.healthdown

### Summon Angry Bees ###
summon bee ~ ~ ~ {PersistenceRequired:1b,Tags:["dnl.mob","dnl.hivenest","dnl.angry_bee","dnl.boss"]}
summon bee ~ ~ ~ {PersistenceRequired:1b,Tags:["dnl.mob","dnl.hivenest","dnl.angry_bee","dnl.boss"]}
summon bee ~ ~ ~ {PersistenceRequired:1b,Tags:["dnl.mob","dnl.hivenest","dnl.angry_bee","dnl.boss"]}

### Disable the destroyed beenest ###
tag @s add dnl.destroyed
