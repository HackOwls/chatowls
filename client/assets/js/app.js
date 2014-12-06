"use strict";

var app = angular.module('app', ["firebase", "ngSanitize", 'ui.router']);

app.config(function($logProvider) {
  $logProvider.debugEnabled(true);
});