(function () {
  'use strict';

  var knownIdrRoutes = new Set([
    '/idr/overview',
    '/idr/complete-idr',
    '/idr/profile',
    '/idr/pathway',
    '/idr/roadmap',
    '/idr/12-week-sprint',
    '/idr/credentials',
    '/idr/curriculum',
    '/idr/labs',
    '/idr/assignments',
    '/idr/projects',
    '/idr/calendar',
    '/idr/kpis',
    '/idr/mentor',
    '/idr/governance',
    '/idr/resources',
    '/idr/references',
    '/idr/download-and-review'
  ]);

  var rawPath = window.location.pathname;
  var normalisedPath = rawPath.replace(/\/+$/, '');

  if (knownIdrRoutes.has(normalisedPath) && rawPath !== normalisedPath + '/') {
    window.location.replace(normalisedPath + '/' + window.location.search + window.location.hash);
  }
}());
