'use strict';

var meanApp = angular.module('meanApp', ["xeditable", 'ui.date'])

meanApp.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
  });