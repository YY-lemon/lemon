/**
 * Created by silence on 2017/12/20.
 */
// (function(doc, win) {
//   var docEl = doc.documentElement,
//     resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//     recalc = function() {
//       var clientWidth = docEl.clientWidth
//       if (!clientWidth) return
//       docEl.style.fontSize = 15 * (clientWidth / 320) + 'px'
//     }
//   if (!doc.addEventListener) return
//   win.addEventListener(resizeEvt, recalc, false)
//   doc.addEventListener('DOMContentLoaded', recalc, false)
// })(document, window)
import $ from 'jquery' //在需要使用的页面中
$(function() {
  $(window)
    .on('resize', function() {
      var width = $(window).width()
      var fontSize = (width / 375) * 100
      $('html').css('font-size', fontSize)
    })
    .trigger('resize')
})
