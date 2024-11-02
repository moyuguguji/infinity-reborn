scoreboard players add @s MobAITick 1
execute unless entity @s[scores={MobAIOther=516475339}] run function astral_infection:ai/util/animation/obfus/reset
execute as @s[scores={MobAITick=1}] run function astral_infection:ai/util/animation/obfus/classic_death_setup
execute as @s[scores={MobAITick=1..10}] run function astral_infection:ai/util/animation/obfus/classic_death1_5
kill @s[scores={MobAITick=21..}]
