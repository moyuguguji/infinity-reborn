#MUST READ: This function must execute before this entity spawns as to get the proper single tink damage.
#summon slime ~ ~ ~ {NoGravity:1b,Silent:1b,Invulnerable:1b,DeathLootTable:"-",Size:1,Tags:["BasicDamageHitboxAI","TEMPdamage"],CustomName:'{"text":"NAMESPACE"}',ActiveEffects:[{Id:14b,Amplifier:255b,Duration:1999980,ShowParticles:0b}],Attributes:[{Name:generic.attack_damage,Base:1}]}
tp @s ~ -66 ~
data merge entity @s {Health:0f,Size:0}
