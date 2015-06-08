$(window).load(function () {
    // Set up event handlers for clicks on the navigation header
    $('#SkillsNavBarLi').click(function () {
        document.getElementById('SkillsSection').scrollIntoView();
    });

    $('#ExperienceNavBarLi').click(function () {
        document.getElementById('ExperienceSection').scrollIntoView();
    });

    $('#projectsNavBarLi').click(function () {
        document.getElementById('ProjectsSection').scrollIntoView();
    });

    $('#animationsNavBarLi').click(function () {
        document.getElementById('ContactSection').scrollIntoView();
    });

    $("#check-me-out-button").click(function () {
        document.getElementById('SkillsSection').scrollIntoView();
    });

    carousel.initialize();
});



$('#SkillsNavBarLi').removeClass("emphasized");
$('#ExperienceNavBarLi').removeClass("emphasized");
$('#projectsNavBarLi').removeClass("emphasized");
$('#animationsNavBarLi').removeClass("emphasized");