
(function (window) {
  function $() {
  }

  $.prototype.id = function(elementID) {
    return document.getElementById(elementID);
  };

  window.app = window.app || {};
  window.app.$ = $;
})(window);