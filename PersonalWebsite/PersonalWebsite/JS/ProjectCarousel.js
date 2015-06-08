var carousel = {
    carouselWidth: 1000,
    currentPosition: 0,
    itemCount: 3,

    setCarouselOffset: function (offsetIndex) {
        var newMargin = this.currentPosition * (-1) * this.carouselWidth;
        $(".pan").css("margin-left", newMargin);
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