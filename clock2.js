var span = document.getElementById('span2');

function time() {
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2);
}

setInterval(time, 1000);