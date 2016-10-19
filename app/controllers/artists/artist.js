import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createSong: function(e) {
			//Prevent page refresh
			e.preventDefault();
			var title = this.get('songName');
			var price = this.get('price');
			var createdBy = this.get('createdBy');

			//console.log(name, price, createdBy);

			var promise = $.ajax({
				type:'post',
				url: 'http://itp-api.herokuapp.com/api/songs',
				data: {
					title: title,
					artist: this.get('model.id'),
					genre: 1,
					price: price,
					createdBy: createdBy
				}
			});

			//var controller = this;
			promise.then((response) => {
				alert('yay');
				this.set('songName', null);
				this.set('price', null);
				this.set('createdBy', null);
				var songs = this.get('model.songs');
				// console.log(response);
				// songs.pushObject(response.song);
				//
				//OR
				//
				var newSongs = songs.concat(response.song);
				this.set('model.songs', newSongs);
			}, function() {
				alert('error');
			});
		}
	}
});

// $('form').on('submit', function(e) {
// 	e.preventDefault();
// })