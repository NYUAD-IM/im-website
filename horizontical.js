/*
 * horizontical.js v0.0.4 (https://github.com/jackbdu/horizontical.js)
 * @copyright 2020 Jack B. Du
 * @license MIT (https://github.com/jackbdu/horizontical.js/blob/master/LICENSE)
 */

class Horizontical {
  constructor() {
    this.init();
  }

  init() {
    this.hwrappers = document.querySelectorAll('.h-wrapper');
    this.hviewports = document.querySelectorAll('.h-wrapper .h-viewport');
    this.hcontainers = document.querySelectorAll('.h-wrapper .h-viewport .h-container');
    this.update('resize');
  }

  update(event) {
    for (let i = 0; i < this.hwrappers.length && i < this.hcontainers.length && i < this.hviewports.length; i++) {
      let hwrapperStyle = window.getComputedStyle ? window.getComputedStyle(this.hwrappers[i]) : this.hwrappers[i].currentStyle;
      if (event === "resize") {
        let hcontainerStyle = window.getComputedStyle ? window.getComputedStyle(this.hcontainers[i]) : this.hcontainers[i].currentStyle;
        let hcontainerWidth = this.hcontainers[i].offsetWidth + parseFloat(hcontainerStyle.marginLeft || 0) + parseFloat(hcontainerStyle.marginRight || 0);
        let hwrapperExtras = parseFloat(hwrapperStyle.paddingTop || 0) + parseFloat(hwrapperStyle.paddingBottom || 0) + parseFloat(hwrapperStyle.borderTopWidth || 0) + parseFloat(hwrapperStyle.borderBottomWidth || 0)
        this.hwrappers[i].style.height = (hcontainerWidth - this.hviewports[i].clientWidth + this.hviewports[i].offsetHeight + hwrapperExtras) + 'px';
        this.hviewports[i].style = "overflow-x: hidden; position: sticky; position: webkit-sticky; top: 0;";
      } else if (event === "scroll") {
        let scrollDistance = this.hviewports[i].offsetTop - this.hwrappers[i].offsetTop - parseFloat(hwrapperStyle.paddingTop || 0) - parseFloat(hwrapperStyle.borderTopWidth || 0);
        this.hcontainers[i].style.transform = "translateX(-" + scrollDistance + 'px)';
      }
    }
  }
}

var horizontical = new Horizontical();

document.addEventListener('DOMContentLoaded', function() { horizontical.init(); });
window.addEventListener("resize", function() { horizontical.update("resize"); });
window.addEventListener("scroll", function() { horizontical.update("scroll"); });