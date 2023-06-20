const endDate = "01 January 2024 00:00:00 AM";

document.getElementById('end-date').innerText = endDate;

const inputs = document.querySelectorAll('input');

function clock() {
    const end = new Date(endDate);    //Date() object converts enddate into miliseconds
    const now = new Date();           //Date() object gives current date in miliseconds
    const diff = (end - now)/1000;    //diff bw both dates in seconds

    if(diff<0) {
        document.getElementById('end').innerText = 'Time End';
        return;
    } 
    const days = Math.floor(diff/ 3600 /24); 
    inputs[0].value = days; 
    const hours = Math.floor((diff / 3600) % 24);
    inputs[1].value = hours; 
    const minutes= Math.floor((diff / 60) % 60);
    inputs[2].value = minutes;
    const seconds= Math.floor(diff % 60);
    inputs[3].value = seconds;
}   

setInterval(clock,1000);
