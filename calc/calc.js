function update(n) {
  document.querySelector('input').value = n
}
function append(n) {
  document.querySelector('input').value += n
}
function calc(){
  const v = document.querySelector('input').value
  try {
    const f = new Function( 'return ' + v ) //valueを文字列に変換
    update(f().toString()) //fの実行結果を文字列変換させてupdate
  } catch(error) {
    update(error)
  }
}

function add() {
  const lists = document.getElementById('lists')
  const v = document.querySelector('input').value
  lists.textContent = v;
}
