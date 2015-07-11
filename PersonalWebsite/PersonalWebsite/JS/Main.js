$(window).load(function () {
    // This needs to be hardcoded b/c header.sticky.height() has 0 height when 
    // the user is at the very top of the page.  Refer to MainPage.css
    var stickyHeaderHeight = 68;

    $('.cover-image-container').find('img').each(function () {
        var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    })

    // Set up event handlers for clicks on the navigation header
    $('#SkillsNavBarLi').click(function () {
        $('html, body').animate({
            scrollTop: document.getElementById('SkillsSection').offsetTop - stickyHeaderHeight
        }, {duration: 1000, queue:false});
    });

    $('#ExperienceNavBarLi').click(function () {
        $('html, body').animate({
            scrollTop: document.getElementById('ExperienceSection').offsetTop - stickyHeaderHeight
        }, { duration: 1000, queue: false });
    });

    $('#projectsNavBarLi').click(function () {
        $('html, body').animate({
            scrollTop: document.getElementById('ProjectsSection').offsetTop - stickyHeaderHeight
        }, { duration: 1000, queue: false });
    });

    $('#contactNavBarLi').click(function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, { duration: 1000, queue: false });
    });

    $("#check-me-out-button").click(function () {
        $('html, body').animate({
            scrollTop: document.getElementById('SkillsSection').offsetTop - stickyHeaderHeight
        }, { duration: 1000, queue: false });
    });

    carousel.initialize();
});