var SimpleMapper = BaseMapper.create({
	search: function(search) {
		var recordsToReturn = [
			{ first_name: 'Donovan', last_name: 'Stone', id:0 },
			{ first_name: 'Jerrod', last_name: 'Bennett' , id:1},
			{ first_name: 'Bow', last_name: 'Ruggeri' , id:2},
			{ first_name: 'Dollar', last_name: 'Rotary' , id:3},
			{ first_name: 'Will', last_name: 'Swift' , id:4},
			{ first_name: 'Jesse', last_name: 'Schulman' , id:5},
			{ first_name: 'Christen', last_name: 'Mitchell' , id:6},
			{ first_name: 'Bryan', last_name: 'Perez' , id:7}
			
		];

		return recordsToReturn;
	},

	insert: function(vals) {
		console.log(JSON.stringify(vals));
		return null;
	},

	update: function(vals) {
		console.log(JSON.stringify(vals));
		return null;
	}
});

module.exports = SimpleMapper;
