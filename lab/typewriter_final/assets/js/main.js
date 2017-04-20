var container = document.getElementById('container');

var letters = {
    KeyA: {
    	url: 'assets/media/image1.png'
    },
    KeyB: {
    	url: 'assets/media/image2.png'
    },
    KeyC: {
    	url: 'assets/media/image3.png'
    },
    KeyD: {
    	url: 'assets/media/image4.png'
    },
    KeyE: {
    	url: 'assets/media/image5.png'
    },
    KeyF: {
    	url: 'assets/media/image6.png'
    },
    KeyG: {
    	url: 'assets/media/image7.png'
    },
    KeyH: {
    	url: 'assets/media/image8.png'
    },
    KeyI: {
    	url: 'assets/media/image9.png'
    },
    KeyJ: {
    	url: 'assets/media/image9.png'
    },
    KeyK: {
    	url: 'assets/media/image10.png'
    },
    KeyL: {
    	url: 'assets/media/image11.png'
    },
    KeyM: {
    	url: 'assets/media/image12.png'
    },
    KeyN: {
    	url: 'assets/media/image13.png'
    },
    KeyO: {
    	url: 'assets/media/image14.png'
    },
    KeyP: {
    	url: 'assets/media/image15.png'
    },
    KeyQ: {
    	url: 'assets/media/image16.png'
    },
    KeyR: {
    	url: 'assets/media/image17.png'
    },
    KeyS: {
    	url: 'assets/media/image18.png'
    },
    KeyT: {
    	url: 'assets/media/image19.png'
    },
    KeyU: {
    	url: 'assets/media/image20.png'
    },
    KeyV: {
    	url: 'assets/media/image21.png'
    },
    KeyW: {
    	url: 'assets/media/image22.png'
    },
    KeyX: {
    	url: 'assets/media/image23.png'
    },
    KeyY: {
    	url: 'assets/media/image24.png'
    },
    KeyZ: {
    	url: 'assets/media/image25.png'
    }
};





document.addEventListener( 'keydown', function(event) {

	if (event.keyCode >= 65 && event.keyCode <= 90) {

		var div = document.createElement('div'); 
		div.classList.add('pattern');

		
		div.style.backgroundImage = "url(" + letters[event.code].url + ")";
		container.appendChild(div);
	} else if (event.keyCode == 8) {
    	container.removeChild( container.lastChild );
    }

});