$(window).scroll(function () {

    //ToDo: Look up enums in JavaScript
    var scrollEpsilon = 3;
    var currentSection = 0;
    
    // This needs to be hardcoded, because header.sticky has no height when the user 
    // is at the very top of the page.  Get this value from MainPage.css

    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }

    if ($(this).scrollTop() >= $('#SkillsSection').offset().top - $('header.sticky').height() - scrollEpsilon) {
        currentSection = 1;
    }

    if ($(this).scrollTop() >= $('#ExperienceSection').offset().top - $('header.sticky').height() - scrollEpsilon) {
        currentSection = 2;
    }

    if ($(this).scrollTop() >= $('#ProjectsSection').offset().top - $('header.sticky').height() - scrollEpsilon) {
        currentSection = 3;
    }

    // If we're below the contact section, or at the bottom of the page:
    if ($(this).scrollTop() >= $('#ContactSection').offset() + $('#ContactSection').height() ||
        $(this).scrollTop() + $(window).height() == $(document).height()) {
        currentSection = 4;
    }

    if ($(this).scrollTop() < $('#SkillsSection').offset().top - $('header.sticky').height())
    {
        currentSection = 0;
    }

    $('#SkillsNavBarLi').removeClass("emphasized");
    $('#ExperienceNavBarLi').removeClass("emphasized");
    $('#projectsNavBarLi').removeClass("emphasized");
    $('#contactNavBarLi').removeClass("emphasized");

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
        $('#contactNavBarLi').addClass("emphasized");
    }

});