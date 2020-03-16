var data = {
	"raw_wood": {
		"id": "raw_wood",
		"name": "Raw wood",
		"recipes": [
		
		]
	},
	"wood": {
		"id": "wood",
		"name": "Wood",
		"recipes": [
			{
				"amount": 2,
				"time": 0.5,
				"ingredients": {
					"raw_wood": 1
				}
			}
		]
	},
	"coal": {
		"id": "coal",
		"name": "Coal",
		"recipes": [
			
		]
	},
	"stone": {
		"id": "stone",
		"name": "Stone",
		"recipes": [
			
		]
	},
	"copper_plate": {
		"id": "copper_plate",
		"name": "Copper plate",
		"recipes": [
			
		]
	},
	"iron_plate": {
		"id": "iron_plate",
		"name": "Iron plate",
		"recipes": [
			
		]
	},
	"water": {
		"id": "water",
		"name": "Water",
		"recipes": [
		
		]
	},
	"steam": {
		"id": "steam",
		"name": "Steam",
		"recipes": [
		
		]
	},
	"crude_oil": {
		"id": "crude_oil",
		"name": "Crude oil",
		"recipes": [
		
		]
	},
	"petroleum_gas": {
		"id": "petroleum_gas",
		"name": "Petroleum gas",
		"recipes": [
			
		]
	},
	"light_oil": {
		"id": "light_oil",
		"name": "Light oil",
		"recipes": [
			
		]
	},
	"heavy_oil": {
		"id": "heavy_oil",
		"name": "Heavy oil",
		"recipes": [
		
		]
	},
	"lubricant": {
		"id": "lubricant",
		"name": "Lubricant",
		"recipes": [
			{
				"amount": 10,
				"time": 1,
				"ingredients": {
					"heavy_oil": 10
				}
			}
		]
	},
	"iron_stick": {
		"id": "iron_stick",
		"name": "Iron stick",
		"recipes": [
			{
				"amount": 2,
				"time": 0.5,
				"ingredients": {
					"iron_plate": 1
				}
			}
		]
	},
	"iron_gear_wheel": {
		"id": "iron_gear_wheel",
		"name": "Iron gear wheel",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"iron_plate": 2
				}
			}
		]
	},
	"steel_plate": {
		"id": "steel_plate",
		"name": "Steel plate",
		"recipes": [
			{
				"amount": 1,
				"time": 17.5,
				"ingredients": {
					"iron_plate": 5
				}
			}
		]
	},
	"copper_cable": {
		"id": "copper_cable",
		"name": "Copper cable",
		"recipes": [
			{
				"amount": 2,
				"time": 0.5,
				"ingredients": {
					"copper_plate": 1
				}
			}
		]
	},
	"plastic_bar": {
		"id": "plastic_bar",
		"name": "Plastic bar",
		"recipes": [
			{
				"amount": 2,
				"time": 1,
				"ingredients": {
					"coal": 1,
					"petroleum_gas": 20
				}
			}
		]
	},
	"electronic_circuit": {
		"id": "electronic_circuit",
		"name": "Electronic circuit",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper_cable": 3,
					"iron_plate": 1
				}
			}
		]
	},
	"advanced_circuit": {
		"id": "advanced_circuit",
		"name": "Advanced circuit",
		"recipes": [
			{
				"amount": 1,
				"time": 6,
				"ingredients": {
					"copper_cable": 4,
					"electronic_circuit": 2,
					"plastic_bar": 2
				}
			}
		]
	},
	"wooden_chest": {
		"id": "wooden_chest",
		"name": "Wooden chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"wood": 4
				}
			}
		]
	},
	"iron_chest": {
		"id": "iron_chest",
		"name": "Iron chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"iron_plate": 8
				}
			}
		]
	},
	"steel_chest": {
		"id": "steel_chest",
		"name": "Steel chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"steel_plate": 8
				}
			}
		]
	},
	"storage_tank": {
		"id": "storage_tank",
		"name": "Storage tank",
		"recipes": [
			{
				"amount": 1,
				"time": 3,
				"ingredients": {
					"iron_plate": 20,
					"steel_plate": 5
				}
			}
		]
	},
	"transport_belt": {
		"id": "transport_belt",
		"name": "Transport belt",
		"recipes": [
			{
				"amount": 2,
				"time": 0.5,
				"ingredients": {
					"iron_gear_wheel": 1,
					"iron_plate": 1
				}
			}
		]
	},
	"fast_transport_belt": {
		"id": "fast_transport_belt",
		"name": "Fast transport belt",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"iron_gear_wheel": 5,
					"transport_belt": 1
				}
			}
		]
	},
	"express_transport_belt": {
		"id": "express_transport_belt",
		"name": "Express transport belt",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"fast_transport_belt": 1,
					"iron_gear_wheel": 10,
					"lubricant": 20
				}
			}
		]
	},
	"underground_belt": {
		"id": "underground_belt",
		"name": "Underground belt",
		"recipes": [
			{
				"amount": 2,
				"time": 1,
				"ingredients": {
					"iron_plate": 10,
					"transport_belt": 5
				}
			}
		]
	},
	"fast_underground_belt": {
		"id": "fast_underground_belt",
		"name": "Fast underground belt",
		"recipes": [
			{
				"amount": 2,
				"time": 2,
				"ingredients": {
					"iron_gear_wheel": 40,
					"underground_belt": 2
				}
			}
		]
	},
	"express_underground_belt": {
		"id": "express_underground_belt",
		"name": "Express underground belt",
		"recipes": [
			{
				"amount": 2,
				"time": 2,
				"ingredients": {
					"fast_underground_belt": 2,
					"iron_gear_wheel": 80,
					"lubricant": 40
				}
			}
		]
	},
	"splitter": {
		"id": "splitter",
		"name": "Splitter",
		"recipes": [
			{
				"amount": 1,
				"time": 1,
				"ingredients": {
					"electronic_circuit": 5,
					"iron_plate": 5,
					"transport_belt": 4
				}
			}
		]
	},
	"fast_splitter": {
		"id": "fast_splitter",
		"name": "Fast splitter",
		"recipes": [
			{
				"amount": 1,
				"time": 2,
				"ingredients": {
					"electronic_circuit": 10,
					"iron_gear_wheel": 10,
					"splitter": 1
				}
			}
		]
	},
	"express_splitter": {
		"id": "express_splitter",
		"name": "Express splitter",
		"recipes": [
			{
				"amount": 1,
				"time": 2,
				"ingredients": {
					"advanced_circuit": 10,
					"fast_splitter": 1,
					"iron_gear_wheel": 10,
					"lubricant": 80
				}
			}
		]
	},
	"burner_inserter": {
		"id": "burner_inserter",
		"name": "Burner inserter",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"iron_gear_wheel": 1,
					"iron_plate": 1
				}
			}
		]
	},
	"inserter": {
		"id": "inserter",
		"name": "Inserter",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 1,
					"iron_gear_wheel": 1,
					"iron_plate": 1
				}
			}
		]
	},
	"long_handed_inserter": {
		"id": "long_handed_inserter",
		"name": "Long handed inserter",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"inserter": 1,
					"iron_gear_wheel": 1,
					"iron_plate": 1
				}
			}
		]
	},
	"fast_inserter": {
		"id": "fast_inserter",
		"name": "Fast inserter",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 2,
					"inserter": 1,
					"iron_plate": 2
				}
			}
		]
	},
	"filter_inserter": {
		"id": "filter_inserter",
		"name": "Filter inserter",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 4,
					"fast_inserter": 1
				}
			}
		]
	},
	"stack_inserter": {
		"id": "stack_inserter",
		"name": "Stack inserter",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 1,
					"electronic_circuit": 15,
					"fast_inserter": 1,
					"iron_gear_wheel": 15
				}
			}
		]
	},
	"stack_filter_inserter": {
		"id": "stack_filter_inserter",
		"name": "Stack filter inserter",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 5,
					"stack_inserter": 1
				}
			}
		]
	},
	"small_electric_pole": {
		"id": "small_electric_pole",
		"name": "Small electric pole",
		"recipes": [
			{
				"amount": 2,
				"time": 0.5,
				"ingredients": {
					"copper_cable": 2,
					"wood": 2
				}
			}
		]
	},
	"medium_electric_pole": {
		"id": "medium_electric_pole",
		"name": "Medium electric pole",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper": 2,
					"steel_plate": 2
				}
			}
		]
	},
	"big_electric_pole": {
		"id": "big_electric_pole",
		"name": "Big electric pole",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper": 5,
					"steel_plate": 5
				}
			}
		]
	},
	"substation": {
		"id": "substation",
		"name": "Substation",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 5,
					"copper": 5,
					"steel_plate": 10
				}
			}
		]
	},
	"pipe": {
		"id": "pipe",
		"name": "Pipe",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"iron_plate": 1
				}
			}
		]
	},
	"pipe_to_ground": {
		"id": "pipe_to_ground",
		"name": "Pipe to ground",
		"recipes": [
			{
				"amount": 2,
				"time": 0.5,
				"ingredients": {
					"iron_plate": 5,
					"pipe": 10
				}
			}
		]
	},
	"pump": {
		"id": "pump",
		"name": "Pump",
		"recipes": [
			{
				"amount": 1,
				"time": 2,
				"ingredients": {
					"engine_unit": 1,
					"pipe": 1,
					"steel_plate": 1
				}
			}
		]
	},
	"rail": {
		"id": "rail",
		"name": "Rail",
		"recipes": [
			{
				"amount": 2,
				"time": 0.5,
				"ingredients": {
					"iron_stick": 1,
					"steel_plate": 1,
					"stone": 1
				}
			}
		]
	},
	"train_stop": {
		"id": "train_stop",
		"name": "Train stop",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 5,
					"iron_plate": 10,
					"steel_plate": 3
				}
			}
		]
	},
	"rail_signal": {
		"id": "rail_signal",
		"name": "Rail signal",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 1,
					"iron_plate": 5
				}
			}
		]
	},
	"rail_chain_signal": {
		"id": "rail_chain_signal",
		"name": "Rail chain signal",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 1,
					"iron_plate": 5
				}
			}
		]
	},
	"locomotive": {
		"id": "locomotive",
		"name": "Locomotive",
		"recipes": [
			{
				"amount": 1,
				"time": 4,
				"ingredients": {
					"electronic_circuit": 10,
					"engine_unit": 20,
					"steel_plate": 30
				}
			}
		]
	},
	"cargo_wagon": {
		"id": "cargo_wagon",
		"name": "Cargo wagon",
		"recipes": [
			{
				"amount": 1,
				"time": 1,
				"ingredients": {
					"iron_gear_wheel": 10,
					"iron_plate": 20,
					"steel_plate": 20
				}
			}
		]
	},
	"fluid_wagon": {
		"id": "fluid_wagon",
		"name": "Fluid wagon",
		"recipes": [
			{
				"amount": 1,
				"time": 1.5,
				"ingredients": {
					"iron_gear_wheel": 10,
					"pipe": 8,
					"steel_plate": 16,
					"storage_tank": 1
				}
			}
		]
	},
	"artillery_wagon": {
		"id": "artillery_wagon",
		"name": "Artillery wagon",
		"recipes": [
			{
				"amount": 1,
				"time": 4,
				"ingredients": {
					"advanced_circuit": 20,
					"engine_unit": 64,
					"iron_gear_wheel": 10,
					"pipe": 16,
					"steel_plate": 40
				}
			}
		]
	},
	"car": {
		"id": "car",
		"name": "Car",
		"recipes": [
			{
				"amount": 1,
				"time": 2,
				"ingredients": {
					"engine_unit": 8,
					"iron_plate": 20,
					"steel_plate": 5
				}
			}
		]
	},
	"tank": {
		"id": "tank",
		"name": "Tank",
		"recipes": [
			{
				"amount": 1,
				"time": 5,
				"ingredients": {
					"advanced_circuit": 10,
					"engine_unit": 32,
					"iron_gear_wheel": 15,
					"steel_plate": 50
				}
			}
		]
	},
	"logistic_robot": {
		"id": "logistic_robot",
		"name": "Logistic robot",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 2,
					"flying_robot_frame": 1
				}
			}
		]
	},
	"construction_robot": {
		"id": "construction_robot",
		"name": "Construction robot",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 2,
					"flying_robot_frame": 1
				}
			}
		]
	},
	"active_provider_chest": {
		"id": "active_provider_chest",
		"name": "Active provider chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 1,
					"electronic_circuit": 3,
					"steel_chest": 1
				}
			}
		]
	},
	"passive_provider_chest": {
		"id": "passive_provider_chest",
		"name": "Passive provider chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 1,
					"electronic_circuit": 3,
					"steel_chest": 1
				}
			}
		]
	},
	"storage_chest": {
		"id": "storage_chest",
		"name": "Storage chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 1,
					"electronic_circuit": 3,
					"steel_chest": 1
				}
			}
		]
	},
	"buffer_chest": {
		"id": "buffer_chest",
		"name": "Buffer chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 1,
					"electronic_circuit": 3,
					"steel_chest": 1
				}
			}
		]
	},
	"requester_chest": {
		"id": "requester_chest",
		"name": "Requester chest",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"advanced_circuit": 1,
					"electronic_circuit": 3,
					"steel_chest": 1
				}
			}
		]
	},
	"roboport": {
		"id": "roboport",
		"name": "Roboport",
		"recipes": [
			{
				"amount": 1,
				"time": 5,
				"ingredients": {
					"advanced_circuit": 45,
					"iron_gear_wheel": 45,
					"steel_plate": 45
				}
			}
		]
	},
	"lamp": {
		"id": "lamp",
		"name": "Lamp",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"electronic_circuit": 1,
					"iron_plate": 1,
					"iron_stick": 3
				}
			}
		]
	},
	"red_wire": {
		"id": "red_wire",
		"name": "Red wire",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper_cable": 1,
					"electronic_circuit": 1
				}
			}
		]
	},
	"green_wire": {
		"id": "green_wire",
		"name": "Green wire",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper_cable": 1,
					"electronic_circuit": 1
				}
			}
		]
	},
	"arithmetic_combinator": {
		"id": "arithmetic_combinator",
		"name": "Arithmetic combinator",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper_cable": 5,
					"electronic_circuit": 5
				}
			}
		]
	},
	"decider_combinator": {
		"id": "decider_combinator",
		"name": "Decider combinator",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper_cable": 5,
					"electronic_circuit": 5
				}
			}
		]
	},
	"constant_combinator": {
		"id": "constant_combinator",
		"name": "Constant combinator",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"copper_cable": 5,
					"electronic_circuit": 2
				}
			}
		]
	},
	"power_switch": {
		"id": "power_switch",
		"name": "Power switch",
		"recipes": [
			{
				"amount": 1,
				"time": 2,
				"ingredients": {
					"copper_cable": 5,
					"electronic_circuit": 2,
					"iron_plate": 5
				}
			}
		]
	},
	"programmable_speaker": {
		"id": "programmable_speaker",
		"name": "Programmable speaker",
		"recipes": [
			{
				"amount": 1,
				"time": 2,
				"ingredients": {
					"copper_cable": 5,
					"electronic_circuit": 4,
					"iron_plate": 5
				}
			}
		]
	},
	"stone_brick": {
		"id": "stone_brick",
		"name": "Stone brick",
		"recipes": [
			{
				"amount": 1,
				"time": 3.5,
				"ingredients": {
					"stone": 2
				}
			}
		]
	},
	"concrete": {
		"id": "concrete",
		"name": "Concrete",
		"recipes": [
			{
				"amount": 10,
				"time": 10,
				"ingredients": {
					"iron_ore": 1,
					"stone_brick": 5,
					"water": 100
				}
			}
		]
	},
	"hazard_concrete": {
		"id": "hazard_concrete",
		"name": "Hazard concrete",
		"recipes": [
			{
				"amount": 10,
				"time": 0.25,
				"ingredients": {
					"concrete": 10
				}
			}
		]
	},
	"refined_concrete": {
		"id": "refined_concrete",
		"name": "Refined concrete",
		"recipes": [
			{
				"amount": 10,
				"time": 15,
				"ingredients": {
					"concrete": 20,
					"iron_stick": 8,
					"steel_plate": 1,
					"water": 100
				}
			}
		]
	},
	"refined_hazard_concrete": {
		"id": "refined_hazard_concrete",
		"name": "Refined hazard concrete",
		"recipes": [
			{
				"amount": 10,
				"time": 0.25,
				"ingredients": {
					"refined_concrete": 10
				}
			}
		]
	},
	"landfill": {
		"id": "landfill",
		"name": "Landfill",
		"recipes": [
			{
				"amount": 1,
				"time": 0.5,
				"ingredients": {
					"stone": 20
				}
			}
		]
	},
	"cliff_explosives": {
		"id": "cliff_explosives",
		"name": "Cliff explosives",
		"recipes": [
			{
				"amount": 1,
				"time": 8,
				"ingredients": {
					"empty_barrel": 1,
					"explosives": 10,
					"grenade": 1
				}
			}
		]
	},
	"electric_mining_drill": {
		"id": "electric_mining_drill",
		"name": "Electric mining drill",
		"recipes": [
			{
				"amount": 1,
				"time": 2,
				"ingredients": {
					"electronic_circuit": 3,
					"iron_gear_wheel": 5,
					"iron_plate": 10
				}
			}
		]
	},
	"electric_furnace": {
		"id": "electric_furnace",
		"name": "Electric furnace",
		"recipes": [
			{
				"amount": 1,
				"time": 5,
				"ingredients": {
					"advanced_circuit": 5,
					"steel_plate": 10,
					"stone_brick": 10
				}
			}
		]
	},
	"engine_unit": {
		"id": "engine_unit",
		"name": "Engine unit",
		"recipes": [
			{
				"amount": 1,
				"time": 10,
				"ingredients": {
					"iron_gear_wheel": 1,
					"pipe": 2,
					"steel_plate": 1
				}
			}
		]
	},
	"electric_engine_unit": {
		"id": "electric_engine_unit",
		"name": "Electric engine unit",
		"recipes": [
			{
				"amount": 1,
				"time": 10,
				"ingredients": {
					"electronic_circuit": 2,
					"engine_unit": 1,
					"lubricant": 15
				}
			}
		]
	},
	"science_pack_3": {
		"id": "science_pack_3",
		"name": "Science pack 3",
		"recipes": [
			{
				"amount": 1,
				"time": 12,
				"ingredients": {
					"electric_mining_drill": 1,
					"advanced_circuit": 1,
					"engine_unit": 1
				}
			}
		]
	},
	"production_science_pack": {
		"id": "production_science_pack",
		"name": "Production science pack",
		"recipes": [
			{
				"amount": 2,
				"time": 14,
				"ingredients": {
					"electric_engine_unit": 1,
					"electric_furnace": 1
				}
			}
		]
	}
};

