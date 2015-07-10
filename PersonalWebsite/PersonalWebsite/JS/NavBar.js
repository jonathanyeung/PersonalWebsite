windowPositionEnum = {
    Top: 0,
    Body: 1
}

liAnimationState = {
    On: 0,
    Off: 1
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

var lastSection = 0;

var currentWindowPosition = windowPositionEnum.Top;

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
    if (window.innerWidth < 768)
    {
        return;
    }

    //ToDo: Look up enums in JavaScript
    var scrollEpsilon = 3;
    var currentSection = 0;

    if ($(this).scrollTop() > 1 && currentWindowPosition == windowPositionEnum.Top) {

        currentWindowPosition = windowPositionEnum.Body;

        $("#navlist").animate({
            "font-size": deemphasizedFontSize
        }, { duration: animationDuration, queue: false });

        $("#navlist li").animate({
            "line-height": "68px"
        }, { duration: animationDuration, queue: false });

        $(".navBarFixed").animate({
            "height": "68px"
        }, { duration: animationDuration, queue: false });
    }
    else if ($(this).scrollTop() <= 1 && currentWindowPosition == windowPositionEnum.Body) {

        currentWindowPosition = windowPositionEnum.Top;

        $("#navlist").animate({
            "font-size": "28px"
        }, { duration: animationDuration, queue: false });

        $("#navlist li").animate({
            "line-height": "108px"
        }, { duration: animationDuration, queue: false });

        $(".navBarFixed").animate({
            "height": "108px"
        }, { duration: animationDuration, queue: false });
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

    if (lastSection != currentSection)
    {
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