#built using mc-build (https://github.com/mc-build/mc-build)

scoreboard players add #dnl.server dnl.count 1
execute if score #dnl.server dnl.count matches 1 run function dnl.lib:__generated__/execute/10
execute if score #dnl.server dnl.count matches 2.. run function dnl.lib:__generated__/execute/11