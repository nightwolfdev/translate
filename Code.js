function doGet() {
  const page = HtmlService.createTemplateFromFile('index').evaluate();

  page.setTitle('Translate');

  page.addMetaTag('viewport', 'width=device-width, initial-scale=1, shrink-to-fit=no');

  return page;
}

function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function translate(phrase, source, target) {
  return LanguageApp.translate(phrase, source, target);
}