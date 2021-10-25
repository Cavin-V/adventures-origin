// priority: 0

console.info('Hello, World! KubeJS Has loaded client scripts')

//onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
//})

events.listen("recipes", function (event) {

	
	// Adds recipes for AE2 presses because meteorites seem to be broken.
	event.shaped(item.of("appliedenergistics2:calculation_processor_press"), [
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null],
		["appliedenergistics2:charged_certus_quartz_crystal", "appliedenergistics2:certus_quartz_crystal", "appliedenergistics2:charged_certus_quartz_crystal"],
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null]
	]);
	event.shaped(item.of("appliedenergistics2:engineering_processor_press"), [
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null],
		["appliedenergistics2:charged_certus_quartz_crystal", "minecraft:diamond", "appliedenergistics2:charged_certus_quartz_crystal"],
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null]
	]);
	event.shaped(item.of("appliedenergistics2:logic_processor_press"), [
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null],
		["appliedenergistics2:charged_certus_quartz_crystal", "minecraft:gold_ingot", "appliedenergistics2:charged_certus_quartz_crystal"],
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null]
	]);
	event.shaped(item.of("appliedenergistics2:silicon_press"), [
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null],
		["appliedenergistics2:charged_certus_quartz_crystal", "appliedenergistics2:silicon", "appliedenergistics2:charged_certus_quartz_crystal"],
		[null, "appliedenergistics2:charged_certus_quartz_crystal", null]
	]);

	// Replaces Gobber Ingot recipe with a bit of a harder one.
	event.remove({output: "gobber2:gobber2_ingot"});
	event.shaped(item.of("gobber2:gobber2_ingot"), [
	  ["gobber2:gobber2_glob", "minecraft:diamond"],
	  ["minecraft:iron_block", "minecraft:gold_ingot"],
	]);
	
	// Replaces Nether Gobber Ingot recipe with a bit of a harder one.
	event.remove({output: "gobber2:gobber2_ingot_nether"});
	event.shaped(item.of("gobber2:gobber2_ingot_nether"), [
	  ["gobber2:gobber2_glob_nether", "gobber2:gobber2_ingot"],
	  ["gobber2:gobber2_ingot", "minecraft:netherite_ingot"],
	]);
  
	// Replaces End Gobber Glob recipe with a bit of a harder one.
	event.remove({output: "gobber2:gobber2_glob_end"});
	event.shaped(item.of("gobber2:gobber2_glob_end"), [
	  ["gobber2:gobber2_globette_end", "gobber2:gobber2_globette_end", "gobber2:gobber2_globette_end"],
	  ["gobber2:gobber2_globette_end", "gobber2:gobber2_ingot_nether", "gobber2:gobber2_globette_end"],
	  ["gobber2:gobber2_globette_end", "gobber2:gobber2_globette_end", "gobber2:gobber2_globette_end"]
	]);

	// Replaces End Gobber Ingot recipe with a bit of a harder one.
	event.remove({output: "gobber2:gobber2_ingot_end"});
	event.shaped(item.of("gobber2:gobber2_ingot_end"), [
	  ["gobber2:gobber2_glob_end", "gobber2:gobber2_ingot_nether"],
	  ["gobber2:gobber2_ingot_nether", "minecraft:diamond_block"],
	]);
});