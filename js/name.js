(
	function() { 
		let text = `Hi,0I'mSameer0Utradhi.`;
		let i = 0;
		const speed = 50;
		const textArea = document.getElementById('my-name');
		function typeIt() {
			if(i<text.length-1){
				if(i === 7) {
					textArea.insertAdjacentHTML('beforeend', '<br>')
				}
				textArea.insertAdjacentHTML('beforeend', `
					<span class="boom">${text[i]!=0?text[i]:'&nbsp;'}</span>
					`)
				i++;
				setTimeout(typeIt, speed);
			}
		}
		typeIt();

		function whatIam() {
			textArea.insertAdjacentHTML('afterend', `
					<div class="infoAboutMe">Web Developer | Cyber Security Enthusiast </div>
					<button class="text-area-about-button">
						<a href="https://sameerutradhi.netlify.com/about">About Me</a>
					</button>
				`);

		}
		whatIam();
	}

)();