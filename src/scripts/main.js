// Vendors
import './vendor/jquery'
import './vendor/bootstrap'
import './vendor/fontawesome'

import './_clock.js';
import './_dropdown-select.js';
import './_keyboard.js';

$('.test-plan .list-group-item').click(function(e) {
  e.preventDefault();
  const target = $(this).attr('href');
  $('.test-steps table').hide();
  $('.test-steps table' + target).show();
  $(this).addClass('active').siblings().removeClass('active');
});

if(window.location.search.indexOf('tabs') !== -1) $('body').addClass('show-tabs');

