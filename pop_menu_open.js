let fronton_open = document.getElementById('fronton_open');
let fronton_div = document.getElementById('fronton_div');
let fronton_close = document.getElementById('fronton_close');
let window_doors_open = document.getElementById('window_doors_open');
let window_doors_close = document.getElementById('window_doors_close');
let window_doors = document.getElementById('window_doors');
let doors_open = document.getElementById('doors_open');
let doors_close = document.getElementById('doors_close');
let doors_div = document.getElementById('doors_div');


doors_open.addEventListener('click', function(){
    doors_div.style = "display:flex;"
    doors_open.style = 'display : none;';
    doors_close.style = 'display : inline;'
})
doors_close.addEventListener('click', function(){
    doors_div.style = "display:none;"
    doors_open.style = 'display : inline;';
    doors_close.style = 'display : none;'
    document.getElementById('door_quantity').value = '';
    document.getElementById('door_height').value = '';
    document.getElementById('door_widht').value = '';
})
fronton_open.addEventListener('click', function(){
    fronton_div.style='display : flex;';
    fronton_open.style = 'display : none;';
    fronton_close.style = 'display : inline;';
})
fronton_close.addEventListener('click',function(){
    fronton_div.style='display : none;';
    fronton_open.style = 'display : inline;';
    fronton_close.style = 'display : none;';
    document.getElementById('fronton_value').value = '';
    document.getElementById('front_h').value = '';
    document.getElementById('front_w').value = '';
})
window_doors_open.addEventListener('click', function(){
    window_doors_open.style = 'display:none';
    window_doors_close.style = 'display : inline;';
    window_doors.style = 'display : flex;';
})
window_doors_close.addEventListener('click',function(){
    window_doors_open.style = 'display:inline';
    window_doors_close.style = 'display : none;';
    window_doors.style = 'display : none;';
    function cleanSearch(){
        document.getElementById('window_quantity').value = '';
        document.getElementById('window_height').value = '';
        document.getElementById('window_widht').value = '';
    }
    cleanSearch();
})