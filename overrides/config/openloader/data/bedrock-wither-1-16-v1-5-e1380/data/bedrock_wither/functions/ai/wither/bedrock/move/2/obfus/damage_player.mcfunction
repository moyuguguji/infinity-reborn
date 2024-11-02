summon slime ~ ~ ~ {NoGravity:1b,Silent:1b,Invulnerable:1b,DeathLootTable:"-",Size:1,Tags:["BasicDamageHitboxAI","TEMPdamage"],CustomName:'{"text":"Wither"}',ActiveEffects:[{Id:14b,Amplifier:255b,Duration:1999980,ShowParticles:0b}],Attributes:[{Name:generic.attack_damage,Base:15}]}
execute as @e[type=slime,tag=TEMPdamage] run function wormai:damage/basic_damage_setup
