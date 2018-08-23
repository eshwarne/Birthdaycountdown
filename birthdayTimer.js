var disp="disp"
	var days_disp=document.getElementsByClassName(disp)[0];
	var hours_disp=document.getElementsByClassName(disp)[1]
	var minutes_disp=document.getElementsByClassName(disp)[2]
	var seconds_disp=document.getElementsByClassName(disp)[3]
	var bday=new Date("2018-08-26T00:00:00");
	console.log(bday);

	var timer=setInterval(function(){
		var now=new Date();
		var millDiff=bday.getTime()-now.getTime();
		var seconds=Math.floor((millDiff%(1000*60))/1000);
		var minutes=Math.floor((millDiff%(1000*60*60))/(1000*60));
		var hours=Math.floor((millDiff%(1000*60*60*24))/(1000*60*60));
		var days=Math.floor(millDiff/(1000*60*60*24))
		days_disp.innerHTML="<pre>"+days+'\nDays'+"</pre>";
		hours_disp.innerHTML="<pre>"+hours+'\nHours'+"</pre>";
		minutes_disp.innerHTML="<pre>"+minutes+'\nMinutes'+"</pre>";
		seconds_disp.innerHTML="<pre>"+seconds+'\nSeconds'+"</pre>";

	},1000)
