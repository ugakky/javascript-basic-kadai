const change = document.getElementById('btn');


  change.addEventListener('click', ()=>
  {
    document.getElementById('text').innerHTML = '<p id="text">ボタンがクリックされました</p>';
  });
