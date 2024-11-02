#don't ask me whats going on here... idk, i havent learned matricies yet in precal
#equation

scoreboard players operation in math = #MATHin MobAIOther
function math:trig/cos
scoreboard players operation #TEMP1 MobAIOther = out math

scoreboard players operation in math = #poz_x2 MobAIOther
function math:trig/cos
scoreboard players operation #TEMP2 MobAIOther = out math

scoreboard players operation in math = #poz_y2 MobAIOther
function math:trig/cos
scoreboard players operation #TEMP3 MobAIOther = out math

scoreboard players operation in math = #MATHin MobAIOther
function math:trig/sin
scoreboard players operation #poz_z1 MobAIOther = out math

scoreboard players operation in math = #poz_x2 MobAIOther
function math:trig/sin
scoreboard players operation #poz_y1 MobAIOther = out math

scoreboard players operation in math = #poz_y2 MobAIOther
function math:trig/sin
scoreboard players operation #poz_x1 MobAIOther = out math


scoreboard players set #poz_x3 MobAIOther 0
scoreboard players operation #poz_x3 MobAIOther = #poz_z1 MobAIOther
scoreboard players operation #poz_x3 MobAIOther *= #poz_x1 MobAIOther
scoreboard players operation #poz_x3 MobAIOther *= #poz_y1 MobAIOther
scoreboard players operation #poz_x3 MobAIOther /= #1000 constant
scoreboard players operation #poz_x3 MobAIOther /= #1000 constant
scoreboard players operation #poz_z2 MobAIOther = #TEMP1 MobAIOther
scoreboard players operation #poz_z2 MobAIOther *= #TEMP2 MobAIOther
scoreboard players operation #poz_z2 MobAIOther /= #1000 constant
scoreboard players operation #poz_x3 MobAIOther += #poz_z2 MobAIOther

scoreboard players set #poz_y3 MobAIOther 0
scoreboard players operation #poz_y3 MobAIOther -= #TEMP1 MobAIOther
scoreboard players operation #poz_y3 MobAIOther *= #poz_x1 MobAIOther
scoreboard players operation #poz_y3 MobAIOther *= #poz_y1 MobAIOther
scoreboard players operation #poz_y3 MobAIOther /= #1000 constant
scoreboard players operation #poz_y3 MobAIOther /= #1000 constant
scoreboard players operation #poz_z2 MobAIOther = #poz_z1 MobAIOther
scoreboard players operation #poz_z2 MobAIOther *= #TEMP2 MobAIOther
scoreboard players operation #poz_z2 MobAIOther /= #1000 constant
scoreboard players operation #poz_y3 MobAIOther -= #poz_z2 MobAIOther

scoreboard players set #poz_z3 MobAIOther 0
scoreboard players operation #poz_z3 MobAIOther -= #TEMP3 MobAIOther
scoreboard players operation #poz_z3 MobAIOther *= #poz_y1 MobAIOther
scoreboard players operation #poz_z3 MobAIOther /= #1000 constant


scoreboard players operation #poz_x4 MobAIOther = #poz_z1 MobAIOther
scoreboard players operation #poz_x4 MobAIOther *= #TEMP3 MobAIOther
scoreboard players operation #poz_x4 MobAIOther /= #1000 constant

scoreboard players operation #poz_y4 MobAIOther = #TEMP1 MobAIOther
scoreboard players operation #poz_y4 MobAIOther *= #TEMP3 MobAIOther
scoreboard players operation #poz_y4 MobAIOther /= #1000 constant

scoreboard players set #poz_z4 MobAIOther 0
scoreboard players operation #poz_z4 MobAIOther -= #poz_x1 MobAIOther


scoreboard players operation #poz_x5 MobAIOther = #poz_z1 MobAIOther
scoreboard players operation #poz_x5 MobAIOther *= #poz_x1 MobAIOther
scoreboard players operation #poz_x5 MobAIOther *= #TEMP2 MobAIOther
scoreboard players operation #poz_x5 MobAIOther /= #1000 constant
scoreboard players operation #poz_x5 MobAIOther /= #1000 constant
scoreboard players operation #poz_z2 MobAIOther = #TEMP1 MobAIOther
scoreboard players operation #poz_z2 MobAIOther *= #poz_y1 MobAIOther
scoreboard players operation #poz_z2 MobAIOther /= #1000 constant
scoreboard players operation #poz_x5 MobAIOther += #poz_z2 MobAIOther

scoreboard players operation #poz_y5 MobAIOther = #TEMP1 MobAIOther
scoreboard players operation #poz_y5 MobAIOther *= #poz_x1 MobAIOther
scoreboard players operation #poz_y5 MobAIOther *= #TEMP2 MobAIOther
scoreboard players operation #poz_y5 MobAIOther /= #1000 constant
scoreboard players operation #poz_y5 MobAIOther /= #1000 constant
scoreboard players operation #poz_z2 MobAIOther = #poz_z1 MobAIOther
scoreboard players operation #poz_z2 MobAIOther *= #poz_y1 MobAIOther
scoreboard players operation #poz_z2 MobAIOther /= #1000 constant
scoreboard players operation #poz_y5 MobAIOther -= #poz_z2 MobAIOther

scoreboard players operation #poz_z5 MobAIOther = #TEMP3 MobAIOther
scoreboard players operation #poz_z5 MobAIOther *= #TEMP2 MobAIOther
scoreboard players operation #poz_z5 MobAIOther /= #1000 constant

#tellraw @a [{"text":"1x(","color":"red"},{"score":{"name":"#poz_x3","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y3","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z3","objective":"MobAIOther"}},{"text":")"}]
#tellraw @a [{"text":"2x(","color":"red"},{"score":{"name":"#poz_x4","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y4","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z4","objective":"MobAIOther"}},{"text":")"}]
#tellraw @a [{"text":"3x(","color":"red"},{"score":{"name":"#poz_x5","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y5","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z5","objective":"MobAIOther"}},{"text":")"}]
