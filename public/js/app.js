'use strict';

var meanApp = angular.module('meanApp', ["xeditable", 'ui.date', 'ui.calendar'])

meanApp.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
  });