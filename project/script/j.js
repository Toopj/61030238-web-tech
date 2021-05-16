//เป็นการติดต่อ  Object Form HTML
let bgHead = document.getElementById('bgHead');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');


btn1.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#FF6347"; //เป็นการสร้งปุ่มลิงค์กับ css tomato
});

btn2.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#EE82EE"; //เป็นการสร้งปุ่มลิงค์กับ css violet
});

btn3.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#F5DEB3"; //เป็นการสร้งปุ่มลิงค์กับ css wheat
});

btn4.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#FFFF00"; //เป็นการสร้งปุ่มลิงค์กับ css yellow
});

btn5.addEventListener('click', function() {
    bgHead.style.backgroundColor = "#9ACD32"; //เป็นการสร้งปุ่มลิงค์กับ css yellowgreen
});