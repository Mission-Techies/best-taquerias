//JavaScript File
var api_key = 'keyjUyqxvapBphwo4';
var about_record = 'https://api.airtable.com/v0/appSrgke7E0ElZhMY/About?api_key=' + api_key;

function renderRecords(data) {
  $(data.records).each(function(index, amakers) {
    var amakers_name = amakers.fields['Name'];
    var amakers_pics = amakers.fields['Pictures'];
    var amakers_des = amakers.fields['Description']
    var amakers_projects = amakers.fields['Projects']
    var amakers_info = '';
    if (amakers_name) {
      amakers_info += `<li>`;
      if (amakers_pics) {
        $.each(amakers_pics, function(i, pic) {
          amakers_info += `<img src="${pic.url}">`;
        });
      }
      amakers_info += `<br> Name: ${amakers_name} <br> About: ${amakers_des}<br> Future Projects: ${amakers_projects} <br>`;
      amakers_info += `</li>`;
    }
    $('.about').append(amakers_info);
  });
}

$.get(about_record, renderRecords);