document.addEventListener('DOMContentLoaded', function() {
  var title = onetitle.toString().split('\"')[1];
  var quote = oneword.toString().split('\"')[1];

  document.getElementById('title').innerText = title;
  document.getElementById('quote').innerText = quote;
})