var crafting = [{
		name: "Logistics",
		id: "logistics",
		rows: [
			["wooden_chest", "iron_chest", "steel_chest", "storage_tank"],
			["transport_belt", "fast_transport_belt", "express_transport_belt", "underground_belt", "fast_underground_belt", "express_underground_belt", "splitter", "fast_splitter", "express_splitter"],
			["burner_inserter", "inserter", "long_handed_inserter", "fast_inserter", "filter_inserter", "stack_inserter", "stack_filter_inserter"],
			["small_electric_pole", "medium_electric_pole", "big_electric_pole", "substation", "pipe", "pipe_to_ground", "pump"],
			["rail", "train_stop", "rail_signal", "rail_chain_signal", "locomotive", "cargo_wagon", "fluid_wagon", "artillery_wagon", "car", "tank"],
			["logistic_robot", "construction_robot", "active_provider_chest", "passive_provider_chest", "storage_chest", "buffer_chest", "requester_chest", "roboport"],
			["lamp", "red_wire", "green_wire", "arithmetic_combinator", "decider_combinator", "constant_combinator", "power_switch", "programmable_speaker"],
			["stone_brick", "concrete", "hazard_concrete","", "refined_hazard_concrete", "landfill", "cliff_explosives"]
		]
	}, {
		name: "Production",
		id: "production",
		rows: [
			["iron_axe", "steel_axe", "repair_pack", "blueprint", "deconstruction_planner", "blueprint_book"],
			["boiler", "steam_engine", "steam_turbine", "solar_panel", "accumulator", "nuclear_reactor", "heat_exchanger", "heat_pipe"],
			["burner_mining_drill", "electric_mining_drill", "offshore_pump", "pumpjack"],
			["stone_furnace", "steel_furnace", "electric_furnace"],
			["assembling_machine_1", "assembling_machine_2", "assembling_machine_3", "oil_refinery", "chemical_plant", "centrifuge", "lab"],
			["beacon", "speed_module", "speed_module_2", "speed_module_3", "efficiency_module", "efficiency_module_2", "efficiency_module_3", "productivity_module", "productivity_module_2", "productivity_module_3"]
		]
	}, {
		name: "Intermediate products",
		id: "intermediate_products",
		rows: [
			["raw_wood", "coal", "stone", "iron_ore", "copper_ore", "uranium_ore", "raw_fish", "crude_oil", "heavy_oil", "light_oil", "lubricant", "petroleum_gas", "sulfuric_acid", "water", "steam"],
			["wood", "iron_plate", "copper_plate", "solid_fuel", "steel_plate", "plastic_bar", "sulfur", "battery", "explosives", "uranium_processing"],
			["crude_oil_barrel", "heavy_oil_barrel", "light_oil_barrel", "lubricant_barrel", "petroleum_gas_barrel", "sulfuric_acid_barrel", "water_barrel"],
			["copper_cable", "iron_stick", "iron_gear_wheel", "empty_barrel", "electronic_circuit", "advanced_circuit", "processing_unit", "engine_unit", "electric_engine_unit", "flying_robot_frame", "satellite", "rocket_part", "rocket_control_unit", "low_density_structure", "rocket_fuel", "nuclear_fuel", "uranium-235", "uranium-238", "uranium_fuel_cell", "used_up_uranium_fuel_cell", "nuclear_fuel_reprocessing", "kovarex_enrichment_process"],
			["science_pack_1", "science_pack_2", "science_pack_3", "military_science_pack", "production_science_pack", "high_tech_science_pack", "space_science_pack"]
		]
	}, {
		name: "Combat",
		id: "intermediate_products",
		rows: [
			["pistol", "submachine_gun", "shotgun", "combat_shotgun", "rocket_launcher", "flamethrower", "land_mine"],
			["firearm_magazine", "piercing_rounds_magazine", "uranium_rounds_magazine", "shotgun_shells", "piercing_shotgun_shells", "cannon_shell", "explosive_cannon_shell", "uranium_cannon_shell", "explosive_uranium_cannon_shell", "artillery_shell", "rocket", "explosive_rocket", "atomic_bomb", "flamethrower_ammo"],
			["grenade", "cluster_grenade", "poison_capsule", "slowdown_capsule", "defender_capsule", "distractor_capsule", "destroyer_capsule", "discharge_defense_remote", "artillery_targeting_remote"],
			["light_armor", "heavy_armor", "modular_armor", "power_armor", "power_armor_mk2"],
			["portable_solar_panel", "portable_fusion_reactor", "energy_shield", "energy_shield_mk2", "battery_mk1", "battery_mk2", "personal_laser_defense", "discharge_defense", "exoskeleton", "personal_roboport", "personal_roboport_mk2", "nightvision"],
			["stone_wall", "gate", "gun_turret", "laser_turret", "flamethrower_turret", "artillery_turret", "radar", "rocket_silo"]
		]
	}
];

