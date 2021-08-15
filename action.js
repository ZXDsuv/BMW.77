window.onload = function() {
    var liList = document.getElementById('nav-ul').getElementsByTagName('li');
    var cctvG = document.querySelectorAll('.cctvGood');
    var aList = document.getElementsByTagName('li');
    var a = document.getElementById('nav-ul');
    var al = document.querySelectorAll("a");
    var box = document.getElementById("touminghezi");
    var w = document.getElementById('areaLogo').querySelector('img');
    var M = document.getElementById('da').querySelector('img');
    var ot = document.getElementById("qiu").querySelector(".ot");
    var om = document.getElementById("qiu").querySelector("img");
    var oz = document.getElementById("bq");
    var ta = document.getElementById("ta");
    var yue = document.getElementById("yue"); // console.log(ta); 
    for (var i = 0; i < aList.length; i++) {
        aList[i].onmousemove = function() {
            box.id = "ad";
            box.style.animation = "run 0.5s"; // 
            box.style.transition = "all ease 0.5s ";
            box.style.height = 422 + "px";
            w.style.opacity = 0;
            M.style.opacity = "1";
            ot.style.color = "black";
            om.style.opacity = 0;
            oz.style.opacity = "1";
            ta.style.color = "#717171";
            yue.style.color = "#717171"; //
            om.style.color = "black" // 
                // aList.style.color = "black";
        }
        aList[i].onmouseout = function() {
            box.style.transition = "all ease 0.5s ";
            box.style.animation = "end 1s";
            // 
            box.style.transformAlign = " 50% 50%;"
            box.id = "touminghezi";
            w.style.opacity = "1";
            M.style.opacity = 0;
            om.style.opacity = "1";
            oz.style.opacity = 0;
            ot.style.color = "#fff";
            ta.style.color = "#F9DAE7";
            yue.style.color = "#F9DAE7";
        }
    }
    var hanbao = document.getElementById("hanbao");
    var rn = document.getElementById("left");
    var modal = document.querySelector(".modal");
    // 
    console.log(left);
    var count = 0;
    hanbao.onclick = function() {
        count++;
        rn.style.marginLeft = 0 + "px";
        hanbao.style.cursor = "pointer"

        hanbao.style.zIndex = 100;
        cha.style.zIndex = 101;

        modal.style.opacity = 1;
        modal.style.zIndex = 10;
        hanbao.style.opacity = 0;





    }
    var cha = document.getElementById("cha");
    cha.onclick = function() {
        rn.style.marginLeft = -290 + "px";
        hanbao.style.opacity = "1";
        modal.style.opacity = 0;
        cha.style.zIndex = 100;
        hanbao.style.zIndex = 101;
        modal.style.zIndex = -1;
    }

    //模块选项卡
    var textA = document.querySelector("#text-a");
    var colList = textA.querySelectorAll("li");
    var ulClass = document.querySelectorAll(".ul");
    for (var i = 0; i < colList.length; i++) {
        colList[i].setAttribute('index', i);
        colList[i].onclick = function() {
            //排他思想，全清再选
            for (var i = 0; i < colList.length; i++) {
                colList[i].className = "";
            }
            this.className = "col";

            var index = this.getAttribute('index');
            for (var i = 0; i < ulClass.length; i++) {
                ulClass[i].style.display = "none";
            }
            ulClass[index].style.display = "block";




        }
    }
    var cctv18 = document.querySelector('.cctv18');
    var cctv19 = document.querySelector('.cctv19');
    cctv19.onmousemove = function() {
        cctv18.style.opacity = "1";
    }
    cctv19.onmouseout = function() {
        cctv18.style.opacity = "0";
    }


    var mi = document.querySelectorAll('.mi');

    var trs = document.getElementsByClassName('trs');

    var hw = document.querySelectorAll('.hw');
    console.log(hw);
    var fh = document.querySelector('.hw ');
    var sum = 0;
    for (let i = 0; i < mi.length; i++) {
        mi[i].onclick = function() {

            sum++;
            if (sum % 2 !== 0) {
                trs[i].style.transform = "rotateZ(90deg)";
                hw[i].style.height = 160 + "px";
                hw[i].style.transform = "scaleY(" + 1 + ")";
                hw[i].style.transformOrigin = "50% 0";
                // fh.style.height = 80 + "px";


            } else {
                trs[i].style.transform = "rotateZ(0deg)";
                hw[i].style.height = "0px";
                hw[i].style.transform = "scaleY(0)";

            }
        }
    }
}