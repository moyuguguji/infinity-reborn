execute in minecraft:overworld store success score dnl.generation_check dnl.success run locate dnl:hivenest
execute if score dnl.generation_check dnl.success matches 1 run tellraw @a {"text":"[Structure Detection was Successful] - Datapack is working as intended. You can use /locate dnl:??? to search for structures!","color":"dark_green","italic":false}
execute if score dnl.generation_check dnl.success matches 0 run tellraw @a {"text":"[Structure Detection Failed] - Structure cannot be found in the world. Datapack is not working.","color":"red","italic":false}
