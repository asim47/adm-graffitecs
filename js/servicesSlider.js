
var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '29em', //distance from center
    start = -90, //shift start from 0
    level = 1,
    listData = loadItems();
init(listData);
$(document).on("click", ".service-intranet-main.active", function () {
    $(".box-section").removeClass("active");
    var self = $(this);
    $(this).find(".main-navigation").fadeOut(500, function () {
        $(self).find(".main-navigation .menu_item").removeClass("active");
    }).delay(1000).fadeIn(100);
    $(".service-intranet-first,.service-intranet-second").removeClass("animate-now");
    setTimeout(function () {
        $(".service-intranet-first .main-navigation .menu_item").removeClass("active");
        AddStyles();
    }, 1000);
    setTimeout(function () {
        $(".service-intranet-main").addClass("animate-now");
    }, 2000);
});

$(document).on("click", ".service-intranet-first.active", function (e) {
    e.preventDefault;
    $(".service-intranet-first,.service-intranet-second").removeClass("active");
    var self = $(this);
    $(this).find(".main-navigation").fadeOut(500, function () {
        $(self).find(".main-navigation .menu_item").removeClass("active");
    }).delay(1000).fadeIn(100);
    $(".service-intranet-second").removeClass("animate-now");
    setTimeout(function () {
        $(".service-intranet-second .main-navigation .menu_item").removeClass("active");
        AddStyles();
    }, 1000);
    setTimeout(function () {
        $(".service-intranet-first").addClass("animate-now");
    }, 2000);
});
$(document).on("click", ".service-intranet-second.active", function (e) {
    e.preventDefault;
    $(".service-intranet-second").removeClass("active");
    var self = $(this);
    $(this).find(".main-navigation").fadeOut(500, function () {
        $(self).find(".main-navigation .menu_item").removeClass("active");
    }).delay(1000).fadeIn(100);
    $(".service-intranet-third").removeClass("animate-now");
    setTimeout(function () {
        $(".service-intranet-third .main-navigation .menu_item").removeClass("active");
        AddStyles();
    }, 1000);
    setTimeout(function () {
        $(".service-intranet-second").addClass("animate-now");
    }, 2000);
});
function AddStyles() {
    $(".main-navigation").each(function (index) {
        $(this).find('.menu_item').each(function (index) {
            var a = 0.5 + (0.3 * index);
            $(this).css({
                "transition-delay": a + "s"
            });
        });
    });
}
function loadServiceItems($elements) {
    var odd = $elements.length%2;
 if (odd == 0) {
   var addnumber = 2;
 } else {
     var addnumber = 3;
 }
    var numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
        //total = (12 - numberOfElements) > 0 ? (12 - numberOfElements) : numberOfElements,
        slice = 180 * type / (numberOfElements + addnumber);
    $elements.each(function (i) {
        //debugger;
        i = i + 2;
        var $self = $(this),
            rotate;
        if ((12 < numberOfElements) && (i % 2 != 0)) {
            rotate = slice * (i) + start;
        } else {
            rotate = slice * i + start;
        }
        var rotateReverse = rotate * -1;
        if (i - 1 == Math.round(numberOfElements / 2)) {
            $self.addClass('center-list');
            radius = "24em";
            rotate = -2;
            //$self.css('background-color',$)
        } else {
            if((i + 1) - 1 == Math.round(numberOfElements / 2) || (i-1) - 1 == Math.round(numberOfElements / 2)){
                radius = '24.5em';
                $self.addClass('medium-list');
            }else{
                radius = '24.5em';
                $self.addClass('small-list');
            }
        }

        $self.attr('data-angle',rotateReverse).css({
            'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
        });
    });
}
function init(listData) {
    if ($(".service-intranet-main .intranet_service-ul").length) {
        $(".service-intranet-main .intranet_service-ul").remove();
    }
    var ulEle = $("<ul></ul>").addClass("intranet_service-ul main-navigation");
    listData["listItems"].forEach(function (val, i) {
        var _img = $("<img />").attr("src", val.url);
        var _text = $("<span class='_menu_title'><lable>"+val.name +"</lable></span>");//.text(val.name);
        var _link = $("<a href='' class='_menu_item'></a>");
        _link.append(_img).append(_text);
        var _list = $("<li class='menu_item'></li>").css('border', 'solid 2px ' + val.color);
        _list.append(_link);
        ulEle.append(_list);
    });
    loadServiceItems(ulEle.find("li"));
    $(".service-intranet-main .main-navigation").prepend(ulEle);
    $(".service-intranet-main").addClass("animate-now");
    $(".service-intranet-main .main-navigation .menu_item").click(function () {
        var self = $(this);
        level++;
        $(".main-navigation .menu_item").css("transition-delay","unset","transition",'none');
        $(".service-intranet-main .active-list").remove();
        window.setTimeout(function () {
            var elem = $(self).clone();
            var _elem = $('<div class="active-list" style="visibility:hidden"></div>').append(elem.find("img")).append(elem.find("span").removeClass("_menu_title"));
            $('.service-intranet-main').append(_elem);
            loadSecondLevel();
            AddStyles();
        }, 1000);

        $(".service-intranet-main").addClass("active").removeClass("animate-now");
        // setTimeout(function(){

        // },1400);
        setTimeout(function () {
             AddStyles();
            $(".service-intranet-first").addClass("animate-now");
        }, 1400);
        setTimeout(function () {
            $(".service-intranet-main .active-list").attr("style","");
        },2000);
        return false;
    });
}
function loadSecondLevel() {
    if ($(".service-intranet-first .intranet_service-ul").length) {
        $(".service-intranet-first .intranet_service-ul").remove();
    }
    var ulEle = $("<ul></ul>").addClass("intranet_service-ul main-navigation");
    listData["level2"].forEach(function (val, i) {
        var _img = $("<img />").attr("src", val.url);
        var _text = $("<span class='_menu_title'></span>").text(val.name);
        var _link = $("<a href='' class='_menu_item'></a>");
        _link.append(_img).append(_text);
        var _list = $("<li class='menu_item'></li>").css('border', 'solid 2px ' + val.color);;
        _list.append(_link);
        ulEle.append(_list);
    });
    loadServiceItems(ulEle.find("li"));
    $(".service-intranet-first .main-navigation").prepend(ulEle);
    $(".service-intranet-first .main-navigation .menu_item").click(function () {
        var self = $(this);
       $(".main-navigation .menu_item").css("transition-delay","");
       $(".service-intranet-first .active-list").remove();
        window.setTimeout(function () {
            var elem = $(self).clone();
            var _elem = $('<div class="active-list" style="visibility:hidden"></div>').append(elem.find("img")).append(elem.find("span").removeClass("_menu_title"));
            $('.service-intranet-first').append(_elem);
            thirdLevel();
        }, 1000);

        $(".service-intranet-first").addClass("active").removeClass("animate-now");
        setTimeout(function () {
           AddStyles();
            $(".service-intranet-second").addClass("animate-now");
        }, 1400);
        setTimeout(function () {
            $(".service-intranet-first .active-list").attr("style","");
        },2000);
        return false;
    });
}
function thirdLevel() {
    if ($(".service-intranet-second .intranet_service-ul").length) {
        $(".service-intranet-second .intranet_service-ul").remove();
    }
    var ulEle = $("<ul></ul>").addClass("intranet_service-ul main-navigation");
    listData["level3"].forEach(function (val, i) {
        var _img = $("<img />").attr("src", val.url);
        var _text = $("<span class='_menu_title'></span>").text(val.name);
        var _link = $("<a href='' class='_menu_item'></a>");
        _link.append(_img).append(_text);
        var _list = $("<li class='menu_item'></li>").css('border', 'solid 2px ' + val.color);;
        _list.append(_link);
        ulEle.append(_list);
    });
    loadServiceItems(ulEle.find("li"));
    $(".service-intranet-second .main-navigation").prepend(ulEle);
    $(".service-intranet-second .main-navigation .menu_item").click(function () {
        var self = $(this);
        $(".main-navigation .menu_item").css("transition-delay","");
        $(".service-intranet-second .active-list").remove();
        window.setTimeout(function () {
            var elem = $(self).clone();
            var _elem = $('<div class="active-list" style="visibility:hidden"></div>').append(elem.find("img")).append(elem.find("span").removeClass("_menu_title"));
            $('.service-intranet-second').append(_elem);
            AddStyles();
        }, 1000);

        $(".service-intranet-second").addClass("active").removeClass("animate-now");
        setTimeout(function () {
            AddStyles();
            $(".service-intranet-third").addClass("animate-now");
        }, 1400);
        setTimeout(function () {
            $(".service-intranet-second .active-list").attr("style","");
        },2000);
        return false;
    });
    //console.log(listData);
    // $(".service-intranet-first .main-navigation .menu_item").click(function(){
    //     var self = $(this);
    //    $(".main-navigation .menu_item").removeAttr("style")
    //       window.setTimeout(function(){
    //          $(self).addClass('active');
    //          AddStyles();
    //       },1000);

    //    $(".service-intranet-first").addClass("active").removeClass("animate-now");
    //     setTimeout(function(){
    //     $(".service-intranet-second").addClass("animate-now")
    //     },1400);
    // return false;
    // });

    //     $(".service-intranet-main .main-navigation .menu_item").click(function(){
    //         var self = $(this);
    //         level++;;
    //     $(".main-navigation .menu_item").removeAttr("style");
    //         window.setTimeout(function(){
    //             $(self).addClass('active');
    //             AddStyles();
    //         },1000);

    //     $(".service-intranet-main").addClass("active").removeClass("animate-now");
    //         setTimeout(function(){
    //         $(".service-intranet-first").addClass("animate-now");
    //         },1400);
    //         setTimeout(function(){
    //         $(".service-intranet-main").addClass("active-background");
    //         },1500);
    //     return false;
    // });
}
function loadItems() {
    var lists = {
        "listItems": [{
            "name": "Service Catalogue",
            "colr": "red",
            "level": "1",
            "childrens": "childrens",
            "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/1st_page/colored/service_cagalogue.png",
            "color": "#54bac1"
        },
        {
            "name": "Favourite Services",
            "colr": "red",
            "level": "1",
            "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/1st_page/colored/favourite_service.png",
            "color": "#ce6565"
        },
        {
            "name": "Services",
            "colr": "red",
            "level": "1",
            "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/1st_page/white/services.png",
            "color": "#c70218"
        },
        {
            "name": "Most Used Services",
            "colr": "red",
            "level": "1",
            "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/1st_page/colored/most_used_services.png",
            "color": "#a07ad5"
        },
        {
            "name": "Ask a Question",
            "colr": "red",
            "level": "1",
            "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/1st_page/colored/ask_question.png",
            "color": "#54bac1"
        }
    ],
        "level2": [
            {
                "name": "Marketing Office",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/megaphone.png",
                "color": "#5c5c5c"
            },
            {
                "name": "Starategic Planning & Performance Mangaement",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/stratigic_pannaing.png",
                "color": "#5c5c5c"
            }, {
                "name": "Most View",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/most_view.png",
                "color": "#5c5c5c"
            }, 
            {
                "name": "IT Sector",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/white/IT_services.png",
                "color": "#56bbc2"
            }, 
            {
                "name": "HR Services",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/hr_services.png",
                "color": "#5c5c5c"
            }, {
                "name": "Peformance Department",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/performance_department.png",
                "color": "#5c5c5c"
            }, {
                "name": "Marketing Office Services",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/megaphone.png",
                "color": "#5c5c5c"
            }
        ],
        "level3": [
            {
                "name": "Marketing Office",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/megaphone.png",
                "color": "#4c8cb4"
            },
            {
                "name": "Performance",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/performance_department.png",
                "color": "#cb5fcc"
            },
             {
                "name": "Spatial Data",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/3rd_page/colored/map.png",
                "color": "#4c8cb4"
            }, {
                "name": "Marketing Office",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/megaphone.png",
                "color": "#54bac1"
            }, {
                "name": "Performance Department",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/performance_department.png",
                "color": "#a07ad5"
            }, {
                "name": "Most View",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/most_view.png",
                "color": "#ec7bea"
            }, {
                "name": "Media & Photography Request",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/3rd_page/white/media.png",
                "color": "#54bac1"
            },
            {
                "name": "HR Services",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/3rd_page/colored/most_used_services.png",
                "color": "#ce6565"
            },
            {
                "name": "Performance Department",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/performance_department.png",
                "color": "#54bac1"
            }, {
                "name": "Marketing Office",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/megaphone.png",
                "color": "#4c8cb4"
            }, {
                "name": "Spatial Data",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/3rd_page/colored/map.png",
                "color": "#cb5fcc"
            }, {
                "name": "Performance",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/performance_department.png",
                "color": "#54bac1"
            }, {
                "name": "Marketing Office",
                "colr": "red",
                "level": "2",
                "url": "http://localhost:8080/saeed-new/images/adm_services_icon/icon/2nd_page/colored/megaphone.png",
                "color": "#4c8cb4"
            }
        ]
    }
    return lists;
}
