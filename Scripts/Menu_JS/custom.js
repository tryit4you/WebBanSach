$(document).ready(onStartUp);
var objactive = null;
function onStartUp() {

    RegEvent_SubMenu();
//    RegEvent_Slide();
    $('#sethomepage').click(function () {
        $.setHomepage(document.domain);
    });
    RegEvent_tab(".modtab");
    //RegEvent_scroller();
    RegEvent_TabGallery();


    objactive = $(".bgheader2 #topmenu li.active");

    pos = $(".bgheader2 #topmenu").eq(0).position();
    $(".bgheader2 #topmenu ul.sf-menu")
		.css("left", (pos.left + 5) + 'px')
		.css("width", "931px")
		.css('background', '#f1f9fd');

    $(".bgheader2 #topmenu li").mouseover(function () {
        $(".bgheader2 #topmenu li").removeClass('active');
        $(this).addClass('active');
    });
    $(".bgheader2 #topmenu").mouseout(function () {
        $(".bgheader2 #topmenu li").removeClass('active');

        objactive.addClass('active');

    });
}
//function RegEvent_Slide() {
//    $('#slide').jqFancyTransitions({ width: 704, height: 238, navigation: true, link: true });
//}
function RegEvent_SubMenu() {
    $("#topmenu").superfish();

}



function RegEvent_tab(parent) {
    $(parent + " ul.mtab li").mouseover(function () {
        $(parent + " ul.mtab li a").removeClass("active");
        $(this).find("a").addClass("active");
        var index = $(parent + " ul.mtab li").index(this);

        $(parent + " .mcont .contenttab").hide();
        $(parent + " .mcont .contenttab").eq(index).show();
        return false;
    });
}
function RegEvent_scroller() {
    $("#mycarousel").jcarousel({
        auto: 2,
        wrap: 'last',

        scroll: 1,
        initCallback: mycarousel_initCallback,
        // This tells jCarousel NOT to autobuild prev/next buttons
        buttonNextHTML: '',
        buttonPrevHTML: ''
    });
}

function mycarousel_initCallback(carousel) {
    $('#goright').bind('click', function () {
        carousel.next();
        return false;
    });

    $('#goleft').bind('click', function () {
        carousel.prev();
        return false;
    });
};

function RegEvent_TabGallery() {
    $("#slideshow .listtab a").mouseover(function () {
        $("#slideshow .listimage img").hide();
        var index = $("#slideshow .listtab a").index(this);
        $("#slideshow .listimage img").eq(index).show();

        $("#slideshow .listtab a").removeClass('active');
        $(this).addClass('active');
    });
}


jQuery.extend({
    setHomepage: function (url) {
        if (document.all) {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(url);
        }
        else if (window.sidebar) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                }
                catch (e) {
                    var strTemp = '';
                    strTemp += "this action was aviod by your browser,";
                    strTemp += "if you want to enable,please enter about:config in your address line,";
                    strTemp += "and change the value of signed.applets.codebase_principal_support to true";
                    alert(strTemp);
                }
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1']
     .getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', url);
        }
    }
});


