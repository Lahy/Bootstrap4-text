var counter = 0;
$(function(){
    $.ajax({
        url:'http://ipaddress:9001/...',
        type:'GET',
        dataType:'json',
        method:'GET',
        success:function(data){
            /*console.log(data)
            console.log(data.retData.length)*/
            $(".imgone").attr('src',data.retData[0].banAddress);
            $(".imgtwo").attr('src',data.retData[1].banAddress);
            $(".imgthree").attr('src',data.retData[2].banAddress);
        }
    });
})
$(function(){
    var num = {"curPage":counter,"num":"4"};
    counter = counter + 4;
    $.ajax({
        url:'http://ipaddress:9001/...',
        type:'POST',
        dataType:'json',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(num),
        success:function(data){
            //alert(data);
            /*console.log(data)
            console.log(data.retData)
            console.log(data.retData.length)*/
            for(var i = 0;i < data.retData.length;i++){ 
                //console.log(data.retData[i].flag)
                if(data.retData[i].flag == 1){
                    var button = '<button>Take</button>'
                    var html = document.getElementById("mid").innerHTML;
                    document.getElementById("mid").innerHTML = html +
                    "<div class='card'><div class='card-body'><img class='card-img-top' src='" + 
                    data.retData[i].tokensymbol + 
                    "'><div class='list_right'><h6>" + 
                    data.retData[i].keyword + 
                    "</h6><p>"+
                    data.retData[i].tokenname+"</p>" + button +"</div></div></div>";
                }else{
                    var button = "<span style='color:#737373;background:none;'>Take Over</span>"
                    var html = document.getElementById("mid").innerHTML;
                    document.getElementById("mid").innerHTML = html +
                    "<div class='card' style='background:#e8e8e8;color:#737373;'><div class='card-body'><img class='card-img-top' src='" + 
                    data.retData[i].tokensymbol + 
                    "'><div class='list_right'><h6 style='color:#737373;'>" + 
                    data.retData[i].keyword + 
                    "</h6><p style='color:#737373;'>"+
                    data.retData[i].tokenname+"</p>" + button +"</div></div></div>";
                }
                
                //console.log(document.getElementById("mid").innerHTML);
                
            }
        }
    });
    $("#addlist").on('click',function(){
        var numb = {"curPage":counter,"num":"4"};
        $.ajax({
            url:'http://ipaddress:9001/...',
            type:'POST',
            dataType:'json',
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(numb),
            success:function(data){
                for(var i = 0;i < data.retData.length;i++){ 
                    if(data.retData[i].flag == 1){
                        var button = '<button>Take</button>'
                        var html = document.getElementById("mid").innerHTML;
                        document.getElementById("mid").innerHTML = html +
                        "<div class='card'><div class='card-body'><img class='card-img-top' src='" + 
                        data.retData[i].tokensymbol + 
                        "'><div class='list_right'><h6>" + 
                        data.retData[i].keyword + 
                        "</h6><p>"+
                        data.retData[i].tokenname+"</p>" + button +"</div></div></div>";
                    }else{
                        var button = "<span style='color:#737373;background:none;'>Take Over</span>"
                        var html = document.getElementById("mid").innerHTML;
                        document.getElementById("mid").innerHTML = html +
                        "<div class='card' style='background:#e8e8e8;color:#737373;'><div class='card-body'><img class='card-img-top' src='" + 
                        data.retData[i].tokensymbol + 
                        "'><div class='list_right'><h6 style='color:#737373;'>" + 
                        data.retData[i].keyword + 
                        "</h6><p style='color:#737373;'>"+
                        data.retData[i].tokenname+"</p>" + button +"</div></div></div>";
                    }
                }
            }
        });
        counter = counter + 4;
    })

})
