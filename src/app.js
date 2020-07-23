/* global algoliasearch instantsearch */

const searchClient = algoliasearch('7271EN1RJE', '2d396e388c93634d920ed8f96fdbbd18');

const search = instantsearch({
  indexName: 'aaaa',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
