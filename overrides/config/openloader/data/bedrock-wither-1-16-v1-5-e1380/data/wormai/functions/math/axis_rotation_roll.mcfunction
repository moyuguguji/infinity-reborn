#don't ask me whats going on here... idk, i havent learned matricies yet in precal
#equation
# [x2]                             [e_x*e_x  e_x*e_y  e_x*e_z]              [1 0 0]
#([y2] - offset) =[(1-Cos(MATHin)) [e_y*e_x  e_y*e_y  e_y*e_z] + Cos(MATHin)[0 1 0]
# [z2]                             [e_z*e_x  e_z*e_y  e_z*e_z]              [0 0 1]
#              [ 0   -e_z   e_y]     [x1]
# + Sin(MATHin)[e_z    0    e_x]] * ([y1] - offset)
#              [-e_y  e_x    0 ]     [z1]

#scoreboard players set #MATHin MobAIOther 90
scoreboard players operation in math = #MATHin MobAIOther
function math:trig/cos
scoreboard players set #TEMP1 MobAIOther 1000
scoreboard players operation #TEMP1 MobAIOther -= out math

function math:trig/cos
#scoreboard players set #TEMPC WormC1 1
scoreboard players operation #TEMP2 MobAIOther = out math
#scoreboard players operation #TEMP2 MobAIOther *= #TEMPC WormC1

function math:trig/sin
scoreboard players operation #TEMP3 MobAIOther = out math

scoreboard players operation #poz_x1 MobAIOther = #poz_x2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther = #poz_x2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther = #poz_x2 MobAIOther
scoreboard players operation #poz_x1 MobAIOther *= #poz_x2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther *= #poz_y2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther *= #poz_z2 MobAIOther

scoreboard players operation #poz_x1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_y1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_z1 MobAIOther *= #TEMP1 MobAIOther

scoreboard players operation #poz_x1 MobAIOther /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther /= #1000 constant
scoreboard players operation #poz_x1 MobAIOther /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther /= #1000 constant

scoreboard players operation #poz_x1 MobAIOther += #TEMP2 MobAIOther

scoreboard players operation #TEMPC WormC1 = #poz_z2 MobAIOther
scoreboard players operation #TEMPC WormC1 *= #TEMP3 MobAIOther
scoreboard players operation #TEMPC WormC1 /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther -= #TEMPC WormC1
scoreboard players operation #TEMPC WormC1 = #poz_y2 MobAIOther
scoreboard players operation #TEMPC WormC1 *= #TEMP3 MobAIOther
scoreboard players operation #TEMPC WormC1 /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther += #TEMPC WormC1





scoreboard players operation #poz_x3 MobAIOther = #poz_x1 MobAIOther
scoreboard players operation #poz_y3 MobAIOther = #poz_y1 MobAIOther
scoreboard players operation #poz_z3 MobAIOther = #poz_z1 MobAIOther
#tellraw @a [{"text":"x(","color":"red"},{"score":{"name":"#poz_x1","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y1","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z1","objective":"MobAIOther"}},{"text":")"}]

scoreboard players operation #poz_x1 MobAIOther = #poz_y2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther = #poz_y2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther = #poz_y2 MobAIOther
scoreboard players operation #poz_x1 MobAIOther *= #poz_x2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther *= #poz_y2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther *= #poz_z2 MobAIOther
scoreboard players operation #poz_x1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_y1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_z1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_x1 MobAIOther /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther /= #1000 constant
scoreboard players operation #poz_x1 MobAIOther /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther += #TEMP2 MobAIOther
scoreboard players operation #TEMPC WormC1 = #poz_z2 MobAIOther
scoreboard players operation #TEMPC WormC1 *= #TEMP3 MobAIOther
scoreboard players operation #TEMPC WormC1 /= #1000 constant
scoreboard players operation #poz_x1 MobAIOther += #TEMPC WormC1
scoreboard players operation #TEMPC WormC1 = #poz_x2 MobAIOther
scoreboard players operation #TEMPC WormC1 *= #TEMP3 MobAIOther
scoreboard players operation #TEMPC WormC1 /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther += #TEMPC WormC1

scoreboard players operation #poz_x4 MobAIOther = #poz_x1 MobAIOther
scoreboard players operation #poz_y4 MobAIOther = #poz_y1 MobAIOther
scoreboard players operation #poz_z4 MobAIOther = #poz_z1 MobAIOther
#tellraw @a [{"text":"y(","color":"red"},{"score":{"name":"#poz_x1","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y1","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z1","objective":"MobAIOther"}},{"text":")"}]

scoreboard players operation #poz_x1 MobAIOther = #poz_z2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther = #poz_z2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther = #poz_z2 MobAIOther
scoreboard players operation #poz_x1 MobAIOther *= #poz_x2 MobAIOther
scoreboard players operation #poz_y1 MobAIOther *= #poz_y2 MobAIOther
scoreboard players operation #poz_z1 MobAIOther *= #poz_z2 MobAIOther
scoreboard players operation #poz_x1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_y1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_z1 MobAIOther *= #TEMP1 MobAIOther
scoreboard players operation #poz_x1 MobAIOther /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther /= #1000 constant
scoreboard players operation #poz_x1 MobAIOther /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther /= #1000 constant
scoreboard players operation #poz_z1 MobAIOther += #TEMP2 MobAIOther
scoreboard players operation #TEMPC WormC1 = #poz_y2 MobAIOther
scoreboard players operation #TEMPC WormC1 *= #TEMP3 MobAIOther
scoreboard players operation #TEMPC WormC1 /= #1000 constant
scoreboard players operation #poz_x1 MobAIOther -= #TEMPC WormC1
scoreboard players operation #TEMPC WormC1 = #poz_x2 MobAIOther
scoreboard players operation #TEMPC WormC1 *= #TEMP3 MobAIOther
scoreboard players operation #TEMPC WormC1 /= #1000 constant
scoreboard players operation #poz_y1 MobAIOther += #TEMPC WormC1

scoreboard players operation #poz_x5 MobAIOther = #poz_x1 MobAIOther
scoreboard players operation #poz_y5 MobAIOther = #poz_y1 MobAIOther
scoreboard players operation #poz_z5 MobAIOther = #poz_z1 MobAIOther
#tellraw @a [{"text":"z(","color":"red"},{"score":{"name":"#poz_x1","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_y1","objective":"MobAIOther"}},{"text":","},{"score":{"name":"#poz_z1","objective":"MobAIOther"}},{"text":")"}]
