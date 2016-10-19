import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createArtist: function(e) {
			//Prevent page refresh
			e.preventDefault();
			var artistName = this.get('artistName');

			//console.log(artistName);

			var promise = $.ajax({
				type:'post',
				url: 'http://itp-api.herokuapp.com/api/artists',
				data: {
					name: artistName
				}
			});

			promise.then((response) => {
				//testing
				//alert('yay');
				this.set('artistName', null);
				// console.log(response);
				// songs.pushObject(response.song);
				//
				//OR
				//
				// var newArtist = artistName.concat(response.artistName);
				// this.set('model.artists', newArtist);
				//
				//Grabs reference to entire array of artists
				this.get('model.artists').pushObject(response.artist);				
				//Transition to route
				this.transitionToRoute('artists');
			}, function() {
				//
				//Error when artist is already in database
				//
				alert('Artist already exists');
			});
		}
	}
});
