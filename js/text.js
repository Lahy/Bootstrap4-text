$(function(){
    $.ajax({
        url:'http://ipadress:9001/banner/findBannerTop3',
        type:'GET',
        dataType:'json',
        method:'GET',
        success:function(data){
            /*
            *alert(data);
            *console.log(data.retData[2].banAddress);
            *var box = $(".imgone")[0].src;
            */
            $(".imgone").attr('src',data.retData[0].banAddress);
            $(".imgtwo").attr('src',data.retData[1].banAddress);
            $(".imgthree").attr('src',data.retData[2].banAddress);
            /*var box2 = $(".imgone")[0].src;
            var box3 = $(".imgtwo")[0].src;
            var box4 = $(".imgthree")[0].src;
            console.log(box)
            console.log(box2)
            console.log(box3)
            console.log(box4)*/
        }
    });
    
})
