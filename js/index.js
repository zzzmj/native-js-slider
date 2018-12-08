function showSlide() {
    var next = document.querySelector('.yd-slide-button-next')
    var pre = document.querySelector('.yd-slide-button-pre')
    var slide = document.querySelector('.yd-slide')
    var imgs = document.querySelectorAll('.yd-slide-img')
    var pages = document.querySelectorAll('.slider-indicators-btn')
    var len= imgs.length

    pre.onclick = function() {
        var curIndex = parseInt(slide.dataset.active)
        preIndex = curIndex - 1
        if (preIndex == -1) {
            preIndex += len;
        }
        slideImg(preIndex)
    }

    next.onclick = function() {
        var curIndex = parseInt(slide.dataset.active)
        var nextIndex = (curIndex + 1) % len
        slideImg(nextIndex)
    }

    // 给页码绑定事件
    for (var i = 0; i < pages.length; i++) {
        pages[i].addEventListener('mouseenter', function(event) {
            var index = parseInt(event.target.dataset.index)
            slideImg(index)
        })
    }

    var slideImg = function(index) {
        // 先隐藏当前图片和页面
        var curIndex = parseInt(slide.dataset.active)
        toggle(imgs, curIndex, 'yd-active')
        toggle(pages, curIndex, 'slider-indicators-btn-active')

        // 激活改变后的页面和页码
        toggle(imgs, index, 'yd-active')
        toggle(pages, index, 'slider-indicators-btn-active')
        // 改变属性坐标
        slide.dataset.active = index
    }

    var toggle = function(array, id, className) {
        var element = array[id]
        if (element.classList.contains(className)) {
            element.classList.remove(className)
        } else {
            element.classList.add(className)
        }
    }
}
showSlide()