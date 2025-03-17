//your JS code here. If required.
daysOfAYear(let x){
	if(x%100==0){
		let a=parseInt(x/100);
		if(a%2==0){
			return 366;
		}
		else{
			return 365;
		}
	}
	if(x%4==0){
		return 366;
	}
	else{
		return 365;
	}
	
}