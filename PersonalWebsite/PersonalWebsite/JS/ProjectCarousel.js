﻿var carousel = {
    carouselWidth: 1000,
    currentPosition: 0,
    itemCount: 3,

    setCarouselOffset: function (offsetIndex) {

        //debugger;
        if (window.innerWidth < 500) {
            var height = "620px";
        }
        else {
            var height = "550px";
        }
        
        switch (this.currentPosition) {
            case 0:
                $("#PointReaderCarousel").css({ "height": 0, "visibility": "collapse" });
                $("#OzwegoCarousel").css({ "height": 0, "visibility": "collapse" });
                $("#GuruCarousel").css({ "height": height, "visibility": "visible" });
                break;

            case 1:
                $("#GuruCarousel").css({ "height": 0, "visibility": "collapse" });
                $("#PointReaderCarousel").css({ "height": 0, "visibility": "collapse" });
                $("#OzwegoCarousel").css({ "height": height, "visibility": "visible" });
                break;

            case 2:
                $("#GuruCarousel").css({ "height": 0, "visibility": "collapse" });
                $("#OzwegoCarousel").css({ "height": 0, "visibility": "collapse" });
                $("#PointReaderCarousel").css({ "height": height, "visibility": "visible" });
                break;
        }
    },


    next: function () {
        this.currentPosition = (this.currentPosition + 1) % this.itemCount;
        this.setCarouselOffset(this.currentPosition);
    },

    prev: function () {
        if (this.currentPosition == 0) {
            this.currentPosition = this.itemCount - 1;
        }
        else {
            this.currentPosition--;
        }
        this.setCarouselOffset(this.currentPosition);
    },


    initialize: function () {
        $(".nextButton").click(function () {
            //debugger;
            carousel.next();
        });
        $(".prevButton").click(function () {
            //debugger;
            carousel.prev();
        });
    }
}