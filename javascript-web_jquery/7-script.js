#!/usr/bin/node
$(document).ready(function () {
    $.getJSON('https://swapi-api.hbtn.io/api/people/5/?format=json', function (data) {
      $('DIV#character').text(data.name);
    });
  });