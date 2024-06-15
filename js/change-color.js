var heading = document.querySelector('#heading');

alert("hello");

var name=prompt("이름을 입력하세요", (""));

function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}


heading.onclick = function() {

  while(1) {
    heading.style.color = "red";
    sleep(500);
    heading.style.color = "blue";
    sleep(500);
  }

}
