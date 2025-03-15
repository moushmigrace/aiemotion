function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    let timeString = `${hours}:${minutes} ${ampm}`;
    let dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.querySelector('.time').innerText = timeString;
    document.querySelector('.date').innerText = dateString;
}

setInterval(updateTime, 1000);
updateTime();
