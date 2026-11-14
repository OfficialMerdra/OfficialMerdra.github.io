(function () {
  var article = document.querySelector('.article-body');
  if (!article || typeof window.renderMathInElement !== 'function') return;

  window.renderMathInElement(article, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false }
    ],
    throwOnError: false
  });
}());
