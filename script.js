

const NAME  = 'Eiu'

const calcTime = () => {
	let	ampm  = "AM",
			sal   = "Good morning",
			date  = new Date(),
			hours = date.getHours(),
			mins  = date.getMinutes(),
			days  = date.getDate(),
			months= date.getMonth()
	
	hours > 12 && (sal = "Good afternoon")
	hours > 18 && (sal = "Good evening")
	hours > 11 && hours < 24 && (ampm = "PM")
	hours > 12 && (hours -= 12)
	hours < 10 && (hours = '0' + hours)
	mins  < 10 && (mins = '0' + mins)
	days == 5 && months == 11 && (sal = "Happy birthday")
	renderClock(hours, mins, sal, ampm)	
}

const renderClock = (h, m, s, a) => {
	const clock = document.querySelector('.clock')
	
	clock.querySelector('#time').innerText = `${h}:${m}`
	clock.querySelector('#ampm').innerText = a
	clock.querySelector('#greetings').innerText = `${s}, ${NAME}`
}

setInterval(() => calcTime(), 500)