var content;
var canvas;
var ctx;

var g = new dagre.graphlib.Graph();
var graph = {
	directed: true,
	nodesep: 10,
	rankdir: "LR"
};
g.setGraph(graph);
g.setDefaultEdgeLabel(function() { return {}; });

function simplifyRequest(req)
{
	var g = gcd(req.amount, req.time);
	
	req.amount /= g;
	req.time /= g;
	
	return req;
}

function addRequests(req1, req2)
{
	return simplifyRequest({
		amount: req1.amount * req2.time + req2.amount * req1.time,
		time: req1.time * req2.time
	});
}

var GUID = 0;

function createRequest(id)
{
	var item = data[id];
	
	if (item == null)
		return false;
	
	var request = {
		id: id, //Id of the item
		uid: (GUID++).toString(),
		lastVisit: -1,
		
		multiplier: 1, //How much of this recipe must be produced to meet the requested amount
		overproduce: 1, //How many times the parent must be overproduced to consume everything produced
		totalOverproduce: 1, //How much of the starting item will be overproduced with the requested amount
		
		requested: {
			amount: 0,
			time: 1
		},
		
		common: 1, //By how much must production be multiplied for all children's production to be consumed
		
		parents: 0, //How many parents use this node
		relied: 0, //How many parents have already added their request to this node
		recipe: -1, //Which recipe has been selected
		children: {
		},
		parentRequests: []
	};
	
	request.elements = createItem(item, request);
	content.appendChild(request.elements.element);
	
	if (beginNode != null)
	{
		if (beginNode.id == id)
		{
			request.elements.element.setAttribute("selectable", "");
		} else
		{
			request.elements.element.setAttribute("unavailable", "");
		}
	}
	
	return request;
}

