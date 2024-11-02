#清除玩家的床和重生锚
execute as @a[distance=..128] run function dut:clear_bomb
#清理水源
execute at @s run fill ~2 ~2 ~2 ~-2 ~-2 ~-2 air replace water
execute at @s run fill ~2 ~2 ~2 ~-2 ~-2 ~-2 air replace lava
#行为
execute store result score @s dut_phase run data get entity @s DragonPhase
#血量
execute store result score @s dut_hp run data get entity @s Health
execute store result score @s dut_count run execute if entity @a[distance=..128]
execute as @s[scores={dut_count=0}] at @s run function dut:enderdragon/setup
#阶段
scoreboard players operation @s dut_stage = @s dut_maxhp
scoreboard players operation @s dut_stage -= @s dut_hp
scoreboard players set @s dut_count 100
scoreboard players operation @s dut_stage /= @s dut_count
#非持续型技能
scoreboard players add @s dut_time 5
scoreboard players operation @s dut_time += @s dut_stage
execute as @s[scores={dut_time=1000..}] at @s run function dut:enderdragon/skill
scoreboard players set @s[scores={dut_time=1000..}] dut_time 0
#
execute at @e[tag=dut_phantom] run particle soul_fire_flame ~ ~ ~ 0 0 0 0 1 force
execute at @e[tag=dut_shulker] run particle soul_fire_flame ~ ~0.5 ~ 0.5 0.5 0.5 0 1 force

#
execute as @s[scores={dut_delay=1..}] run function dut:enderdragon/dragon_charge/main
#技能-唤魔尖刺
execute as @s[scores={dut_phase=2..4}] at @s run function dut:enderdragon/evoker_fang/set_fang
execute as @s[scores={dut_phase=8}] at @s run function dut:enderdragon/evoker_fang/set_fang
#技能-潜影弹
execute as @s[scores={dut_phase=1}] run scoreboard players add @s dut_bullet 1
execute as @s[scores={dut_phase=4}] run scoreboard players add @s dut_bullet 1
execute as @s[scores={dut_phase=0}] run scoreboard players reset @s dut_bullet
execute store result score @s dut_count run execute if entity @a[distance=..128]
scoreboard players set @s dut_count1 1
scoreboard players operation @s dut_count += @s dut_stage
scoreboard players operation @s dut_count *= @s dut_count1
execute if score @s dut_bullet <= @s dut_count run summon shulker_bullet ^1.5 ^ ^ {Tags:["dut_bydragon"],Steps:6}
execute if score @s dut_bullet <= @s dut_count run summon shulker_bullet ^-1.5 ^ ^ {Tags:["dut_bydragon"],Steps:6}
execute as @e[tag=dut_bydragon,type=shulker_bullet] at @s run data modify entity @s Target set from entity @p[gamemode=!creative,gamemode=!spectator] UUID
scoreboard players add @e[tag=dut_bydragon,type=shulker_bullet] dut_time 1
kill @e[tag=dut_bydragon,type=shulker_bullet,scores={dut_time=300..}]
#盘旋0
execute as @s[scores={dut_phase=0}] run particle end_rod ^4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
execute as @s[scores={dut_phase=0}] run particle end_rod ^-4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
#冲刺8
scoreboard players set @s[scores={dut_phase=8,dut_stage=3..,dut_delay=..0}] dut_delay 20
execute as @s[scores={dut_phase=8}] run particle end_rod ^4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
execute as @s[scores={dut_phase=8}] run particle end_rod ^-4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
#火球1
scoreboard players set @s[scores={dut_phase=1,dut_delay=..0}] dut_delay 20
execute as @s[scores={dut_phase=1}] run particle end_rod ^4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
execute as @s[scores={dut_phase=1}] run particle end_rod ^-4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
#前往传送门2
execute as @s[scores={dut_phase=2}] run particle end_rod ^4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
execute as @s[scores={dut_phase=2}] run particle end_rod ^-4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
#停在上方3.5.6.7
#起飞4
execute as @s[scores={dut_phase=4}] run particle end_rod ^4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
execute as @s[scores={dut_phase=4}] run particle end_rod ^-4.4 ^2 ^1 0.05 0.05 0.05 0.05 1 force
#
