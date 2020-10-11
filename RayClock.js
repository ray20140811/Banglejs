function showTime() {
  g.clear();
  g.setFont("Vector",25);
  g.drawString("Ray's Clock", 25, 50);
  
  var display = '';
  
  var d = new Date();
  
  var year = d.getFullYear();
  var month = d.getMonth() + 1;
  var day = d.getDate();
  
  display = year.toString() + '/' + month.toString() + '/' + day.toString();
  g.drawString(display,0,120);
  
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  
  display = h + ":" + m + ":" + s;
  g.drawString(display,50,200);
  
}

timeInterval = setInterval(showTime, 1000);
