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
var allButtons = $("#buttons > span")
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        console.log(index)
        var p = index * -300
        $("#images").css({
            transform:'translate('+p+'px)'
        })
        p = index 
        allButtons.eq(n)
             .addClass('red')
             .siblings('.red').removeClass('red')
    })
}
var n = 0;
var size = allButtons.length
allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')

var timerId = setInterval(()=>{
    n += 1
allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
},3000)


$('.windows').on('mouseenter',function(){
    windows.clearInetrval(timerId)
})
$('.windows').on('mouseleave',function(){
  timerId = setInterval(()=>{
    n+=1
    allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
},3000)
})
})