function destroy(request, parent)
{
	request.parents--;
	
	request.parentRequests.splice(request.parentRequests.indexOf(parent), 1);
	
	if (request.parents > 0)
		return;
	
	content.removeChild(request.elements.element);
	
	request.elements = null;
	
	for (var key in request.children)
		destroy(request.children[key], request);
		
	delete request.children;
}

function setRecipe(request, recipe)
{
	if (recipe == request.recipe)
		return;
	
	request.recipe = recipe;
	
	for (var key in request.children)
		destroy(request.children[key], request);
	
	request.children = {};
	
	if (recipe != -1)
	{
		var r = data[request.id].recipes[recipe];
		
		for (var key in r.ingredients)
		{
			request.children[key] = createRequest(key);
			request.children[key].parents++;
			request.children[key].parentRequests.push(request);
		}
	}
}

/**
 * Calculates by how much everything has to be overproduced in order to meet the demands of its children
 *
 * request: The request object
 * requestAmount: The amount requested
 * requestTime: The time in which the request amount must be produced
 * visit: Visit ID
 * totalOverproduce: How many times the main object will get overproduced
 */
function calculateCommon(request, requestAmount, requestTime, visit, totalOverproduce)
{
	if (request.lastVisit != visit)
	{
		request.lastVisit = visit;
		request.requested.amount = 0;
		request.requested.time = 1;
		request.totalOverproduce = 1;
		
		request.relied = 0;
	}
	
	var g = gcd(totalOverproduce, request.totalOverproduce);
	var requesterMultiplier = totalOverproduce / g;
	
	request.requested.amount *= requesterMultiplier;
	request.requested = addRequests(request.requested, {amount: requestAmount * request.totalOverproduce / g, time: requestTime});
	
	request.totalOverproduce *= requesterMultiplier;
	
	if (request.recipe == -1)
	{
		request.multiplier = 1;
		request.overproduce = 1;
		request.common = 1;
		
		return 1;
	}
	
	request.relied++;
	
	if (request.parents == request.relied)
	{
		var recipe = data[request.id].recipes[request.recipe];

		var availableMultiplier = request.requested.amount * recipe.time; //How much is needed per time unit (aka multiplier)
		var requesterMultiplier = recipe.amount * request.requested.time; //How much is created per time unit (aka overproduction)

		var g = gcd(availableMultiplier, requesterMultiplier);

		availableMultiplier /= g;
		requesterMultiplier /= g;

		var lcdMultiplier = availableMultiplier;

		for (var key in recipe.ingredients)
		{
			if (request.children[key] != null)
			{
				var selfMultiplier = calculateCommon(request.children[key], recipe.ingredients[key] * availableMultiplier, recipe.time, visit, request.totalOverproduce * requesterMultiplier);
				lcdMultiplier = lcdMultiplier * selfMultiplier / gcd(lcdMultiplier, selfMultiplier);
			}
		}

		request.common = lcdMultiplier / availableMultiplier; //How many times everything must be overproduced to make sure each child produces exactly the right amount
		request.multiplier = lcdMultiplier; //How many copies of the recipe are needed
		request.overproduce = requesterMultiplier * request.common; //How many times the parent has to be overproduced
		request.totalOverproduce *= request.overproduce; 
		
		request.requested.amount = recipe.amount * request.multiplier;
		request.requested.time = recipe.time;

		return request.overproduce; //TODO:
	} else
	{
		return 1; //TODO:
	}
}

