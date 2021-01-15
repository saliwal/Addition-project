var one = document.getElementById("one");
var two = document.getElementById("two");
var addSum = document.getElementById("add-them");

one.addEventListener('input', add);
two.addEventListener('input', add);

function add(){
    var a = parseFloat(one.value) || 0;
    var b = parseFloat(two.value) || 0;
    addSum.innerHTML ="Hello your totals is:"  + "  " +  (a+b);
}