/*$(document).ready(function(){
$(".p1").click(function(){
    $(".images").css({
        transform:'translateX(0px)'})
})
$(".p2").click(function(){
    $(".images").css({
        transform:'translateX(-300px)'})
})
$(".p3").click(function(){
    $(".images").css({
        transform:'translateX(-600px)'})
})
})*/
$(document).ready(function(){
    var n = 0;
    var timerId = setInterval(()=>{
    n += 1
allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
},3000)
var allButtons = $("#buttons > span")
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        clearInterval(timerId)
        var index = $(x.currentTarget).index()
        /*console.log(index)*/
        var p = index * -300
        $("#images").css({
            transform:'translate('+p+'px)'
        })
        p = index 
        allButtons.eq(p)
             .addClass('red')
             .siblings('.red').removeClass('red');
             timerId = setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
},3000)
    })
}

var size = allButtons.length
allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')




$('.win').on('mouseenter',function(){
    clearInterval(timerId)
})
$('.win').on('mouseleave',function(){
  timerId = setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
},3000)
})
})