function calculateTotal(request, totalOverproduce)
{
	if (request.recipe != -1)
		request.multiplier *= totalOverproduce / request.totalOverproduce;
	else
	{
		request.requested.amount *= totalOverproduce / request.totalOverproduce;
		request.requested = simplifyRequest(request.requested);
	}
	request.totalOverproduce *= totalOverproduce / request.totalOverproduce;
	
	for (var key in request.children)
		calculateTotal(request.children[key], totalOverproduce);
}

function createTree(request)
{
	var recipe = {
		amount: request.requested.amount,
		time: request.requested.time
	};
	
	if (request.recipe != -1)
		recipe = data[request.id].recipes[request.recipe];
	
	var outputs = 0;
	
	for (var key in request.children)
	{
		createTree(request.children[key]);
		outputs++;
	}
	
	setItemTime(request.elements, request, recipe.amount, recipe.time);
	setItemMultiplier(request.elements, request.multiplier);
	setItemAmount(request.elements, recipe.amount);
	setItemRecipe(request.elements, request);
	
	var rect = request.elements.element.getBoundingClientRect();
	var node = {data: request, width: rect.width, height: rect.height, outputs: outputs};
	
	g.setNode(request.uid, node);
	
	var i = 0;
	
	for (var key in request.children)
		g.setEdge(request.uid, request.children[key].uid, {requesterIndex: i++});
}

