if (null != document) {

    /*Расстановка дефолтных значений в админпанель*/
    for (var n = 1; n < 10; n++) {
        document.getElementById("new_" + n).checked = true;
        document.getElementById("sale_" + n).checked = true;
        /*
        document.getElementById("price_" + n).defaultValue = "249.00";
        document.getElementById("newPrice_" + n).defaultValue = "299.00";
        */
    }

    
    var i;
    var new_checkBox = [];
    var sale_checkBox = [];
    /*
    var img_list = [];
    */

    /*Запись массивов элементов*/
    for (var n = 1; n < 10; n++) {
        new_checkBox[n - 1] = document.querySelector("#new_" + n);
        sale_checkBox[n - 1] = document.querySelector("#sale_" + n);
        /*
        img_list[n - 1] = document.querySelector("#img_list_" + n);
        */
    }
    
    /*Включение и отключение NEW*/
    function newcheck(i) {
        if (new_checkBox[(i - 1)].checked == true) {
            console.log("true");
            document.getElementById("div_new_" + i).classList.remove("hide");
        }
        else {
            console.log("false");
            document.getElementById("div_new_" + i).classList.add("hide");
        };
    };

    /*Включение и отключение SALE*/
    function salecheck(i) {
        if (sale_checkBox[(i - 1)].checked == true) {
            console.log("true");
            document.getElementById("div_sale_" + i).classList.remove("hide");
        }
        else {
            console.log("false");
            document.getElementById("div_sale_" + i).classList.add("hide");
        };
    };
    
    /*Переключение картинок*/
    /*
    function updateImg(i) {
        var re = new RegExp(".");
        console.log(re);
        var selectedIndex = img_list[(i - 1)].selectedIndex;
        document.getElementById("mainBlock__img_" + i).classList.remove("mainBlock__img_\d");
        console.log("mainBlock__img_" + re);
        //document.getElementById("mainBlock__img_" + i).classList.add("mainBlock__img_" + (selectedIndex + 1));
        //console.log(img_list[(i - 1)].selectedIndex);
        //document.getElementById("glink1").selectedIndex;
        //img_list[(i - 1)].selectedIndex;
    };
    */




}

