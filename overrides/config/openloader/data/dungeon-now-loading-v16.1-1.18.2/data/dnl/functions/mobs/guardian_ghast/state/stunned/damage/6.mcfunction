### Arrow Stun Count ###
scoreboard players add @e[type=minecraft:ghast,tag=dnl.guardian_ghast,tag=dnl.main,tag=dnl.awoken,nbt={HurtTime:10s}] dnl.variable 5

### Revoke Advancement ###
advancement revoke @a only dnl:mobs/guardian_ghast/arrow/tipped
