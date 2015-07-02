windowPositionEnum = {
    Top: 0,
    Body: 1
}

var currentWindowPosition = windowPositionEnum.Top;

$(window).scroll(function () {

    //ToDo: Look up enums in JavaScript
    var scrollEpsilon = 3;
    var currentSection = 0;

    // This needs to be hardcoded, because header.sticky has no height when the user 
    // is at the very top of the page.  Get this value from MainPage.css

    if ($(this).scrollTop() > 1 && currentWindowPosition == windowPositionEnum.Top) {

        currentWindowPosition = windowPositionEnum.Body;

        //$('#navlist').addClass("sticky");
        //$('#navlist li').addClass("sticky");
        //$('.navBarFixed').addClass("sticky");

        $("#navlist").animate({
            "font-size": "18px"
        }, { duration: 400, queue: false });

        $("#navlist li").animate({
            "line-height": "68px"
        }, { duration: 400, queue: false });

        $(".navBarFixed").animate({
            "height": "68px"
        }, { duration: 400, queue: false });
    }
    else if ($(this).scrollTop() <= 1 && currentWindowPosition == windowPositionEnum.Body) {

        currentWindowPosition = windowPositionEnum.Top;

        $("#navlist").animate({
            "font-size": "28px"
        }, { duration: 400, queue: false });

        $("#navlist li").animate({
            "line-height": "108px"
        }, { duration: 400, queue: false });

        $(".navBarFixed").animate({
            "height": "108px"
        }, { duration: 400, queue: false });

        //$('#navlist').removeClass("sticky");
        //$('#navlist li').removeClass("sticky");
        //$('.navBarFixed').removeClass("sticky");
    }

    if ($(this).scrollTop() >= $('#SkillsSection').offset().top - $('#navlist li.sticky').height() - scrollEpsilon) {
        currentSection = 1;
    }

    if ($(this).scrollTop() >= $('#ExperienceSection').offset().top - $('#navlist li.sticky').height() - scrollEpsilon) {
        currentSection = 2;
    }

    if ($(this).scrollTop() >= $('#ProjectsSection').offset().top - $('#navlist li.sticky').height() - scrollEpsilon) {
        currentSection = 3;
    }

    // If we're below the contact section, or at the bottom of the page:
    if ($(this).scrollTop() >= $('#ContactSection').offset() + $('#ContactSection').height() ||
        $(this).scrollTop() + $(window).height() == $(document).height()) {
        currentSection = 4;
    }

    if ($(this).scrollTop() < $('#SkillsSection').offset().top - $('#navlist li.sticky').height()) {
        currentSection = 0;
    }

    $('#navlist li > div > a').animate({
        "color": "white",
        "font-size": "18px"
    }, { duration: 400, queue: false });

    //$('#SkillsNavBarLi a').removeClass("emphasized");
    //$('#ExperienceNavBarLi a').removeClass("emphasized");
    //$('#projectsNavBarLi a').removeClass("emphasized");
    //$('#contactNavBarLi a').removeClass("emphasized");

    if (currentSection == 1) {
        $('#SkillsNavBarLi a').animate({
            "color": "red",
            "font-size": "20px"
        }, { duration: 400, queue: false });
    }

    else if (currentSection == 2) {
        $('#ExperienceNavBarLi a').animate({
            "color": "#335C7D",
            "font-size": "20px"
        }, { duration: 400, queue: false });
    }

    else if (currentSection == 3) {
        $('#projectsNavBarLi a').animate({
            "color": "#335C7D",
            "font-size": "20px"
        }, { duration: 400, queue: false });
    }

    else if (currentSection == 4) {
        $('#contactNavBarLi a').animate({
            "color": "#335C7D",
            "font-size": "20px"
        }, { duration: 400, queue: false });
    }

});