var visits = 0;

function calculateItems(request, amount, time)
{
	calculateCommon(request, amount, time, visits++, 1);
	calculateTotal(request, request.totalOverproduce);
	
	return request;
}

function gcd(a, b)
{
	while (b != 0)
	{
		var t = a % b;
		a = b;
		b = t;
	}
	
	return a;
}

var uniqueID = 0;

function createItem(item, request)
{
	var ti = document.createElement("div");
	ti.classList.add("treeitem");
	
	var cover = document.createElement("div");
	cover.classList.add("cover");
	ti.appendChild(cover);
	
	var dot = document.createElement("div");
	dot.classList.add("itemdot");
	
	ti.appendChild(dot);
	
	var titlecell = document.createElement("div");
	titlecell.classList.add("cell");
	
	var title = document.createElement("div");
	title.classList.add("item");
	
	var itemcontainer = document.createElement("div");
	itemcontainer.classList.add("itemdata");
	
	var titleContainer = document.createElement("div");
	
	var multiplier = document.createElement("div");
	multiplier.classList.add("itemname");
	var multiplyvalue = document.createElement("b");
	multiplier.appendChild(multiplyvalue);
	
	var icondiv = document.createElement("div");
	icondiv.classList.add("itemicon");
	icondiv.setAttribute("type", item.id);
	var iconamount = document.createElement("div");
	icondiv.appendChild(iconamount);
	
	var itemname = document.createElement("div");
	itemname.classList.add("itemname");
	itemname.appendChild(document.createTextNode(item.name));
	
	titleContainer.appendChild(multiplier);
	titleContainer.appendChild(icondiv);
	titleContainer.appendChild(itemname);
	
	var amountdiv = document.createElement("div");
	var itemamt = document.createElement("b");
	var itemtime = document.createElement("b");
	amountdiv.appendChild(itemamt);
	amountdiv.appendChild(document.createTextNode(" in "));
	amountdiv.appendChild(itemtime);
	itemcontainer.appendChild(titleContainer);
	itemcontainer.appendChild(amountdiv);
	
	var itemcombiner = document.createElement("div");
	itemcombiner.classList.add("itemcombine");
	
	itemcombiner.addEventListener('click', function(e)
	{
		if (beginNode == null || beginNode.id != request.id)
		{
			unmarkAvailable(req);
			beginNode = request;
			markAvailable(req, function(nrequest)
			{
				return nrequest.id == request.id && request != nrequest;
			});
			request.elements.element.setAttribute("selected", "");
			request.elements.element.removeAttribute("unavailable");
		} else if (beginNode == request)
		{
			beginNode = null;
			unmarkAvailable(req);
		} else if (beginNode.id == request.id)
		{
			for (var i = beginNode.parentRequests.length - 1; i >= 0; i--)
			{
				var parentReq = beginNode.parentRequests[i];
				parentReq.children[beginNode.id] = request;
				request.parentRequests.push(parentReq);
				request.parents++;
				destroy(beginNode, parentReq);
			}
			
			beginNode = request;
			
			recalculateAll();
		}
	});
	
	title.appendChild(itemcombiner);
	title.appendChild(itemcontainer);
	
	titlecell.appendChild(title);
	
	ti.appendChild(titlecell);
	
	var recipeList = document.createElement("select");
	
	recipeList.appendChild(new Option("No recipe", -1));
	for (var i = 0; i < item.recipes.length; i++)
		recipeList.appendChild(new Option("Recipe " + (i + 1), i));
	
	recipeList.selectedIndex = request.recipe + 1;
	
	recipeList.addEventListener('change', function(e)
	{
		setRecipe(request, +recipeList.value);
		recalculateAll();
	});
		
	var requirementDiv = document.createElement("div");
	requirementDiv.classList.add("requesteditems");
	
	ti.appendChild(requirementDiv);
	
	amountdiv.appendChild(recipeList);
	
	return {
		element: ti,
		multiplyValue: multiplyvalue,
		iconAmount: iconamount,
		itemAmount: itemamt,
		itemTime: itemtime,
		recipeItems: requirementDiv
	};
}

