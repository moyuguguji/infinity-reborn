#built using mc-build (https://github.com/mc-build/mc-build)


execute if entity @s[nbt={Item:{id:"minecraft:scute",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.scute:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_scute

execute if entity @s[nbt={Item:{id:"minecraft:coal",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.coal:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_coal

execute if entity @s[nbt={Item:{id:"minecraft:charcoal",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.charcoal:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_charcoal

execute if entity @s[nbt={Item:{id:"minecraft:diamond",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.diamond:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_diamond

execute if entity @s[nbt={Item:{id:"minecraft:emerald",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.emerald:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_emerald

execute if entity @s[nbt={Item:{id:"minecraft:lapis_lazuli",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.lapis_lazuli:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_lapis_lazuli

execute if entity @s[nbt={Item:{id:"minecraft:quartz",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.quartz:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_quartz

execute if entity @s[nbt={Item:{id:"minecraft:amethyst_shard",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.amethyst_shard:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_amethyst_shard

execute if entity @s[nbt={Item:{id:"minecraft:raw_iron",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.raw_iron:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_raw_iron

execute if entity @s[nbt={Item:{id:"minecraft:iron_ingot",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.iron_ingot:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_iron_ingot

execute if entity @s[nbt={Item:{id:"minecraft:raw_copper",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.raw_copper:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_raw_copper

execute if entity @s[nbt={Item:{id:"minecraft:copper_ingot",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.copper_ingot:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_copper_ingot

execute if entity @s[nbt={Item:{id:"minecraft:raw_gold",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.raw_gold:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_raw_gold

execute if entity @s[nbt={Item:{id:"minecraft:gold_ingot",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.gold_ingot:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_gold_ingot

execute if entity @s[nbt={Item:{id:"minecraft:netherite_ingot",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.netherite_ingot:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_netherite_ingot

execute if entity @s[nbt={Item:{id:"minecraft:netherite_scrap",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.netherite_scrap:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_netherite_scrap

execute if entity @s[nbt={Item:{id:"minecraft:stick",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.stick:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_stick

execute if entity @s[nbt={Item:{id:"minecraft:string",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.string:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_string

execute if entity @s[nbt={Item:{id:"minecraft:feather",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.feather:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_feather

execute if entity @s[nbt={Item:{id:"minecraft:gunpowder",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.gunpowder:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_gunpowder

execute if entity @s[nbt={Item:{id:"minecraft:flint",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.flint:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_flint

execute if entity @s[nbt={Item:{id:"minecraft:leather",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.leather:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_leather

execute if entity @s[nbt={Item:{id:"minecraft:brick",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.brick:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_brick

execute if entity @s[nbt={Item:{id:"minecraft:clay_ball",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.clay_ball:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_clay_ball

execute if entity @s[nbt={Item:{id:"minecraft:paper",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.paper:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_paper

execute if entity @s[nbt={Item:{id:"minecraft:book",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.book:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_book

execute if entity @s[nbt={Item:{id:"minecraft:slime_ball",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.slime_ball:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_slime_ball

execute if entity @s[nbt={Item:{id:"minecraft:glowstone_dust",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.glowstone_dust:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_glowstone_dust

execute if entity @s[nbt={Item:{id:"minecraft:inc_sac",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.inc_sac:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_inc_sac

execute if entity @s[nbt={Item:{id:"minecraft:glow_ink_sac",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.glow_ink_sac:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_glow_ink_sac

execute if entity @s[nbt={Item:{id:"minecraft:bone",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.bone:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_bone

execute if entity @s[nbt={Item:{id:"minecraft:ender_pearl",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.ender_pearl:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_ender_pearl

execute if entity @s[nbt={Item:{id:"minecraft:blaze_rod",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.blaze_rod:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_blaze_rod

execute if entity @s[nbt={Item:{id:"minecraft:prismarine_shard",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.prismarine_shard:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_prismarine_shard

execute if entity @s[nbt={Item:{id:"minecraft:prismarine_crystals",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.prismarine_crystals:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_prismarine_crystals

execute if entity @s[nbt={Item:{id:"minecraft:rabbit_hide",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.rabbit_hide:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_rabbit_hide

execute if entity @s[nbt={Item:{id:"minecraft:iron_nugget",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.iron_nugget:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_iron_nugget

execute if entity @s[nbt={Item:{id:"minecraft:nautilus_shell",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.nautilus_shell:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_nautilus_shell

execute if entity @s[nbt={Item:{id:"minecraft:heart_of_the_sea",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.heart_of_the_sea:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_heart_of_the_sea

execute if entity @s[nbt={Item:{id:"minecraft:honeycomb",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.honeycomb:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_honeycomb

execute if entity @s[nbt={Item:{id:"minecraft:oak_sapling",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.oak_sapling:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_oak_sapling

execute if entity @s[nbt={Item:{id:"minecraft:spruce_sapling",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.spruce_sapling:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_spruce_sapling

execute if entity @s[nbt={Item:{id:"minecraft:birch_sapling",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.birch_sapling:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_birch_sapling

execute if entity @s[nbt={Item:{id:"minecraft:jungle_sapling",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.jungle_sapling:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_jungle_sapling

execute if entity @s[nbt={Item:{id:"minecraft:acacia_sapling",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.acacia_sapling:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_acacia_sapling

execute if entity @s[nbt={Item:{id:"minecraft:dark_oak_sapling",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.dark_oak_sapling:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_dark_oak_sapling

execute if entity @s[nbt={Item:{id:"minecraft:wooden_sword",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.wooden_sword:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_wooden_sword

execute if entity @s[nbt={Item:{id:"minecraft:stone_sword",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.stone_sword:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_stone_sword

execute if entity @s[nbt={Item:{id:"minecraft:golden_sword",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.golden_sword:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_golden_sword

execute if entity @s[nbt={Item:{id:"minecraft:iron_sword",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.iron_sword:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_iron_sword

execute if entity @s[nbt={Item:{id:"minecraft:diamond_sword",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.diamond_sword:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_diamond_sword

execute if entity @s[nbt={Item:{id:"minecraft:netherite_sword",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.netherite_sword:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_netherite_sword

execute if entity @s[nbt={Item:{id:"minecraft:bow",Count:1b}}] align xyz positioned ~-1 ~ ~-1 as @e[type=minecraft:item_frame,tag=!dnl.used,dx=2,dy=2,dz=2,nbt={Item:{tag:{dnl.material:1b,dnl.bow:1b}}},sort=random,limit=1] at @s run function dnl.lib:monolith/used

function dnl.lib:monolith/give/material_bow