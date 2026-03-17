/* gallery.js — Shared gallery logic for Bleen project pages */

(function () {
  /* ---- iframe scale ---- */
  let resizeTimer;
  function recalcScale() {
    document.querySelectorAll('.card-frame').forEach(function (el) {
      var w = el.offsetWidth;
      el.style.setProperty('--iframe-scale', (w / 1080).toFixed(4));
    });
  }
  window.addEventListener('load', recalcScale);
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(recalcScale, 150);
  });

  /* ---- PNG download (disabled in static mode) ---- */
  function downloadPng(projectSlug, file, btn) {
    btn.textContent = 'N/A';
    btn.title = 'Export requires local server (localhost:3400)';
    setTimeout(function () { btn.textContent = 'PNG'; }, 2000);
  }

  /* ---- Build gallery grid ---- */
  function buildGallery(containerId, posts, projectSlug, svgIcon) {
    var grid = document.getElementById(containerId);
    if (!grid) return;

    if (posts.length === 0) {
      grid.innerHTML = '<p style="color:#999;font-size:0.85rem;grid-column:1/-1;">No visuals yet.</p>';
      return;
    }

    posts.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'card';
      card.innerHTML =
        '<a href="' + p.file + '" target="_blank" class="card-frame">' +
          '<iframe src="' + p.file + '" width="1080" height="1080" loading="lazy"></iframe>' +
        '</a>' +
        '<div class="card-footer">' +
          '<div class="card-info">' +
            '<div class="label">' + p.label + '</div>' +
            '<div class="desc">' + p.desc + '</div>' +
          '</div>' +
          '<button class="btn-png" title="Download PNG 1080x1080">' + svgIcon + ' PNG</button>' +
        '</div>';

      var btn = card.querySelector('.btn-png');
      var fileBase = p.file.replace('.html', '');
      btn.addEventListener('click', function () {
        downloadPng(projectSlug, fileBase, this);
      });

      grid.appendChild(card);
    });

    setTimeout(recalcScale, 100);
  }

  /* ---- Expose ---- */
  window.buildGallery = buildGallery;
})();
