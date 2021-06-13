
var nums = document.getElementsByClassName('num'),
number1Top = nums[0].getBoundingClientRect().top,
start1 = +nums[0].innerHTML, end1 = +nums[0].dataset.max,
number2Top = nums[1].getBoundingClientRect().top,
start2 = +nums[1].innerHTML, end2 = +nums[1].dataset.max,
number3Top = nums[2].getBoundingClientRect().top,
start3 = +nums[2].innerHTML, end3 = +nums[2].dataset.max;

nums[0].classList.add('active');
nums[1].classList.add('active');
nums[2].classList.add('active');


var interval1 = setInterval(function() {
    nums[0].innerHTML = ++start1;
    if(start1 == end1) {
        clearInterval(interval1);
    }
});
var interval2 = setInterval(function() {
    nums[1].innerHTML = ++start2;
    if(start2 == end2) {
        clearInterval(interval2);
    }
});
var interval3 = setInterval(function() {
    nums[2].innerHTML = ++start3;
    if(start3 == end3) {
        clearInterval(interval3);
    }
});

new WOW().init();