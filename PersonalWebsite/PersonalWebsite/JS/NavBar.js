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
    top: 2, // Screen Large, and Scroll Viewport at the very top
    uninitialized: 3
}

curCssState = navBarState.uninitialized;

function initializeCssState() {
    if (window.innerWidth < 768) {
        changeCssState(navBarState.small);
    }
    else {
        changeCssState(navBarState.top);
    }
}

function changeCssState(navBarState) {

    if (curCssState == navBarState) {
        return;
    }

    switch (curCssState) {
        case 0:
            $(".navbar-brand").removeClass("sm");
            $(".navBarFixed").removeClass("sm");
            $(".navbar-header").removeClass("sm");
            $("#navlist").removeClass("sm");
            $("#navlist li").removeClass("sm");
            $("#myNavbar").removeClass("sm");
            $("#navlist li a").removeClass("sm");
            break;

        case 1:
            $(".navBarFixed").removeClass("lg");
            $(".navbar-brand").removeClass("lg");
            $("#navlist li a").removeClass("lg");
            break;

        case 2:
            $(".navBarFixed").removeClass("top");
            $(".navbar-brand").removeClass("top");
            $("#navlist li a").removeClass("top");
            $("#navlist").removeClass("top");
            break;
    }

    curCssState = navBarState;

    switch (navBarState) {
        case 0:

            $(".navbar-brand").addClass("sm");
            $(".navBarFixed").addClass("sm");
            $(".navbar-header").addClass("sm");
            $("#navlist").addClass("sm");
            $("#navlist li").addClass("sm");
            $("#myNavbar").addClass("sm");
            $("#navlist li a").addClass("sm");
            break;

        case 1:
            $(".navBarFixed").addClass("lg");
            $(".navbar-brand").addClass("lg");
            $("#navlist li a").addClass("lg");
            break;

        case 2:
            $(".navBarFixed").addClass("top");
            $(".navbar-brand").addClass("top");
            $("#navlist li a").addClass("top");
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
var navbarAtTopFontSize = "24px";

var emphasizedColor = "#5A7D9B";

var lastSection = 0;

var currentWindowPosition = windowPositionEnum.Top;

var currentWindowWidth = windowWidthEnum.lg;

function initializeNavBar()
{
    initializeCssState();

    if (window.innerWidth < 768)
    {
        currentWindowWidth = windowWidthEnum.sm;
        $('#myNavbar a').attr({ "data-toggle": "collapse", "data-target": "#myNavbar" });
    }
    else
    {
        currentWindowWidth = windowWidthEnum.lg;
    }
}

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
    //Don't do the navbar animations on the phone size.
    if (window.innerWidth >= 768) {

        // Change the appearance of the navbar if @ the top of the page
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

            $("#navlist li a").animate({
                "line-height": "68px"
            }, { duration: animationDuration, queue: false });

            $(".navBarFixed").animate({
                "height": "68px"
            }, { duration: animationDuration, queue: false });
        }
        else if ($(this).scrollTop() <= 1 && currentWindowPosition == windowPositionEnum.Body) {

            currentWindowPosition = windowPositionEnum.Top;

            $("#navlist li a").animate({
                "line-height": "108px"
            }, { duration: animationDuration, queue: false });

            $(".navBarFixed").animate({
                "height": "108px"
            }, { duration: animationDuration, queue: false });

            $("#navlist li a").animate({
                "padding-left": "20px"
            }, { duration: animationDuration, queue: false });

            $("#navlist li a").animate({
                "padding-right": "20px"
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
    }

    var scrollEpsilon = 3;

    var emphasizedFontSize = "20px";
    var navBarHeight;

    if (window.innerWidth < 768) {
        emphasizedFontSize = "18px";
        // To Do: Figure out why this doesn't work:
        //navBarHeight = $('#navbar-header').height();
        navBarHeight = 70;
    }
    else {
        navBarHeight = $('#navlist li').height();
    }

    var currentSection = 0;

    if ($(this).scrollTop() >= $('#SkillsSection').offset().top - navBarHeight - scrollEpsilon) {
        currentSection = 1;
    }

    if ($(this).scrollTop() >= $('#ExperienceSection').offset().top - navBarHeight - scrollEpsilon) {
        currentSection = 2;
    }

    if ($(this).scrollTop() >= $('#ProjectsSection').offset().top - navBarHeight - scrollEpsilon) {
        currentSection = 3;
    }

    // If we're below the contact section, or at the bottom of the page:
    if ($(this).scrollTop() >= $('#ContactSection').offset() + $('#ContactSection').height() ||
        $(this).scrollTop() + $(window).height() == $(document).height()) {
        currentSection = 4;
    }

    if ($(this).scrollTop() < $('#SkillsSection').offset().top - navBarHeight) {
        currentSection = 0;
    }

    if (lastSection != currentSection) {
        lastSection = currentSection;

        if (currentSection == 1) {
            navListDeemphasize();

            skillsAnimState = true;

            $('#SkillsNavBarLi a').animate({
                color: emphasizedColor,
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }

        else if (currentSection == 2) {
            navListDeemphasize();
            experiencesAnimState = true;
            $('#ExperienceNavBarLi a').animate({
                color: emphasizedColor,
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }

        else if (currentSection == 3) {
            navListDeemphasize();
            projectsAnimState = true;
            $('#projectsNavBarLi a').animate({
                color: emphasizedColor,
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }

        else if (currentSection == 4) {
            navListDeemphasize();
            contactAnimState = true;
            $('#contactNavBarLi a').animate({
                color: emphasizedColor,
                "font-size": emphasizedFontSize
            }, { duration: animationInDuration, queue: false });
        }
    }

});

$(window).resize(function () {

    if (currentWindowWidth == windowWidthEnum.lg && window.innerWidth < 768) {
        currentWindowWidth = windowWidthEnum.sm;
        changeCssState(navBarState.small);

        // Make the navbar menu disappear when a li is clicked, but only on phone-size.
        $('#myNavbar a').attr({ "data-toggle": "collapse", "data-target": "#myNavbar" });

        return;
    }
    else if (currentWindowWidth == windowWidthEnum.sm && window.innerWidth > 768) {
        currentWindowWidth = windowWidthEnum.lg;

        if ($(this).scrollTop() > 1) {
            changeCssState(navBarState.large);
        }
        else {
            changeCssState(navBarState.top);
        }

        $('#myNavbar a').removeAttr("data-toggle data-target");

        return;
    }
});