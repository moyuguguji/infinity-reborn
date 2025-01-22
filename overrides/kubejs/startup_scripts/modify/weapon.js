onEvent('item.modification', event => {

	event.modify("minecraft:netherite_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 9, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.0, "addition")
	})
	event.modify("additionaladditions:gilded_netherite_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 11, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -1.9, "addition")
	})
	event.modify("dragonloot:dragon_trident", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 20, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.7, "addition")
	})
	event.modify("gateofbabylon:netherite_katana", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 10, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.1, "addition")
	})
	event.modify("gateofbabylon:netherite_waraxe", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 17, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -3.3, "addition")
	})
	event.modify("gateofbabylon:netherite_spear", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 12, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.4, "addition")
	})
	event.modify("gateofbabylon:netherite_broadsword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 19, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -3.0, "addition")
	})
	event.modify("gateofbabylon:netherite_haladie", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 8.5, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.7, "addition")
	})
	event.modify("twilightforest:block_and_chain", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 12.5, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.8, "addition")
	})
	event.modify("mythicmetals:metallurgium_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 13.5, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -1.8, "addition")
	})
	event.modify("twilightforest:diamond_minotaur_axe", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 14, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.8, "addition")
	})
	event.modify("twilightforest:giant_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 18, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -3.3, "addition")
	})
	event.modify("twilightforest:knightmetal_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 9, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.2, "addition")
	})
	event.modify("twilightforest:fiery_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 11, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.0, "addition")
	})
	event.modify("twilightforest:knightmetal_axe", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 12.5, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.9, "addition")
	})
	event.modify("twilightforest:ice_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 9.5, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.0, "addition")
	})
	event.modify("mythicmetals:hallowed_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 9, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.2, "addition")
	})
	event.modify("mythicmetals:white_aegis_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 10, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.1, "addition")
	})
	event.modify("mythicmetals:red_aegis_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 14.5, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.7, "addition")
	})
	event.modify("mythicmetals:palladium_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 10, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.1, "addition")
	})
	event.modify("mythicmetals:stormyx_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 10.5, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.1, "addition")
	})
	event.modify("piercingpaxels:netherite_paxel", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 13, "addition")
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -2.2, "addition")
	})

	event.modify("dragonloot:dragon_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 7.5, "addition")
	})
	event.modify("mcdw:sword_obsidian_claymore", modification => {
		modification.removeAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3")
		modification.addAttribute("minecraft:generic.attack_speed", "fa233e1c-4180-4865-b01b-bcce9785aca3", "Weapon modifier", -3.2, "addition")
	})
	event.modify("gobber2:gobber2_sword", modification => {
		modification.removeAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf")
		modification.addAttribute("minecraft:generic.attack_damage", "cb3f55d3-645c-4f38-a497-9c13a33db5cf", "Weapon modifier", 8, "addition")
	})
	event.modify('botania:terra_sword', modification => {
		modification.setAttackDamage(25)
		modification.setAttackSpeed(100)
	})

	event.modify('botania:terra_sword', item => {
		item.maxDamage = 50000
		item.fireResistant = true
	})
	event.modify('gobber2:gobber2_special_item', item => {
		item.setmaxStackSize(8)
		item.fireResistant = true
	})

})