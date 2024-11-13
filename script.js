 const hour = document.getElementById('hr');
 const minute = document.getElementById('min');
const second = document.getElementById('sec');

// setInterval(()=>
// {
// 	let date = new Date();
// 	let hr=date.getHours()*30;
// 	let min=date.getMinutes()*6;
// 	let sec=date.getSeconds()*6;

// 	hour.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
// 	minute.style.transform=`rotateZ(${min}deg)`;
// 	second.style.transform=`rotateZ(${sec}deg)`;
// })

// setInterval(() =>
// {
// 	date = new date();
// 	hour = date.getHours()*30;
// 	minute = date.getMinutes()*6;
// 	second = date.getSeconds()*6;

// 	hour.style.transform=`rotateZ(${(hr)+(min/12)}deg)`;
// 	minute.style.transform=`rotateZ(${min}deg)`;
// 	second.style.transform=`rotateZ(${sec}deg)`;
// }, 1000);




setInterval(() => {
	let d = new Date(); //object of date()
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();
	let hr_rotation = 30 * hr + min / 2; //converting current time
	let min_rotation = 6 * min;
	let sec_rotation = 6 * sec;

	hour.style.transform = `rotateX(${hr_rotation}deg)`;
	minute.style.transform = `rotateX(${min_rotation}deg)`;
	second.style.transform = `rotateX(${sec_rotation}deg)`;
}, 1000);
