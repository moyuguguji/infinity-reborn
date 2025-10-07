

onEvent('recipes', event => {//锻造
    event.smithing(Item.of('botania:terra_pick').withNBT('{mana:2147483646}'), 'botania:creative_pool', Item.of('botania:terra_pick').ignoreNBT())
})
onEvent('recipes', event => {//光谱
    event.custom({
        type: "spectrum:fusion_shrine",
        "time": 600,
        "experience": 5000.0,
        "fluid": "spectrum:liquid_crystal",
        "ingredients": [
            {
                "item": 'spectrum:budding_onyx',
                "count": 1
            },
            {
                "item": 'spectrum:budding_citrine',
                "count": 1
            },
            {
                "item": 'spectrum:budding_topaz',
                "count": 1
            },
            {
                "item": 'minecraft:budding_amethyst',
                "count": 1
            },
            {
                "item": 'spectrum:midnight_aberration',
                "count": 5
            },
            {
                "item": 'spectrum:bedrock_dust',
                "count": 10
            }
        ],
        "result": {
            "item": 'spectrum:budding_moonstone'
        }
    })

    event.custom({
        type: "spectrum:fusion_shrine",
        "time": 200,
        "experience": 5000.0,
        "fluid": "spectrum:liquid_crystal",
        "ingredients": [
            {
                "item": 'spectrum:budding_moonstone',
                "count": 1
            },
            {
                "item": 'spectrum:moonstone_shard',
                "count": 1
            }
        ],
        "result": {
            "item": 'spectrum:budding_moonstone',
            "count": 2
        }
    })
})
onEvent('recipes', event => {//永恒
    event.shapeless('kubejs:yong_hen_star', ['kubejs:difficulty_changer'])
})

onEvent('item.entity_interact',event=>{
    let player = event.getPlayer()
    let entity = event.target
    if (player != null) {
        if (entity != null) {
            if (player.stages.has('difficulty_yonghen')) {
                if ((event.player.getHeldItem(MAIN_HAND) == 'minecraft:flint_and_steel' || event.player.getHeldItem(OFF_HAND) == 'minecraft:flint_and_steel') && entity.type =='minecraft:creeper') {
                    event.cancel()
                }
            }
        }
    }
})
