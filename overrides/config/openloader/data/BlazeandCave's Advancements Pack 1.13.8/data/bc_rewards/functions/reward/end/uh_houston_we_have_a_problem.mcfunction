give @s minecraft:firework_rocket 32
tellraw @s {"color":"green","text":" +32 ","extra":[{"translate":"item.minecraft.firework_rocket"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.feather_falling"},{"text":" "},{"translate":"enchantment.level.4"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
give @s minecraft:elytra{Enchantments:[{id:"minecraft:unbreaking",lvl:3}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.unbreaking"},{"text":" "},{"translate":"enchantment.level.3"},{"text":" "},{"translate":"item.minecraft.elytra"}]}
