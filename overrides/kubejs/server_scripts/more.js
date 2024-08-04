onEvent('recipes', event => {

    event.custom({
        type: 'lychee:item_burning',
        item_in: {
            tag: 'logs_that_burn'
        },
        post: {
            type: 'drop_item',
            item: 'charcoal'
        }
    })

    event.custom({
        type: 'lychee:item_burning',
        item_in: {
            item: 'minecraft:saddle'
        },
        post: {
            type: 'drop_item',
            item: 'minecraft:leather',
            count: 3
        }
    })

    event.custom({
        type: 'lychee:block_interacting',
        item_in: {
            item: 'kubejs:red_packet'
        },
        block_in: '*',
        post: [{
            type: 'drop_item',
            item: 'numismatic-overhaul:gold_coin',
            count: 1,
        },
        {
            type: 'drop_item',
            item: 'numismatic-overhaul:gold_coin',
            count: 4,
            "contextual": {
                "type": "chance",
                "chance": 0.01
            }
        }
        ]
    })

    event.custom({
        type: 'lychee:block_interacting',
        item_in: {
            item: 'kubejs:firecracker'
        },
        block_in: '*',
        post: {
            type: 'execute',
            command: '/summon minecraft:tnt ~ ~ ~ {Fuse:60}'
        }
    })

    event.custom({
        type: 'lychee:item_burning',
        item_in: {
            item: 'minecraft:stick'
        },
        post: {
            type: 'drop_item',
            item: 'minecraft:torch'
        }
    })

    event.custom({
        type: 'lychee:item_inside',
        item_in: {
            item: 'minecraft:bucket'
        },
        block_in: {
            blocks: ['water_cauldron'],
            state: {
                level: 3
            }
        },
        post: [{
            type: 'drop_item',
            item: 'water_bucket'
        },
        {
            type: 'place',
            block: 'cauldron'

        }]
    })

    event.custom({
        "type": "lychee:lightning_channeling",
        "post": [
            {
                "type": "execute",
                "command": "fill ~-1 ~-1 ~-1 ~1 ~1 ~1 soulsweapons:crimson_obsidian replace minecraft:obsidian"
            }
        ]
    })

    event.custom({

        "type": "spectrum:anvil_crushing",
        "ingredient": {
            "item": "minecraft:dragon_egg"
        },
        "crushedItemsPerPointOfDamage": 10,
        "experience": 0.0,
        "result": {
            "item": "dragonloot:dragon_scale",
            "count": 3
        },
        "particleEffectIdentifier": "dragon_breath",
        "particleCount": 3,
        "soundEventIdentifier": "block.stone.break"

    })





    onEvent('item.right_click', event => {
        if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:skill_bottle') {
            event.server.runCommandSilent(`execute as ${event.player.id} run playerex refund ${event.player.profile.name} 1`)
            event.player.mainHandItem.count -= 1
        }
    })

    onEvent('item.right_click', event => {
        //右键检测
        if (event.player.mainHandItem.id == 'kubejs:bloody_tear') {
            event.player.addItemCooldown('kubejs:bloody_tear', 100)
            event.server.runCommand(`/enhancedcelestials setLunarEvent enhancedcelestials-super_blood_moon`)
            event.player.mainHandItem.count -= 1
        }
    })

    onEvent('item.right_click', event => {
        if (event.player.mainHandItem.id == 'kubejs:jiushu_heart') {
            if (event.player.getHeldItem(OFF_HAND) != null) {
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"你无法在副手持有物品时使用该物品","color":"white"}`)
            }else{
                event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} add -2`)
                let lmd = event.player.fullNBT.IMDifficulty
                if (lmd <= 0) {
                    event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.profile.name} set 0`)
                    event.player.mainHandItem.count -= 1
                }else{
                    event.player.addItemCooldown('kubejs:jiushu_heart', 40)
                    event.player.mainHandItem.count -= 1
                }
            }
            }
           
    })

    onEvent('item.right_click', event => {
        if (event.player.getHeldItem(MAIN_HAND) == 'kubejs:paolude_jy') {
            if (event.player.crouching) {
                event.player.give(Item.of('kubejs:nature_spirit', "{Damage:0,Unbreakable:1b}"))
                event.server.runCommandSilent(`title ${event.player.profile.name} actionbar {"text":"恭喜你发现了真隐藏彩蛋","color":"green"}`)
                event.player.mainHandItem.count -= 1
            }
            else {
                event.server.runCommandSilent(`tellraw ${event.player.profile.name} [{"text":"点我领取丰厚奖励","clickEvent":{"action":"open_url","value":"https://www.bilibili.com/video/BV1GJ411x7h7/"}}]`)
            }
        }
    })
})