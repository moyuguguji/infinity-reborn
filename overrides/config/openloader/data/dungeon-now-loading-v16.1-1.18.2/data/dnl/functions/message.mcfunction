### installation message ###
tellraw @a[tag=!dnl.intro_message] {"text":"","bold":true}
tellraw @a[tag=!dnl.intro_message] [{"text":"\"Dungeon Now Loading 16.1% version 1.18.2 - Castle Update!\"","color":"gold"},{"translate":" is installed and ready to play!","color":"white"}]
tellraw @a[tag=!dnl.intro_message] {"text":"","bold":true}

tellraw @a[tag=!dnl.intro_message] {"text":"Click Here to Join Our Discord Server!","color":"blue","italic":false,"hoverEvent":{"action":"show_text","contents":[{"text":"Click!","color":"yellow","italic":false}]},"clickEvent":{"action":"open_url","value":"https://discord.gg/nMGB6a5RVE"}}
tellraw @a[tag=!dnl.intro_message] {"text":"","bold":true}

tellraw @a[tag=!dnl.intro_message] {"text":"Click Here to Visit our Wikipedia!","color":"dark_aqua","italic":false,"hoverEvent":{"action":"show_text","contents":[{"text":"Click!","color":"yellow","italic":false}]},"clickEvent":{"action":"open_url","value":"https://dungeon-now-loading.fandom.com/wiki/"}}
tellraw @a[tag=!dnl.intro_message] {"text":"","bold":true}

tellraw @a[tag=!dnl.intro_message] {"text":"[For Servers] /function dnl.lib:server","color":"dark_green"}
tellraw @a[tag=!dnl.intro_message] {"text":"If you are using this datapack in a server, you can turn on Server Mode by using the command to fix bugs caused by the server.","color":"dark_green"}
tellraw @a[tag=!dnl.intro_message] {"text":"","bold":true}
tag @a add dnl.intro_message
