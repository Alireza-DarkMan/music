$(document).ready(function() {
	Synth instanceof AudioSynth;
	var piano = Synth.createInstrument('piano');
	var notX = $(document).width()/20;
	var notY = $(document).height()/4;
	$('body').click(function(e) {
		var note = ['C','C#','D','D#','E','F','F','F#','G','G#','A','A#','B'];
		var i, j;
		for(i=0; i<13;i++){
			if(e.pageX < notX *(Math.floor((i/2)+1)*2 + Math.floor((i+1)/2)))
				break;
		}
		for(j=0; j<4;j++){
			if(e.pageY < notY *(j+1))
				break;
		}
		console.log(note[i], j);
		piano.play(note[i], j+3, 3);
	});
});