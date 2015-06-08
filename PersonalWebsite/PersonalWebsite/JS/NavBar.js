$(window).scroll(function () {

    //ToDo: Look up enums in JavaScript
    var currentSection = 1;

    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }

    if ($(this).scrollTop() > $('#SkillsSection').offset().top - $('header.sticky').height()) { // ToDo: Figure out if .sticky here is right or if it actually does anything.
        currentSection = 1;
    }

    if ($(this).scrollTop() > $('#ExperienceSection').offset().top - $('header.sticky').height()) {
        currentSection = 2;
    }

    if ($(this).scrollTop() > $('#ProjectsSection').offset().top - $('header.sticky').height()) {
        currentSection = 3;
    }

    // ToDo: Fix this such that contact is displayed when the user has scrolled all the way to the bottom of the page.
    if ($(this).scrollTop() > $('#ContactSection').offset() + $('#ContactSection').height()) {
        currentSection = 4;
    }

    $('#SkillsNavBarLi').removeClass("emphasized");
    $('#ExperienceNavBarLi').removeClass("emphasized");
    $('#projectsNavBarLi').removeClass("emphasized");
    $('#animationsNavBarLi').removeClass("emphasized");

    if (currentSection == 1) {
        $('#SkillsNavBarLi').addClass("emphasized");
    }

    else if (currentSection == 2) {
        $('#ExperienceNavBarLi').addClass("emphasized");
    }

    else if (currentSection == 3) {
        $('#projectsNavBarLi').addClass("emphasized");
    }

    else if (currentSection == 4) {
        $('#animationsNavBarLi').addClass("emphasized");
    }

});