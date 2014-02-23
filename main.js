(function() {

	var nativity = require('nativity');

	module.exports = {
		install: function() {
			nativity.install(String, host, ['supplant', 'startsWith', 'before', 'after', 'between', 'bookend', { repeatString: 'repeat' }, 'toTitleCase', { strContains: 'contains' }, 'index' ]);
			nativity.install(Number, host, ['ordinal', { mapNumber: 'map' }]);
			nativity.install(Array, host, ['each', 'pluck', 'group', 'orderedGroup', 'tally', 'contains', 'unique', 'reversed', 'index', 'rotate', 'toObject', 'find', 'findByProperty', 'filterBy', 'any', 'all', 'spliced', 'shuffle', 'chunk' ]);
			nativity.install(Function, host, ['any', 'all', 'sequence', 'partialAt', 'arritize', 'toInstance', 'new', 'spy']);
		}
	};

})();
