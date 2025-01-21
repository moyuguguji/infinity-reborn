onEvent('item.modification', event => {
	event.modify("mythicmetals:metallurgium_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 7.2, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.knockback_resistance", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 2.5, "addition")
	})
	event.modify("mythicmetals:metallurgium_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 10.5, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.knockback_resistance", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 2.5, "addition")
	})
	event.modify("mythicmetals:metallurgium_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 9.3, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.knockback_resistance", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 2.5, "addition")
	})
	event.modify("mythicmetals:metallurgium_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 6, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.knockback_resistance", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 2.5, "addition")
	})
	event.modify('mythicmetals:metallurgium_helmet', item => {
		item.maxDamage = 1030
		item.fireResistant = true
	})
	event.modify('mythicmetals:metallurgium_chestplate', item => {
		item.maxDamage = 1380
		item.fireResistant = true
	})
	event.modify('mythicmetals:metallurgium_leggings', item => {
		item.maxDamage = 1170
		item.fireResistant = true
	})
	event.modify('mythicmetals:metallurgium_boots', item => {
		item.maxDamage = 920
		item.fireResistant = true
	})


	event.modify("additionaladditions:gilded_netherite_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 5.5, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 3.5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.knockback_resistance", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 0.5, "addition")
	})
	event.modify("additionaladditions:gilded_netherite_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 8.5, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 3.5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.knockback_resistance", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 0.5, "addition")
	})
	event.modify("additionaladditions:gilded_netherite_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 7.5, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 3.5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.knockback_resistance", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 0.5, "addition")
	})
	event.modify("additionaladditions:gilded_netherite_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 4.5, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 3.5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.knockback_resistance", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 0.5, "addition")
	})
	event.modify('additionaladditions:gilded_netherite_helmet', item => {
		item.maxDamage = 1000
		item.fireResistant = true
	})
	event.modify('additionaladditions:gilded_netherite_chestplate', item => {
		item.maxDamage = 1280
		item.fireResistant = true
	})
	event.modify('additionaladditions:gilded_netherite_leggings', item => {
		item.maxDamage = 1170
		item.fireResistant = true
	})
	event.modify('additionaladditions:gilded_netherite_boots', item => {
		item.maxDamage = 840
		item.fireResistant = true
	})


	event.modify("adventurez:stone_golem_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 10, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.knockback_resistance", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 1, "addition")
	})
	event.modify("adventurez:stone_golem_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 16, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.knockback_resistance", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 1, "addition")
	})
	event.modify("adventurez:stone_golem_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 14, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.knockback_resistance", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 1, "addition")
	})
	event.modify("adventurez:stone_golem_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 8, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 5, "addition")
		modification.removeAttribute("minecraft:generic.knockback_resistance", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.knockback_resistance", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 1, "addition")
	})
	event.modify('adventurez:stone_golem_helmet', item => {
		item.maxDamage = 1450
		item.fireResistant = true
	})
	event.modify('adventurez:stone_golem_chestplate', item => {
		item.maxDamage = 1880
		item.fireResistant = true
	})
	event.modify('adventurez:stone_golem_leggings', item => {
		item.maxDamage = 1720
		item.fireResistant = true
	})
	event.modify('adventurez:stone_golem_boots', item => {
		item.maxDamage = 1340
		item.fireResistant = true
	})


	event.modify("minecraft:netherite_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 5, "addition")
	})
	event.modify("minecraft:netherite_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 8, "addition")
	})
	event.modify("minecraft:netherite_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 7, "addition")
	})
	event.modify("minecraft:netherite_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 4, "addition")
	})
	event.modify('minecraft:netherite_helmet', item => {
		item.maxDamage = 950
	})
	event.modify('minecraft:netherite_chestplate', item => {
		item.maxDamage = 1200
	})
	event.modify('minecraft:netherite_leggings', item => {
		item.maxDamage = 1100
	})
	event.modify('minecraft:netherite_boots', item => {
		item.maxDamage = 800
	})


	event.modify("twilightforest:fiery_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 2.5, "addition")
	})
	event.modify("twilightforest:fiery_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 2.5, "addition")
	})
	event.modify("twilightforest:fiery_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 2.5, "addition")
	})
	event.modify("twilightforest:fiery_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 2.5, "addition")
	})
	event.modify('twilightforest:fiery_helmet', item => {
		item.maxDamage = 850
		item.fireResistant = true
	})
	event.modify('twilightforest:fiery_chestplate', item => {
		item.maxDamage = 1180
		item.fireResistant = true
	})
	event.modify('twilightforest:fiery_leggings', item => {
		item.maxDamage = 1060
		item.fireResistant = true
	})
	event.modify('twilightforest:fiery_boots', item => {
		item.maxDamage = 700
		item.fireResistant = true
	})


	event.modify("twilightforest:phantom_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 6, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 3.5, "addition")
	})
	event.modify("twilightforest:phantom_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 10, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 3.5, "addition")
	})
	event.modify('twilightforest:phantom_helmet', item => {
		item.maxDamage = 980
		item.fireResistant = true
	})
	event.modify('twilightforest:phantom_chestplate', item => {
		item.maxDamage = 1280
		item.fireResistant = true
	})


	event.modify("soulsweapons:chaos_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 8, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 5, "addition")
	})
	event.modify("soulsweapons:arkenplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 12, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 5, "addition")
	})
	event.modify('soulsweapons:chaos_helmet', item => {
		item.maxDamage = 1100
	})
	event.modify('soulsweapons:arkenplate', item => {
		item.maxDamage = 1400
	})


	event.modify("mythicmetals:stormyx_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 5, "addition")
		modification.removeAttribute("mythicmetals:magic_protection", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("mythicmetals:magic_protection", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 2.5, "addition")
	})
	event.modify("mythicmetals:stormyx_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 8, "addition")
		modification.removeAttribute("mythicmetals:magic_protection", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("mythicmetals:magic_protection", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 2.5, "addition")
	})
	event.modify("mythicmetals:stormyx_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 7, "addition")
		modification.removeAttribute("mythicmetals:magic_protection", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("mythicmetals:magic_protection", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 2.5, "addition")
	})
	event.modify("mythicmetals:stormyx_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 4, "addition")
		modification.removeAttribute("mythicmetals:magic_protection", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("mythicmetals:magic_protection", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 2.5, "addition")
	})


	event.modify("twilightforest:knightmetal_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 4, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor_toughness", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 2.5, "addition")
	})
	event.modify("twilightforest:knightmetal_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 9, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor_toughness", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 2.5, "addition")
	})
	event.modify("twilightforest:knightmetal_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 7, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor_toughness", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 2.5, "addition")
	})
	event.modify("twilightforest:knightmetal_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 4, "addition")
		modification.removeAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor_toughness", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 2.5, "addition")
	})


	event.modify("mythicmetals:palladium_helmet", modification => {
		modification.removeAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150")
		modification.addAttribute("minecraft:generic.armor", "2ad3f246-fee1-4e67-b886-69fd380bb150", "Armor modifier", 5, "addition")
	})
	event.modify("mythicmetals:palladium_chestplate", modification => {
		modification.removeAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e")
		modification.addAttribute("minecraft:generic.armor", "9f3d476d-c118-4544-8365-64846904b48e", "Armor modifier", 8, "addition")
	})
	event.modify("mythicmetals:palladium_leggings", modification => {
		modification.removeAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d")
		modification.addAttribute("minecraft:generic.armor", "d8499b04-0e66-4726-ab29-64469d734e0d", "Armor modifier", 7, "addition")
	})
	event.modify("mythicmetals:palladium_boots", modification => {
		modification.removeAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b")
		modification.addAttribute("minecraft:generic.armor", "845db27c-c624-495f-8c9f-6020a9a58b6b", "Armor modifier", 4, "addition")
	})

})