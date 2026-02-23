(function () {
  var section = document.querySelector('.pulse');
  if (!section) return;

  var container = document.getElementById('project-pulse');
  if (!container) return;

  fetch('/assets/data/pulse.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (!data.briefing) return;

      // Strip <cite> tags and other markup from Claude's response
      var briefing = stripTags(data.briefing);

      var weekLabel = '';
      if (data.week_of) {
        try {
          var d = new Date(data.week_of + 'T00:00:00Z');
          weekLabel = 'Week of ' + d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
        } catch (e) {
          weekLabel = '';
        }
      }

      var sourcesHtml = '';
      if (data.sources && data.sources.length) {
        sourcesHtml = '<div class="pulse__sources">';
        data.sources.forEach(function (url) {
          var domain = '';
          try { domain = new URL(url).hostname.replace('www.', ''); } catch (e) { domain = url; }
          sourcesHtml += '<a href="' + escapeAttr(url) + '" target="_blank" rel="noopener" class="pulse__source-link">' + escapeHtml(domain) + '</a>';
        });
        sourcesHtml += '</div>';
      }

      container.innerHTML =
        '<div class="pulse__meta">' + escapeHtml(weekLabel) + '</div>'
        + '<h2 class="pulse__headline">' + escapeHtml(stripTags(data.headline)) + '</h2>'
        + '<p class="pulse__subtitle">' + escapeHtml(stripTags(data.subtitle)) + '</p>'
        + '<p class="pulse__briefing">' + escapeHtml(briefing) + '</p>'
        + sourcesHtml;

      section.classList.add('pulse--loaded');
    })
    .catch(function () {
      // Silently fail — section stays hidden
    });

  function stripTags(str) {
    return str.replace(/<cite[^>]*>/gi, '').replace(/<\/cite>/gi, '').replace(/<[^>]+>/g, '');
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
})();
