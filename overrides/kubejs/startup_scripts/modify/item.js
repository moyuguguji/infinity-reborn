onEvent('item.modification', event => {
	event.modify('gobber2:gobber2_special_item', item => {
		item.setmaxStackSize(8)
		item.fireResistant = true
	})
})