windowPositionEnum = {
    Top: 0,
    Body: 1
}

windowWidthEnum = {
    sm: 0,
    lg: 1
}

liAnimationState = {
    On: 0,
    Off: 1
}

var navBarState = {
    small: 0, // Phone Sized
    large: 1, // Greater than phone sized
    top: 2 // Screen Large, and Scroll Viewport at the very top
}

curCssState = navBarState.top;

function changeCssState(navBarState) {

    switch (curCssState) {
        case 0:
            $(".navbar-brand").removeClass("sm");
            $(".navBarFixed").removeClass("sm");
            $(".navBarContainer").removeClass("sm");
            $("#navlist li a").removeClass("sm");
            $(".navbar-header").removeClass("sm");
            $("#navlist").removeClass("sm");
            $("#navlist li").removeClass("sm");
            $("#myNavbar").removeClass("sm");

        case 1:
            $(".navBarFixed").removeClass("lg");
            $(".navbar-brand").removeClass("lg");
            $("#navlist li").removeClass("lg");

        case 2:
            $(".navBarFixed").removeClass("top");
            $(".navbar-brand").removeClass("top");
            $("#navlist li").removeClass("top");
    }

    curCssState = navBarState;

    switch (navBarState) {
        case 0:
            $(".navbar-brand").addClass("sm");
            $(".navBarFixed").addClass("sm");
            $(".navBarContainer").addClass("sm");
            $("#navlist li a").addClass("sm");
            $(".navbar-header").addClass("sm");
            $("#navlist").addClass("sm");
            $("#navlist li").addClass("sm");
            $("#myNavbar").addClass("sm");
            break;
        case 1:
            $(".navBarFixed").addClass("lg");
            $(".navbar-brand").addClass("lg");
            $("#navlist li").addClass("lg");
            break;

        case 2:
            $(".navBarFixed").addClass("top");
            $(".navbar-brand").addClass("top");
            $("#navlist li").addClass("top");
            $("#navlist").addClass("top");
            break;
        default:
            throw EventException;
    }
}

var skillsAnimState = false;
var experiencesAnimState = false;
var projectsAnimState = false;
var contactAnimState = false;

var animationInDuration = 400;
var animationOutDuration = 400;
var animationDuration = 400;

var emphasizedFontSize = "20px";
var deemphasizedFontSize = "18px";
var navbarAtTopFontSize = "28px";

var lastSection = 0;

var currentWindowPosition = windowPositionEnum.Top;

var currentWindowWidth = windowWidthEnum.lg;

//
// Deemphasizes the section header in the navbar, if in the necessary state.
//
function navListDeemphasize() {
    if (skillsAnimState) {
        skillsAnimState = false;

        $('#SkillsNavBarLi a').animate({
            color: "white",
            "font-size": deemphasizedFontSize
        }, { duration: animationOutDuration, queue: false });
    }

    else if (experiencesAnimState) {
        experiencesAnimState = false;

        $('#ExperienceNavBarLi a').animate({
            color: "white",
            "font-size": deemphasizedFontSize
        }, { duration: animationOutDuration, queue: false });
    }

    else if (projectsAnimState) {
        projectsAnimState = false;

        $('#projectsNavBarLi a').animate({
            color: "white",
            "font-size": deemphasizedFontSize
        }, { duration: animationOutDuration, queue: false });
    }

    else if (contactAnimState) {
        contactAnimState = false;

        $('#contactNavBarLi a').animate({
            color: "white",
            "font-size": deemphasizedFontSize
        }, { duration: animationOutDuration, queue: false });
    }
}

$(window).scroll(function () {

    //Don't do any animations on the phone size.
    //if (window.innerWidth < 768) {
    //    return;
    //}

    //if ($(this).scrollTop() > 1) {

    //    changeCssState(navBarState.large);
    //}

    //else if ($(this).scrollTop() <= 1) {

    //    changeCssState(navBarState.top);
    //}


    //Don't do any animations on the phone size.
    if (window.innerWidth < 768) {
        return;
    }

    //ToDo: Look up enums in JavaScript
    var scrollEpsilon = 3;
    var currentSection = 0;

    if ($(this).scrollTop() > 1 && currentWindowPosition == windowPositionEnum.Top) {

        currentWindowPosition = windowPositionEnum.Body;

        $("#navlist a").animate(
            {
                "font-size": deemphasizedFontSize
            },
            {
                duration: animationDuration, queue: false,
                complete: function () {
                    changeCssState(navBarState.large);
                }
            }
        );

        $("#navlist li").animate({
            "line-height": "68px"
        }, { duration: animationDuration, queue: false });

        $(".navBarFixed").animate({
            "height": "68px"
        }, { duration: animationDuration, queue: false });
    }
    else if ($(this).scrollTop() <= 1 && currentWindowPosition == windowPositionEnum.Body) {

        currentWindowPosition = windowPositionEnum.Top;

        $("#navlist li").animate({
            "line-height": "108px"
        }, { duration: animationDuration, queue: false });

        $(".navBarFixed").animate({
            "height": "108px"
        }, { duration: animationDuration, queue: false });

        $('#navlist a').animate(
            {
                color: "white",
                "font-size": navbarAtTopFontSize
            },
            {
                duration: animationInDuration,
                queue: false,
                complete: function () {
                    changeCssState(navBarState.top);
                }
            }
        );
    }

    if ($(this).scrollTop() >= $('#SkillsSection').offset().top - $('#navlist li').height() - scrollEpsilon) {
        currentSection = 1;
    }

    if ($(this).scrollTop() >= $('#ExperienceSection').offset().top - $('#navlist li').height() - scrollEpsilon) {
        currentSection = 2;
    }

    if ($(this).scrollTop() >= $('#ProjectsSection').offset().top - $('#navlist li').height() - scrollEpsilon) {
        currentSection = 3;
    }

    // If we're below the contact section, or at the bottom of the page:
    if ($(this).scrollTop() >= $('#ContactSection').offset() + $('#ContactSection').height() ||
        $(this).scrollTop() + $(window).height() == $(document).height()) {
        currentSection = 4;
    }

    if ($(this).scrollTop() < $('#SkillsSection').offset().top - $('#navlist li').height()) {
        currentSection = 0;
    }

    if (lastSection != currentSection) {
        lastSection = currentSection;

        if (currentSection == 1) {
            navListDeemphasize();

            skillsAnimState = true;

            $('#SkillsNavBarLi a').animate({
                color: "#335C7D",
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }

        else if (currentSection == 2) {
            navListDeemphasize();
            experiencesAnimState = true;
            $('#ExperienceNavBarLi a').animate({
                color: "#335C7D",
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }

        else if (currentSection == 3) {
            navListDeemphasize();
            projectsAnimState = true;
            $('#projectsNavBarLi a').animate({
                color: "#335C7D",
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }

        else if (currentSection == 4) {
            navListDeemphasize();
            contactAnimState = true;
            $('#contactNavBarLi a').animate({
                color: "#335C7D",
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }
    }
});

$(window).resize(function () {

    if (currentWindowWidth == windowWidthEnum.lg && window.innerWidth < 768) {
        currentWindowWidth = windowWidthEnum.sm;
        changeCssState(navBarState.small);
        return;
    }
    else if (currentWindowWidth == windowWidthEnum.sm && window.innerWidth > 768) {
        currentWindowWidth = windowWidthEnum.lg;
        changeCssState(navBarState.large);
        return;
    }
});