var year, mon, day;
function xweb1() {
    document.getElementById("web1").setAttribute("class", "page out");
    document.getElementById("main").style.backgroundColor = "#3ab6e4";
    setTimeout(function() {
            document.getElementById("web1").style.display = "none";
            document.getElementById("web2").style.display = "block";
        },
        500)

}
//回车键提交代码
function subCheck() {
    if (event.keyCode == 13) {
        document.all("tijiao").click();
    }
}

function getoldtime() {
    year = document.getElementById('year').value;
    mon = document.getElementById('mon').value;
    day = document.getElementById('day').value;
    if (year >= 1900 && year <= 2016) {
        if (mon <= 12 && mon >= 1) {
            if (day <= 31 && day >= 1) {
                document.getElementById("web2").setAttribute("class", "page out");
                document.getElementById("main").style.backgroundColor = "#0c895d";
                setTimeout(function() {
                        document.getElementById("web2").style.display = "none";
                        document.getElementById("web3").style.display = "block";
                    },
                    500)

                gettime();

            } else alert("日期输入错误");
        } else alert("月份输入错误");

    } else alert("年份输入错误");
}
//评论框显示代码
function xweb3() {
    document.getElementById("web4").style.display = "block";
    document.getElementById("xs").style.display = "none";
    document.getElementById("yc").style.display = "inline-block";
    location.hash = "#web4";
}
function yweb3() {
    document.getElementById("web4").style.display = "none";
    document.getElementById("yc").style.display = "none";
    document.getElementById("xs").style.display = "inline-block";
    location.hash = "#web3";
}
//输出时间代码
function gettime() {
    var old = new Date(mon + "/" + day + "/" + year);
    var oldtime = old.getTime();
    var now = new Date();
    var nowtime = now.getTime();
    var ing = (nowtime - oldtime) / 1000 / 60 / 60 / 24 / 30.4166666666667;
    var futuretime = oldtime + 2365200000000;
    var future = new Date(futuretime);
    var percent = ing / 9;
    var other = 900 - ing;
    if (other <= 0) {
        document.getElementById("sx").innerHTML = "寿星好！";
        document.getElementById("ing").innerHTML = "度过" + ing.toFixed(0) + "个月";
        var hother = 0 - other;
        document.getElementById("other").innerHTML = "抗拒" + hother.toFixed(0) + "个月";

        document.getElementById("percent").innerHTML = "已经走过常人" + percent.toFixed(9) + "%" + "历程";

    } else {
        //document.getElementById("now").innerHTML = "现在时间" + now;
        //document.getElementById("future").innerHTML = "寿命时间" + future;
        document.getElementById("ing").innerHTML = "你已经度过" + ing.toFixed(0) + "个月";
        document.getElementById("other").innerHTML = "剩余" + other.toFixed(0) + "个月";
        document.getElementById("percent").innerHTML = "已经走过" + percent.toFixed(9) + "%";
        document.getElementById("bar").style.width = percent.toFixed(9) + "%";
    }
}
setInterval(gettime, 100);
//多说评论代码
var duoshuoQuery = {
    short_name: "900y"
}; (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';
    ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:': 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8'; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ds);
})();