function clearElement(element)
{
	while (element.firstChild)
		element.removeChild(element.firstChild);
}

function setItemTime(elements, request, amount, time)
{
	clearElement(elements.itemAmount);
	clearElement(elements.itemTime);
	
	var itemsPS = amount * request.multiplier;
	var itemsTime = time;
	
	if (itemsTime > 0)
	{
		var g = gcd(itemsPS, itemsTime);
		itemsPS /= g;
		itemsTime /= g;
	}
	
	elements.itemAmount.appendChild(document.createTextNode(itemsPS + " item" + (itemsPS == 1 ? "" : "s")));
	elements.itemTime.appendChild(document.createTextNode(itemsTime + "s"));
}

function setItemMultiplier(elements, multiplier)
{
	clearElement(elements.multiplyValue);
	elements.multiplyValue.appendChild(document.createTextNode(multiplier + String.fromCharCode(215)));
}

function setItemAmount(elements, amount)
{
	clearElement(elements.iconAmount);
	elements.iconAmount.appendChild(document.createTextNode(amount));
}

function setItemRecipe(elements, request)
{
	clearElement(elements.recipeItems);
	
	var item = data[request.id];
	
	if (request.recipe > -1)
	{
		var i = request.recipe;
		
		for (var key in item.recipes[i].ingredients)
		{
			var requestContainer = document.createElement("div");
			requestContainer.classList.add("requesteditem");
			var reqicon = document.createElement("div");
			reqicon.classList.add("itemicon");
			reqicon.setAttribute("type", key);
			
			var amt = document.createElement("div");
			amt.appendChild(document.createTextNode(item.recipes[i].ingredients[key]));
			
			reqicon.appendChild(amt);
			requestContainer.appendChild(reqicon);
			elements.recipeItems.appendChild(requestContainer);
		}
	}
}

