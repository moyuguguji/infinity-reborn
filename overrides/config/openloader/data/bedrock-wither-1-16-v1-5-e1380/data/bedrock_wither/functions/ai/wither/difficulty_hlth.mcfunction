execute store result score #TEMP1 MobAIOther run difficulty
execute if score #TEMP1 MobAIOther matches ..1 run data merge entity @s {Health:300f,Tags:["Bedrock_WitherAI","HasntPhase2","Bedrock_WitherAI_Idle"],ArmorItems:[{id:'minecraft:target',Count:1b,tag:{Target:0,Pathfindx:0,Pathfindz:0,Rotx:0,Pathfindy:0,Agro:0}},{},{},{}],ArmorDropChances:[-327.670F,0.085F,0.085F,0.085F],Attributes:[{Name:generic.max_health,Base:300},{Name:generic.follow_range,Base:0}]}

execute if score #TEMP1 MobAIOther matches 2 run data merge entity @s {Health:450f,Tags:["Bedrock_WitherAI","HasntPhase2","Bedrock_WitherAI_Idle"],ArmorItems:[{id:'minecraft:target',Count:1b,tag:{Target:0,Pathfindx:0,Pathfindz:0,Rotx:0,Pathfindy:0,Agro:0}},{},{},{}],ArmorDropChances:[-327.670F,0.085F,0.085F,0.085F],Attributes:[{Name:generic.max_health,Base:450},{Name:generic.follow_range,Base:0}]}

execute if score #TEMP1 MobAIOther matches 3.. run data merge entity @s {Health:600f,Tags:["Bedrock_WitherAI","HasntPhase2","Bedrock_WitherAI_Idle"],ArmorItems:[{id:'minecraft:target',Count:1b,tag:{Target:0,Pathfindx:0,Pathfindz:0,Rotx:0,Pathfindy:0,Agro:0}},{},{},{}],ArmorDropChances:[-327.670F,0.085F,0.085F,0.085F],Attributes:[{Name:generic.max_health,Base:600},{Name:generic.follow_range,Base:0}]}