onEvent('item.tags', event => {
	event.add('tiered:multi_tool',
		['piercingpaxels:wooden_paxel', 'piercingpaxels:stone_paxel', 'piercingpaxels:golden_paxel', 'piercingpaxels:iron_paxel',
			'piercingpaxels:diamond_paxel', 'piercingpaxels:netherite_paxel', 'spectrum:multitool'
		])

	//武器
	event.add('tier:1weapon',
		['minecraft:iron_sword', 'minecraft:golden_sword', 'minecraft:stone_sword', 'minecraft:wooden_sword', 'emerald_tools:copper_sword',
			'soulsweapons:kirkhammer', 'soulsweapons:holy_greatsword', 'soulsweapons:silver_sword', 'soulsweapons:translucent_sword',
			'soulsweapons:translucent_glaive', 'soulsweapons:translucent_double_greatsword', 'soulsweapons:forlorn_scythe', 'graveyard:bone_dagger',
			'gateofbabylon:wooden_dagger', 'gateofbabylon:stone_dagger', 'gateofbabylon:iron_dagger', 'gateofbabylon:golden_dagger',
			'gateofbabylon:wooden_spear', 'gateofbabylon:stone_spear', 'gateofbabylon:iron_spear', 'gateofbabylon:golden_spear',
			'gateofbabylon:wooden_broadsword', 'gateofbabylon:stone_broadsword', 'gateofbabylon:iron_broadsword', 'gateofbabylon:golden_broadsword',
			'gateofbabylon:wooden_rapier', 'gateofbabylon:stone_rapier', 'gateofbabylon:iron_rapier', 'gateofbabylon:golden_rapier',
			'gateofbabylon:wooden_haladie', 'gateofbabylon:stone_haladie', 'gateofbabylon:iron_haladie', 'gateofbabylon:golden_haladie',
			'gateofbabylon:wooden_waraxe', 'gateofbabylon:stone_waraxe', 'gateofbabylon:iron_waraxe', 'gateofbabylon:golden_waraxe',
			'gateofbabylon:wooden_katana', 'gateofbabylon:stone_katana', 'gateofbabylon:iron_katana', 'gateofbabylon:golden_katana',
			'mcdw:axe_anchor', 'mcdw:dagger_dagger', 'mcdw:dagger_tempest_knife', 'mcdw:axe_double', 'mcdw:gauntlet_gauntlet',
			'mcdw:spear_glaive', 'mcdw:hammer_great_hammer', 'mcdw:hammer_mace', 'mcdw:spear_spear', 'mcdw:staff_battlestaff',
			'mcdw:sword_broken_sawblade', 'mcdw:sword_claymore', 'mcdw:sword_coral_blade', 'mcdw:sword_cutlass', 'mcdw:sword_iron_sword_var',
			'mcdw:sword_katana', 'mcdw:sword_rapier', 'mcdw:dagger_soul_knife', 'mythicmetals:aquarium_sword', 'mythicmetals:banglum_sword',
			'mythicmetals:bronze_sword', 'mythicmetals:copper_sword', 'mythicmetals:durasteel_sword', 'mythicmetals:kyber_sword', 'mythicmetals:osmium_sword',
			'mythicmetals:quadrillum_sword', 'mythicmetals:runite_sword', 'mythicmetals:steel_sword', 'mythicmetals:midas_gold_sword', 'mythicmetals:gilded_midas_gold_sword',
			'mythicmetals:carmot_staff', 'mythicmetals:carmot_sword', 'twilightforest:ironwood_sword', 'twilightforest:steeleaf_sword'
		])
	event.add('tier:2weapon',
		['minecraft:diamond_sword', 'additionaladditions:rose_gold_sword', 'minecraft:trident', 'additionaladditions:gilded_netherite_sword',
			'emerald_tools:obsidian_sword', 'emerald_tools:steel_sword', 'emerald_tools:amethyst_sword', 'emerald_tools:ruby_sword',
			'emerald_tools:emerald_sword', 'soulsweapons:guts_sword', 'soulsweapons:bluemoon_shortsword', 'soulsweapons:bluemoon_greatsword',
			'soulsweapons:sting', 'soulsweapons:dragon_staff', 'soulsweapons:withered_wabbajack', 'betterend:aeternium_sword',
			'betterend:thallasium_sword', 'betterend:terminite_sword', 'botania:manasteel_sword', 'botania:elementium_sword',
			'botania:star_sword', 'botania:thunder_sword', 'gateofbabylon:diamond_dagger', 'gateofbabylon:diamond_spear',
			'gateofbabylon:diamond_broadsword', 'gateofbabylon:diamond_rapier', 'gateofbabylon:diamond_haladie', 'gateofbabylon:diamond_waraxe',
			'gateofbabylon:diamond_katana', 'mcdw:axe_encrusted_anchor', 'mcdw:axe_highland', 'mcdw:dagger_backstabber',
			'mcdw:dagger_chill_gale_knife', 'mcdw:dagger_fangs_of_frost', 'mcdw:dagger_moon', 'mcdw:dagger_resolute_tempest_knife',
			'mcdw:dagger_shear_dagger', 'mcdw:dagger_void_touched_blade', 'mcdw:axe_cursed', 'mcdw:axe_whirlwind',
			'mcdw:gauntlet_maulers', 'mcdw:spear_venom_glaive', 'mcdw:hammer_bone_cudgel', 'mcdw:hammer_flail',
			'mcdw:hammer_gravity', 'mcdw:hammer_stormlander', 'mcdw:sickle_jailors_scythe', 'mcdw:sickle_last_laugh_gold',
			'mcdw:sickle_last_laugh_silver', 'mcdw:spear_fortune', 'mcdw:staff_battlestaff_of_terror', 'mcdw:staff_growing_staff',
			'mcdw:sword_beestinger', 'mcdw:sword_broadsword', 'mcdw:sword_dancers_sword', 'mcdw:sword_diamond_sword_var', 'mcdw:sword_freezing_foil',
			'mcdw:sword_great_axeblade', 'mcdw:sword_hawkbrand', 'mcdw:sword_heartstealer', 'mcdw:sword_mechanized_sawblade', 'mcdw:sword_nameless_blade',
			'mcdw:sword_sponge_striker', 'mythicmetals:adamantite_sword', 'mythicmetals:prometheum_sword', 'mythicmetals:star_platinum_sword',
			'mythicmetals:hallowed_sword', 'mythicmetals:legendary_banglum_sword', 'mythicmetals:stormyx_sword', 'mythicmetals:mythril_sword',
			'mythicmetals:orichalcum_sword', 'mythicmetals:palladium_sword', 'mythicmetals:red_aegis_sword', 'mythicmetals:white_aegis_sword',
			'mythicmetals:celestium_sword', 'spirit:soul_steel_sword', 'spectrum:looting_falchion', 'spectrum:dreamflayer', 'twilightforest:ice_sword',
			'twilightforest:knightmetal_sword'
		])
	event.add('tier:3weapon',
		['gobber2:gobber2_sword', 'minecraft:netherite_sword', 'soulsweapons:freyr_sword', 'soulsweapons:soul_reaper',
			'soulsweapons:draugr', 'soulsweapons:dawnbreaker', 'soulsweapons:draupnir_spear', 'soulsweapons:whirligig_sawblade',
			'soulsweapons:holy_moonlight_sword', 'soulsweapons:holy_moonlight_greatsword', 'soulsweapons:darkin_scythe_pre', 'gateofbabylon:gobber_haladie',
			'gateofbabylon:netherite_dagger', 'gateofbabylon:gobber_dagger', 'gateofbabylon:gobber_spear', 'gateofbabylon:netherite_spear',
			'gateofbabylon:netherite_broadsword', 'gateofbabylon:gobber_broadsword', 'gateofbabylon:netherite_rapier', 'gateofbabylon:gobber_rapier',
			'gateofbabylon:netherite_waraxe', 'gateofbabylon:gobber_waraxe', 'gateofbabylon:netherite_katana', 'gateofbabylon:gobber_katana',
			'mcdw:gauntlet_soul_fists', 'mcdw:sickle_frost_scythe', 'mcdw:sickle_nightmares_bite', 'mcdw:dagger_eternal_knife', 'mcdw:sword_truthseeker',
			'mythicmetals:metallurgium_sword', 'twilightforest:giant_sword', 'twilightforest:fiery_sword', 'twilightforest:glass_sword'
		])
	event.add('tier:4weapon',
		['mcdw:sword_obsidian_claymore', 'mcdw:sword_dark_katana', 'mcdw:sword_sinister', 'mcdw:sword_frost_slayer',
			'mcdw:hammer_suns_grace', 'mcdw:spear_whispering_spear', 'mcdw:sickle_skull_scythe', 'mcdw:spear_grave_bane',
			'mcdw:sickle_soul_scythe', 'mcdw:sword_masters_katana', 'gobber2:gobber2_sword_nether', 'botania:terra_sword',
			'soulsweapons:crucible_sword', 'soulsweapons:leviathan_axe', 'soulsweapons:moonlight_shortsword',
			'soulsweapons:moonlight_greatsword', 'soulsweapons:pure_moonlight_greatsword', 'mcdw:axe_firebrand',
			'soulsweapons:skofnung', 'soulsweapons:lich_bane', 'soulsweapons:featherlight', 'soulsweapons:comet_spear',
			'soulsweapons:dragonslayer_swordspear', 'soulsweapons:shadow_assassin_scythe', 'soulsweapons:darkin_scythe',
			'soulsweapons:rageblade', 'soulsweapons:nightfall', 'soulsweapons:bloodthirster', 'gateofbabylon:nether_gobber_waraxe',
			'gateofbabylon:terra_waraxe', 'gateofbabylon:nether_gobber_katana', 'gateofbabylon:terra_katana', 'gateofbabylon:nether_gobber_haladie',
			'gateofbabylon:terra_haladie', 'gateofbabylon:nether_gobber_dagger', 'gateofbabylon:terra_dagger', 'gateofbabylon:nether_gobber_spear',
			'gateofbabylon:terra_spear', 'gateofbabylon:nether_gobber_broadsword', 'gateofbabylon:terra_broadsword', 'gateofbabylon:gobber_rapier_nether',
			'gateofbabylon:terra_rapier', 'soulsweapons:darkin_blade'
		])
	event.add('tier:5weapon',
		['mcdw:sword_the_starless_night', 'mcdw:dagger_swift_striker', 'dragonloot:dragon_trident', 'dragonloot:dragon_sword',
			'spectrum:bedrock_sword', 'gobber2:gobber2_sword_sniper', 'gobber2:gobber2_sword_end', 'mcdw:dagger_the_beginning',
			'mcdw:dagger_the_end', 'soulsweapons:mjolnir', 'gateofbabylon:end_gobber_dagger', 'gateofbabylon:end_gobber_spear',
			'gateofbabylon:end_gobber_broadsword', 'gateofbabylon:gobber_rapier_end', 'gateofbabylon:end_gobber_haladie', 'gateofbabylon:end_gobber_waraxe',
			'gateofbabylon:end_gobber_katana'
		])

	//远程
	event.add('tier:1ranged',
		['minecraft:bow', 'minecraft:crossbow', 'additionaladditions:crossbow_with_spyglass'])
	event.add('tier:2ranged',
		['emerald_tools:emerald_bow', 'emerald_tools:obsidian_bow', 'emerald_tools:ruby_bow', 'emerald_tools:amethyst_bow',
			'emerald_tools:steel_bow', 'emerald_tools:copper_bow', 'gateofbabylon:stone_bow', 'gateofbabylon:iron_bow',
			'gateofbabylon:golden_bow', 'mcdw:bow_longbow', 'mcdw:crossbow_dual_crossbow',
			'mcdw:crossbow_burst_crossbow', 'spirit:soul_steel_bow', 'soulsweapons:hunter_pistol', 'soulsweapons:blunderbuss',
			'soulsweapons:gatling_gun', 'soulsweapons:hunter_cannon'
		])
	event.add('tier:3ranged',
		['soulsweapons:galeforce', 'gateofbabylon:diamond_bow', 'gateofbabylon:netherite_bow', 'mcdw:crossbow_spellbound_crossbow',
			'mcdw:crossbow_shadow_crossbow', 'mcdw:crossbow_soul_hunter_crossbow', 'gobber2:gobber2_bow'
		])
	event.add('tier:4ranged',
		['mcdw:crossbow_baby_crossbow', 'mcdw:crossbow_corrupted_crossbow', 'twilightforest:ice_bow',
			'twilightforest:ender_bow', 'gobber2:gobber2_bow_nether'
		])
	event.add('tier:5ranged',
		['dragonloot:dragon_bow', 'dragonloot:dragon_crossbow', 'mcdw:crossbow_lightning_harp_crossbow', 'mcdw:crossbow_veiled_crossbow', 'spectrum:bedrock_bow', 'spectrum:bedrock_crossbow',
			'twilightforest:seeker_bow', 'twilightforest:triple_bow', 'gobber2:gobber2_bow_end'
		])

	//护甲
	event.add('tier:1armor',
		['minecraft:iron_helmet', 'minecraft:iron_chestplate', 'minecraft:iron_leggings', 'minecraft:iron_boots',
			'minecraft:leather_helmet', 'minecraft:leather_chestplate', 'minecraft:leather_leggings', 'minecraft:leather_boots',
			'minecraft:chainmail_helmet', 'minecraft:chainmail_chestplate', 'minecraft:chainmail_leggings', 'minecraft:chainmail_boots',
			'minecraft:golden_helmet', 'minecraft:golden_chestplate', 'minecraft:golden_leggings', 'minecraft:golden_boots',
			'emerald_tools:copper_helmet', 'emerald_tools:copper_chestplate', 'emerald_tools:copper_leggings', 'emerald_tools:copper_boots',
			'soulsweapons:soul_robes_helmet', 'soulsweapons:soul_robes_chestplate', 'soulsweapons:soul_robes_leggings', 'soulsweapons:soul_robes_boots',
			'soulsweapons:soul_ingot_helmet', 'soulsweapons:soul_ingot_chestplate', 'soulsweapons:soul_ingot_leggings', 'soulsweapons:soul_ingot_boots',
			'soulsweapons:forlorn_helmet', 'soulsweapons:forlorn_chestplate', 'soulsweapons:forlorn_leggings', 'soulsweapons:forlorn_boots',
			'botania:manasteel_helmet', 'botania:manasteel_chestplate', 'botania:manasteel_leggings', 'botania:manasteel_boots',
			'botania:manaweave_helmet', 'botania:manaweave_chestplate', 'botania:manaweave_leggings', 'botania:manaweave_boots',
			'mythicmetals:bronze_helmet', 'mythicmetals:bronze_chestplate', 'mythicmetals:bronze_leggings', 'mythicmetals:bronze_boots',
			'mythicmetals:copper_helmet', 'mythicmetals:copper_chestplate', 'mythicmetals:copper_leggings', 'mythicmetals:copper_boots',
			'mythicmetals:silver_helmet', 'mythicmetals:silver_chestplate', 'mythicmetals:silver_leggings', 'mythicmetals:silver_boots',
			'mythicmetals:steel_helmet', 'mythicmetals:steel_chestplate', 'mythicmetals:steel_leggings', 'mythicmetals:steel_boots',
			'mythicmetals:runite_helmet', 'mythicmetals:runite_chestplate', 'mythicmetals:runite_leggings', 'mythicmetals:runite_boots',
			'mythicmetals:kyber_helmet', 'mythicmetals:kyber_chestplate', 'mythicmetals:kyber_leggings', 'mythicmetals:kyber_boots',
			'mythicmetals:midas_gold_helmet', 'mythicmetals:midas_gold_chestplate', 'mythicmetals:midas_gold_leggings', 'mythicmetals:midas_gold_boots',
			'spectrum:emergency_helmet', 'spectrum:emergency_chestplate', 'spectrum:emergency_leggings', 'spectrum:emergency_boots',
			'additionaladditions:rose_gold_helmet', 'additionaladditions:rose_gold_chestplate', 'additionaladditions:rose_gold_leggings', 'additionaladditions:rose_gold_boots',
			'mcda:ocelot_armor_helmet', 'mcda:ocelot_armor_chestplate', 'mcda:ocelot_armor_leggings', 'mcda:ocelot_armor_boots', 'mcda:hunters_chestplate',
			'mcda:spelunker_armor_helmet', 'mcda:spelunker_armor_chestplate', 'mcda:spelunker_armor_leggings', 'mcda:spelunker_armor_boots',
			'mcda:wolf_armor_helmet', 'mcda:wolf_armor_chestplate', 'mcda:wolf_armor_leggings', 'mcda:wolf_armor_boots',
			'mcda:reinforced_mail_helmet', 'mcda:reinforced_mail_chestplate', 'mcda:reinforced_mail_leggings', 'mcda:reinforced_mail_boots',
			'mcda:dark_armor_helmet', 'mcda:dark_armor_chestplate', 'mcda:dark_armor_leggings', 'mcda:dark_armor_boots',
			'mcda:fox_armor_helmet', 'mcda:fox_armor_chestplate', 'mcda:fox_armor_leggings', 'mcda:fox_armor_boots',
			'mcda:squid_armor_helmet', 'mcda:squid_armor_chestplate', 'mcda:squid_armor_leggings', 'mcda:squid_armor_boots',
			'mcda:climbing_gear_helmet', 'mcda:climbing_gear_chestplate', 'mcda:climbing_gear_leggings', 'mcda:climbing_gear_boots',
			'mcda:evocation_robe_helmet', 'mcda:evocation_robe_chestplate', 'mcda:evocation_robe_leggings', 'mcda:battle_robe_chestplate', 'mcda:battle_robe_leggings',
			'mcda:thief_armor_helmet', 'mcda:thief_armor_chestplate', 'mcda:thief_armor_leggings', 'mcda:thief_armor_boots',
			'mcda:soul_robe_helmet', 'mcda:soul_robe_chestplate', 'mcda:soul_robe_leggings', 'mcda:soul_robe_boots',
			'mcda:entertainer_garb_helmet', 'mcda:entertainer_garb_chestplate', 'mcda:entertainer_garb_leggings', 'mcda:entertainer_garb_boots',
			'mcda:teleportation_robe_helmet', 'mcda:teleportation_robe_chestplate', 'mcda:teleportation_robe_leggings', 'mcda:teleportation_robe_boots',
			'mcda:piglin_armor_helmet', 'mcda:piglin_armor_chestplate', 'mcda:piglin_armor_leggings', 'mcda:piglin_armor_boots',
			'mcda:sprout_armor_helmet', 'mcda:sprout_armor_chestplate', 'mcda:sprout_armor_leggings', 'mcda:sprout_armor_boots',
			'mcda:living_vines_armor_helmet', 'mcda:living_vines_armor_chestplate', 'mcda:living_vines_armor_leggings', 'mcda:living_vines_armor_boots',
			'mcda:phantom_armor_helmet', 'mcda:phantom_armor_chestplate', 'mcda:phantom_armor_leggings', 'mcda:phantom_armor_boots',
			'mcda:grim_armor_helmet', 'mcda:grim_armor_chestplate', 'mcda:grim_armor_leggings', 'mcda:grim_armor_boots',
			'mcda:turtle_armor_helmet', 'mcda:turtle_armor_chestplate', 'mcda:turtle_armor_leggings', 'mcda:turtle_armor_boots',
			'mcda:beenest_armor_helmet', 'mcda:beenest_armor_chestplate', 'mcda:beenest_armor_leggings', 'mcda:beenest_armor_boots',
			'mcda:ghostly_armor_helmet', 'mcda:ghostly_armor_chestplate', 'mcda:ghostly_armor_leggings', 'mcda:ghostly_armor_boots',
			'mcda:sweet_tooth_helmet', 'mcda:sweet_tooth_chestplate', 'mcda:sweet_tooth_leggings', 'mcda:sweet_tooth_boots',
			'mcda:scale_mail_chestplate', 'mcda:scale_mail_leggings', 'mcda:scale_mail_boots', 'cloudboots:cloud_boots',
			'mcda:vanguard_armor_helmet', 'mcda:vanguard_armor_chestplate', 'mcda:vanguard_armor_leggings',
			'mcda:guards_armor_helmet', 'mcda:guards_armor_chestplate', 'mcda:guards_armor_leggings', 'mcda:guards_armor_boots',
			'mcda:snow_armor_helmet', 'mcda:snow_armor_chestplate', 'mcda:snow_armor_leggings', 'mcda:snow_armor_boots',
			'mcda:mercenary_armor_helmet', 'mcda:mercenary_armor_chestplate', 'mcda:mercenary_armor_leggings', 'mcda:mercenary_armor_boots',
			'mcda:emerald_gear_helmet', 'mcda:emerald_gear_chestplate', 'mcda:emerald_gear_leggings', 'mcda:emerald_gear_boots',
			'mcda:plate_armor_helmet', 'mcda:plate_armor_chestplate', 'mcda:plate_armor_leggings', 'mcda:plate_armor_boots'
		])
	event.add('tier:2armor',
		['minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots',
			'betterend:crystalite_helmet', 'betterend:crystalite_chestplate', 'betterend:crystalite_leggings', 'betterend:crystalite_boots',
			'emerald_tools:ruby_helmet', 'emerald_tools:ruby_chestplate', 'emerald_tools:ruby_leggings', 'emerald_tools:ruby_boots',
			'emerald_tools:amethyst_helmet', 'emerald_tools:amethyst_chestplate', 'emerald_tools:amethyst_leggings', 'emerald_tools:amethyst_boots',
			'emerald_tools:emerald_helmet', 'emerald_tools:emerald_chestplate', 'emerald_tools:emerald_leggings', 'emerald_tools:emerald_boots',
			'emerald_tools:steel_helmet', 'emerald_tools:steel_chestplate', 'emerald_tools:steel_leggings', 'emerald_tools:steel_boots',
			'emerald_tools:obsidian_helmet', 'emerald_tools:obsidian_chestplate', 'emerald_tools:obsidian_leggings', 'emerald_tools:obsidian_boots',
			'botania:elementium_helmet', 'botania:elementium_chestplate', 'botania:elementium_leggings', 'botania:elementium_boots',
			'immersive_armors:slime_helmet', 'immersive_armors:slime_chestplate', 'immersive_armors:slime_leggings', 'immersive_armors:slime_boots',
			'immersive_armors:heavy_helmet', 'immersive_armors:heavy_chestplate', 'immersive_armors:heavy_leggings', 'immersive_armors:heavy_boots',
			'immersive_armors:robe_helmet', 'immersive_armors:robe_chestplate', 'immersive_armors:robe_leggings', 'immersive_armors:robe_boots',
			'immersive_armors:prismarine_helmet', 'immersive_armors:prismarine_chestplate', 'immersive_armors:prismarine_leggings', 'immersive_armors:prismarine_boots',
			'immersive_armors:warrior_helmet', 'immersive_armors:warrior_chestplate', 'immersive_armors:warrior_leggings', 'immersive_armors:warrior_boots',
			'immersive_armors:wooden_helmet', 'immersive_armors:wooden_chestplate', 'immersive_armors:wooden_leggings', 'immersive_armors:wooden_boots',
			'majobroom:majo_hat', 'majobroom:majo_cloth', 'majobroom:stocking',
			'adventurez:stone_golem_helmet', 'adventurez:stone_golem_chestplate', 'adventurez:stone_golem_leggings', 'adventurez:stone_golem_boots',
			'additionaladditions:gilded_netherite_helmet', 'additionaladditions:gilded_netherite_chestplate', 'additionaladditions:gilded_netherite_leggings', 'additionaladditions:gilded_netherite_boots',
			'mythicmetals:star_platinum_helmet', 'mythicmetals:star_platinum_chestplate', 'mythicmetals:star_platinum_leggings', 'mythicmetals:star_platinum_boots',
			'mythicmetals:aquarium_helmet', 'mythicmetals:aquarium_chestplate', 'mythicmetals:aquarium_leggings', 'mythicmetals:aquarium_boots',
			'mythicmetals:banglum_helmet', 'mythicmetals:banglum_chestplate', 'mythicmetals:banglum_leggings', 'mythicmetals:banglum_boots',
			'mythicmetals:durasteel_helmet', 'mythicmetals:durasteel_chestplate', 'mythicmetals:durasteel_leggings', 'mythicmetals:durasteel_boots',
			'mythicmetals:prometheum_helmet', 'mythicmetals:prometheum_chestplate', 'mythicmetals:prometheum_leggings', 'mythicmetals:prometheum_boots',
			'mythicmetals:carmot_helmet', 'mythicmetals:carmot_chestplate', 'mythicmetals:carmot_leggings', 'mythicmetals:carmot_boots',
			'mythicmetals:osmium_helmet', 'mythicmetals:osmium_chestplate', 'mythicmetals:osmium_leggings', 'mythicmetals:osmium_boots',
			'mythicmetals:orichalcum_helmet', 'mythicmetals:orichalcum_chestplate', 'mythicmetals:orichalcum_leggings', 'mythicmetals:orichalcum_boots',
			'mythicmetals:mythril_helmet', 'mythicmetals:mythril_chestplate', 'mythicmetals:mythril_leggings', 'mythicmetals:mythril_boots',
			'mythicmetals:adamantite_helmet', 'mythicmetals:adamantite_chestplate', 'mythicmetals:adamantite_leggings', 'mythicmetals:adamantite_boots',
			'twilightforest:ironwood_helmet', 'twilightforest:ironwood_chestplate', 'twilightforest:ironwood_leggings', 'twilightforest:ironwood_boots',
			'twilightforest:steeleaf_helmet', 'twilightforest:steeleaf_chestplate', 'twilightforest:steeleaf_leggings', 'twilightforest:steeleaf_boots',
			'twilightforest:arctic_helmet', 'twilightforest:arctic_chestplate', 'twilightforest:arctic_leggings', 'twilightforest:arctic_boots',
			'twilightforest:knightmetal_helmet', 'twilightforest:knightmetal_chestplate', 'twilightforest:knightmetal_leggings', 'twilightforest:knightmetal_boots',
			'mcda:rugged_climbing_gear_helmet', 'mcda:rugged_climbing_gear_chestplate', 'mcda:rugged_climbing_gear_leggings', 'mcda:rugged_climbing_gear_boots',
			'mcda:cave_crawler_helmet', 'mcda:cave_crawler_chestplate', 'mcda:cave_crawler_leggings', 'mcda:cave_crawler_boots',
			'mcda:goat_gear_helmet', 'mcda:goat_gear_chestplate', 'mcda:goat_gear_leggings', 'mcda:goat_gear_boots',
			'mcda:reinforced_mail_helmet', 'mcda:reinforced_mail_chestplate', 'mcda:reinforced_mail_leggings', 'mcda:reinforced_mail_boots',
			'mcda:glow_squid_armor_helmet', 'mcda:glow_squid_armor_chestplate', 'mcda:glow_squid_armor_leggings', 'mcda:glow_squid_armor_boots',
			'mcda:troubadour_armor_helmet', 'mcda:troubadour_armor_chestplate', 'mcda:troubadour_armor_leggings', 'mcda:troubadour_armor_boots',
			'mcda:spider_armor_helmet', 'mcda:spider_armor_chestplate', 'mcda:spider_armor_leggings', 'mcda:spider_armor_boots',
			'mcda:souldancer_robe_helmet', 'mcda:souldancer_robe_chestplate', 'mcda:souldancer_robe_leggings', 'mcda:souldancer_robe_boots',
			'mcda:ghost_kindler_helmet', 'mcda:ghost_kindler_chestplate', 'mcda:ghost_kindler_leggings', 'mcda:ghost_kindler_boots',
			'mcda:golden_piglin_armor_helmet', 'mcda:golden_piglin_armor_chestplate', 'mcda:golden_piglin_armor_leggings', 'mcda:golden_piglin_armor_boots',
			'mcda:hungry_horror_helmet', 'mcda:hungry_horror_chestplate', 'mcda:hungry_horror_leggings', 'mcda:hungry_horror_boots',
			'mcda:unstable_robe_helmet', 'mcda:unstable_robe_chestplate', 'mcda:unstable_robe_leggings', 'mcda:unstable_robe_boots',
			'mcda:verdant_robe_helmet', 'mcda:verdant_robe_chestplate', 'mcda:verdant_robe_leggings',
			'mcda:ember_robe_helmet', 'mcda:ember_robe_chestplate', 'mcda:ember_robe_leggings',
			'mcda:splendid_robe_chestplate', 'mcda:splendid_robe_leggings',
			'mcda:champions_armor_helmet', 'mcda:champions_armor_chestplate', 'mcda:champions_armor_leggings', 'mcda:champions_armor_boots',
			'mcda:cauldron_armor_helmet', 'mcda:cauldron_armor_chestplate', 'mcda:cauldron_armor_leggings', 'mcda:cauldron_armor_boots',
			'mcda:shulker_armor_helmet', 'mcda:shulker_armor_chestplate', 'mcda:shulker_armor_leggings', 'mcda:shulker_armor_boots',
			'mcda:nimble_turtle_armor_helmet', 'mcda:nimble_turtle_armor_chestplate', 'mcda:nimble_turtle_armor_leggings', 'mcda:nimble_turtle_armor_boots',
			'mcda:full_metal_armor_helmet', 'mcda:full_metal_armor_chestplate', 'mcda:full_metal_armor_leggings', 'mcda:full_metal_armor_boots',
			'mcda:royal_guard_armor_helmet', 'mcda:royal_guard_armor_chestplate', 'mcda:royal_guard_armor_leggings', 'mcda:royal_guard_armor_boots',
			'mcda:opulent_armor_helmet', 'mcda:opulent_armor_chestplate', 'mcda:opulent_armor_leggings', 'mcda:opulent_armor_boots',
			'mcda:frost_bite_armor_helmet', 'mcda:frost_bite_armor_chestplate', 'mcda:frost_bite_armor_leggings', 'mcda:frost_bite_armor_boots',
			'mcda:frost_armor_helmet', 'mcda:frost_armor_chestplate', 'mcda:frost_armor_leggings', 'mcda:frost_armor_boots',
			'mcda:renegade_armor_helmet', 'mcda:renegade_armor_chestplate', 'mcda:renegade_armor_leggings', 'mcda:renegade_armor_boots',
			'mcda:wither_armor_helmet', 'mcda:wither_armor_chestplate', 'mcda:wither_armor_leggings', 'mcda:wither_armor_boots',
			'mcda:curious_armor_helmet', 'mcda:curious_armor_chestplate', 'mcda:curious_armor_leggings', 'mcda:curious_armor_boots',
			'mcda:stalwart_armor_helmet', 'mcda:stalwart_armor_chestplate', 'mcda:stalwart_armor_leggings', 'mcda:stalwart_armor_boots',
			'mcda:beehive_armor_helmet', 'mcda:beehive_armor_chestplate', 'mcda:beehive_armor_leggings', 'mcda:beehive_armor_boots'
		])
	event.add('tier:3armor',
		['gobber2:gobber2_helmet', 'gobber2:gobber2_chestplate', 'gobber2:gobber2_leggings', 'gobber2:gobber2_boots',
			'minecraft:netherite_helmet', 'minecraft:netherite_chestplate', 'minecraft:netherite_leggings', 'minecraft:netherite_boots',
			'soulsweapons:chaos_crown', 'soulsweapons:chaos_helmet', 'soulsweapons:arkenplate', 'soulsweapons:chaos_robes',
			'botania:terrasteel_helmet', 'botania:terrasteel_chestplate', 'botania:terrasteel_leggings', 'botania:terrasteel_boots',
			'immersive_armors:divine_helmet', 'immersive_armors:divine_chestplate', 'immersive_armors:divine_leggings', 'immersive_armors:divine_boots',
			'immersive_armors:steampunk_helmet', 'immersive_armors:steampunk_chestplate', 'immersive_armors:steampunk_leggings', 'immersive_armors:steampunk_boots',
			'mythicmetals:palladium_helmet', 'mythicmetals:palladium_chestplate', 'mythicmetals:palladium_leggings', 'mythicmetals:palladium_boots',
			'mythicmetals:stormyx_helmet', 'mythicmetals:stormyx_chestplate', 'mythicmetals:stormyx_leggings', 'mythicmetals:stormyx_boots',
			'mythicmetals:celestium_helmet', 'mythicmetals:celestium_chestplate', 'mythicmetals:celestium_leggings', 'mythicmetals:celestium_boots',
			'mythicmetals:hallowed_helmet', 'mythicmetals:hallowed_chestplate', 'mythicmetals:hallowed_leggings', 'mythicmetals:hallowed_boots',
			'mythicmetals:legendary_banglum_helmet', 'mythicmetals:legendary_banglum_chestplate', 'mythicmetals:legendary_banglum_leggings', 'mythicmetals:legendary_banglum_boots',
			'twilightforest:fiery_helmet', 'twilightforest:fiery_chestplate', 'twilightforest:fiery_leggings', 'twilightforest:fiery_boots',
			'twilightforest:yeti_helmet', 'twilightforest:yeti_chestplate', 'twilightforest:yeti_leggings', 'twilightforest:yeti_boots',
			'twilightforest:phantom_helmet', 'twilightforest:phantom_chestplate', 'twilightforest:naga_chestplate', 'twilightforest:naga_leggings',
			'mcda:archers_helmet', 'mcda:archers_chestplate', 'mcda:archers_leggings', 'mcda:archers_boots',
			'mcda:shadow_walker_armor_helmet', 'mcda:shadow_walker_armor_chestplate', 'mcda:shadow_walker_armor_leggings', 'mcda:shadow_walker_armor_boots',
			'mcda:arctic_fox_armor_helmet', 'mcda:arctic_fox_armor_chestplate', 'mcda:arctic_fox_armor_leggings', 'mcda:arctic_fox_armor_boots',
			'mcda:black_wolf_armor_helmet', 'mcda:black_wolf_armor_chestplate', 'mcda:black_wolf_armor_leggings', 'mcda:black_wolf_armor_boots',
			'mcda:titans_shroud_helmet', 'mcda:titans_shroud_chestplate', 'mcda:titans_shroud_leggings', 'mcda:titans_shroud_boots',
			'mcda:heros_armor_helmet', 'mcda:heros_armor_chestplate', 'mcda:heros_armor_leggings', 'mcda:heros_armor_boots',
			'mcda:gilded_glory_helmet', 'mcda:gilded_glory_chestplate', 'mcda:gilded_glory_leggings', 'mcda:gilded_glory_boots'
		])
	event.add('tier:4armor',
		['mcda:green_mystery_armor_helmet', 'mcda:green_mystery_armor_chestplate',
			'mcda:green_mystery_armor_leggings', 'mcda:green_mystery_armor_boots',
			'mcda:blue_mystery_armor_helmet', 'mcda:blue_mystery_armor_chestplate',
			'mcda:blue_mystery_armor_leggings', 'mcda:blue_mystery_armor_boots',
			'mcda:white_mystery_armor_helmet', 'mcda:white_mystery_armor_chestplate',
			'mcda:white_mystery_armor_leggings', 'mcda:white_mystery_armor_boots',
			'mcda:red_mystery_armor_helmet', 'mcda:red_mystery_armor_chestplate',
			'mcda:red_mystery_armor_leggings', 'mcda:red_mystery_armor_boots',
			'mcda:purple_mystery_armor_helmet', 'mcda:purple_mystery_armor_chestplate',
			'mcda:purple_mystery_armor_leggings', 'mcda:purple_mystery_armor_boots',
			'gobber2:gobber2_helmet_nether', 'gobber2:gobber2_chestplate_nether',
			'gobber2:gobber2_leggings_nether', 'gobber2:gobber2_boots_nether',
			'mcda:gourdian_armor_helmet', 'mcda:gourdian_armor_chestplate',
			'mcda:gourdian_armor_leggings', 'mcda:gourdian_armor_boots',
			'mythicmetals:metallurgium_helmet', 'mythicmetals:metallurgium_chestplate',
			'mythicmetals:metallurgium_leggings', 'mythicmetals:metallurgium_boots'
		])
	event.add('tier:5helmet',
		['mcda:sturdy_shulker_armor_helmet', 'gobber2:gobber2_helmet_end', 'gobber2:gobber2_helmet_dragon',
			'spectrum:bedrock_helmet', 'dragonloot:dragon_helmet'
		])
	event.add('tier:5chestplate',
		['mcda:sturdy_shulker_armor_chestplate', 'gobber2:gobber2_chestplate_end', 'gobber2:gobber2_chestplate_dragon',
			'spectrum:bedrock_chestplate', 'dragonloot:dragon_chestplate', 'dragonloot:upgraded_dragon_chestplate'
		])
	event.add('tier:5leggings',
		['mcda:sturdy_shulker_armor_leggings', 'gobber2:gobber2_leggings_end', 'gobber2:gobber2_leggings_dragon', 'spectrum:bedrock_leggings', 'dragonloot:dragon_leggings'])
	event.add('tier:5boots',
		['mcda:sturdy_shulker_armor_boots', 'gobber2:gobber2_boots_end', 'gobber2:gobber2_boots_dragon', 'spectrum:bedrock_boots', 'dragonloot:dragon_boots'])
	event.add('tier:6ranged',
		['dragonloot:dragon_bow', 'spectrum:bedrock_bow', 'twilightforest:seeker_bow', 'twilightforest:triple_bow', 'gobber2:gobber2_bow_end', 'mcdw:bow_call_of_the_void', 'mcdw:bow_lost_souls'])
	event.add('tier:2ranged1',
		['mcdw:crossbow_heavy_crossbow', 'mcdw:bow_void_bow', 'mcdw:bow_sabrewing'])
	event.add('tier:3ranged1',
		['mcdw:crossbow_slayer_crossbow'])
	event.add('tier:4ranged1',
		['mcdw:crossbow_doom_crossbow'])
	event.add('tier:5ranged1',
		['mcdw:crossbow_imploding_crossbow', 'mcdw:crossbow_pride_of_the_piglins'])
	event.add('botania:terra_pick',
		['botania:terra_pick'])
	event.add('kubejs:mu_jian', ['kubejs:mu_jian', 'kubejs:yuan_mu_jian'])
	event.add('card_package', ['collectorsalbum:common_repacked_card_package', 'collectorsalbum:uncommon_repacked_card_package', 'collectorsalbum:rare_repacked_card_package', 'collectorsalbum:epic_repacked_card_package', 'collectorsalbum:legendary_repacked_card_package', 'collectorsalbum:mythical_repacked_card_package'])
	event.removeAll('c:hidden_from_recipe_viewers')
	event.removeAll('twilightforest:portal/activator')
	event.add('twilightforest:portal/activator', ['gobber2:gobber2_ingot'])
})
// 在 kubejs/server_scripts 目录下的脚本文件中编写
onEvent('tags.items', event => {
	Ingredient.of('@utilities').getItemIds().forEach(element => {
        event.add(
			'utilities:item', // 标签名称（格式为 namespace:tag_name）
			[element] // 获取该模组所有物品
		  )
    });
  })