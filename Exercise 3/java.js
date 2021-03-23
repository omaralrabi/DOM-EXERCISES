var btn = document.getElementById('submit')
btn.addEventListener('click',volume_sphere)
function volume_sphere()
 {   
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById('volume').value = volume;
 }