$(function () {

    let growthAmount = 10;
    let growthInterval= 250;
    let width = 50;
    let numberOfCircle = 1;
    let height = 50;
    let container = $("#content");
    let interval = 0;

    function rand(min, max) {
        return min + Math.random() * (max - min);
    }
    function get_random_color() {
        let h = rand(1, 360);
        let s = rand(0, 200);
        let l = rand(0, 50);
        return 'hsl(' + h + ',' + s + '%,' + l + '%)';
    }

    $("#form").on("submit",function (e) {
        e.preventDefault();
        clearInterval(interval)
        growthAmount = $(this).find("[name=growthAmount]").val() !== ""?parseInt($(this).find("[name=growthAmount]").val() ):growthAmount;
        growthInterval = $(this).find("[name=growthInterval]").val() !== "" ? parseInt($(this).find("[name=growthInterval]").val()):growthInterval;
        width = $(this).find("[name=width]").val() !== ""? parseInt($(this).find("[name=width]").val()):width;
        height = $(this).find("[name=width]").val()? parseInt($(this).find("[name=width]").val()):height;
        numberOfCircle = $(this).find("[name=numberOfCircles]").val() !==""? (parseInt($(this).find("[name=numberOfCircles]").val())):numberOfCircle;
        let pos = (val) => Math.floor(Math.random()*val)+1
        let bubble = null;
        $('div.bubble').remove();
        for (let i = 0; i < numberOfCircle; i++){
            bubble = $('<div class="bubble">');
            bubble.css({
                "width": width,
                "height":height,
                "backgroundColor":get_random_color(),
                "top": pos(container.height()),
                "left":pos(container.width())
            }).mouseover(function () {
                $(this).animate({"opacity":"0.5"});
            }).mouseout(function () {
                $(this).animate({"opacity":"1"});
            });
            container.append(bubble);
        }
        container.find(".bubble").on("click",function (e) {
            $(this)
                .fadeTo(200,.2)
                .fadeTo(200,.8)
                .fadeTo(200,.2)
                .fadeTo(200,.8)
                .fadeTo(200,.2)
                .fadeOut(300);
        });

       interval =  setInterval(() => {
            $('div.bubble').css("width", (parseInt(bubble.css("width")) + growthAmount) + "px")
            .css("height", (parseInt(bubble.css("height")) + growthAmount) + "px");
        }, growthInterval);

    });


});