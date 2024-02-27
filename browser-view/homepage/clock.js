function showTime() {
    var date = new Date();
    var options = { weekday: 'long', day: 'numeric', month: 'long' }; // Specify date formatting options
    var formattedDate = date.toLocaleDateString('en-US', options); // Format the date
  
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
  
    h = (h > 12) ? h - 12 : h; // Convert to 12-hour format if necessary
    h = (h === 0) ? 12 : h; // Set hour to 12 for midnight
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
  
  
    var timeAndDate = formattedDate + ", " + h + ":" + m; // Combine formatted date and time
  
    document.getElementById("elclock").innerText = timeAndDate;
    document.getElementById("elclock").textContent = timeAndDate;
  
    setTimeout(showTime, 1000);
  }
  
  showTime(); // Start the clock
   