var beginNode;

function markAvailable(request, test)
{
	if (test(request))
		request.elements.element.setAttribute("selectable", "");
	else
		request.elements.element.setAttribute("unavailable", "");
	
	for (var key in request.children)
		markAvailable(request.children[key], test);
}

function unmarkAvailable(request)
{
	request.elements.element.removeAttribute("selectable");
	request.elements.element.removeAttribute("unavailable");
	request.elements.element.removeAttribute("selected");
	
	for (var key in request.children)
		unmarkAvailable(request.children[key]);
}

function recalculateAll()
{
	state = "";
	
	var recipe = {
		amount: 1,
		time: 1
	};
	
	if (req.recipe != -1)
		recipe = data[req.id].recipes[req.recipe];
	calculateItems(req, recipe.amount, recipe.time);
	
	g.nodes().forEach(function(v) {
		var node = g.node(v);
		for (var key in node.data.children)
			g.removeEdge(node.data.uid, node.data.children[key].uid);
		g.removeNode(v);
	});
	
	createTree(req);
	renderGraph();
}

var req;

window.onload = function(e)
{
	content = document.getElementById("content");
	canvas = document.getElementById("canvas");
	req = createRequest("science_pack_3");
	req.parents++;
	var recipe = {
		amount: 1,
		time: 1
	};
	
	if (req.recipe != -1)
		recipe = data[req.id].recipes[req.recipe];
	calculateItems(req, recipe.amount, recipe.time);
	ctx = canvas.getContext("2d");
	createTree(req);
	renderGraph();
};

function renderGraph()
{
	dagre.layout(g);
	canvas.width = graph.width;
	canvas.height = graph.height;
	ctx = canvas.getContext("2d");
	g.nodes().forEach(function(v) {
		var node = g.node(v);
		node.data.elements.element.style.left = (node.x - node.width / 2) + "px";
		node.data.elements.element.style.top = (node.y - node.height / 2) + "px";
	});
	g.edges().forEach(function(e) {
		var edge = g.edge(e);
		var start = g.node(e.v);
		var end = g.node(e.w);
		ctx.lineWidth = 4;
		ctx.strokeStyle = "#fff";
		ctx.beginPath();
		ctx.moveTo(start.x + start.width / 2 - 4, start.y + 34 * edge.requesterIndex - (34 * (start.outputs / 2) - 17));
		//ctx.moveTo(edge.points[0].x, edge.points[0].y);
		for (var i = 1; i < edge.points.length - 1; i++)
			ctx.lineTo(edge.points[i].x, edge.points[i].y);
		ctx.lineTo(end.x - end.width / 2 + 4, end.y);
		ctx.stroke();
	});
}