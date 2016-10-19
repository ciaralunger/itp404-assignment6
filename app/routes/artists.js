import Ember from 'ember';

export default Ember.Route.extend({
	// beforeModel: function() {
	// 	document.title="Artists";
	// },
	// model: function() {
	// 	var url = 'http://itp-api.herokuapp.com/api/artists';
	// 	var promise = $.getJSON(url);
	// 	return promise;
	// },
	// afterModel: function(model) {
	// 	console.log(model);
	// }

	model: function() {
    var promise = $.ajax({
      type: 'get',
      url: 'http://itp-api.herokuapp.com/api/artists'
    });

    return promise;
  }
});
