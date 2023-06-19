// ==UserScript==
// @name         paces.jp / Remove finish status projects from select boxes
// @namespace    https://app.paces.jp/report/
// @version      1.0
// @description  "検収済" となっているプロジェクトを非表示にする
// @match        https://app.paces.jp/report*
// @author       @skyriser
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function hideProjects() {
    var divElements = document.querySelectorAll('div > span.ds_tag');

    for (var i = 0; i < divElements.length; i++) {
        var divElement = divElements[i];
        var liElement = divElement.parentNode;

        while (liElement && liElement.tagName !== 'LI') {
            liElement = liElement.parentNode;
        }

        if (liElement) {
            liElement.style.display = 'none';
        }
    }
  };

  window.addEventListener('click', hideProjects);
})();
