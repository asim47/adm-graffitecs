/*function ghazanfar() {

	var citynames = new Bloodhound({
		datumTokenizer : Bloodhound.tokenizers.obj.whitespace('name'),
		queryTokenizer : Bloodhound.tokenizers.whitespace,
		prefetch : {
			url:  "http://localhost:8080/saeed-new/secure/tasks-management/findUserTags?ver=1.2",
			//   url: '../assets/citynames.json?ver=1.2',
			filter : function(list) {
				return $.map(list, function(cityname) {
					return {
						name : cityname
					};
				});
			}
		}
	});
	citynames.initialize();


	*//**
	 * Typeahead
	 *//*
	var elt = $('.example_typeahead > > input');
	elt.tagsinput({
		tagClass : function(item) {
			switch (item) {
			case 'Washington':
				return 'label bg-primary';
			case 'Amsterdam':
				return 'label bg-danger';
			case 'Sydney':
				return 'label bg-success';
			case 'Beijing':
				return 'label bg-default';
			case 'Cairo':
				return 'label bg-warning';
			default:
				return 'label ';
			}
		},
		maxTags : 3,
		maxChars: 25,
		typeaheadjs : {
			name : 'citynames',
			displayKey : 'name',
			valueKey : 'name',
			source : citynames.ttAdapter()
		}
	});

}
*/