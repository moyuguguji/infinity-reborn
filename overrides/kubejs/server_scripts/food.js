onEvent('item.food_eaten', event => {
    if (event.item.id == 'kubejs:gu') {
        let ram = randomNum(1,3)
        switch (ram) {
            case 1:
                event.player.playSound('kubejs:v_gu',1.0,1.0)
                break;
            case 2:
                event.player.playSound('kubejs:music.gu',1.0,1.0)
                break;
            case 3:
                event.player.playSound('kubejs:cat',1.0,1.0)
                break;
            default:
                break;
        }
    }
})