(function () {
  var wrap = document.querySelector('.network-window__image-wrap');
  if (!wrap) return;

  var frame = document.getElementById('hero-instagram');
  var skeleton = wrap.querySelector('.network-window__skeleton');

  fetch('/assets/data/instagram.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var post = data.posts && data.posts[0];
      if (!post || !post.image) throw new Error('No post');

      var a = document.createElement('a');
      a.href = post.permalink;
      a.target = '_blank';
      a.rel = 'noopener';

      var img = document.createElement('img');
      img.src = '/' + post.image;
      img.alt = post.caption ? post.caption.slice(0, 80) : 'Functionland on Instagram';
      img.className = 'network-window__img';
      img.loading = 'eager';

      img.onload = function () {
        if (skeleton) skeleton.style.display = 'none';
        a.appendChild(img);
        wrap.appendChild(a);
      };

      img.onerror = function () {
        if (frame) frame.style.display = 'none';
      };
    })
    .catch(function () {
      if (frame) frame.style.display = 'none';
    });
})();
