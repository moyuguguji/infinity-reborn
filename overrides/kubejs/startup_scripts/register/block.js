onEvent('block.registry', event => {
	event.create('adamantite_brick')
		.material('metal')
		.hardness(3.0)
		.displayName('精金锻炉砖')
		.tagBlock('minecraft:mineable/pickaxe', 'minecraft:needs_iron_tool')
		.group('alloy_forgery')
		.requiresTool(true)
})