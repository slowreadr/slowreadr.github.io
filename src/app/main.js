import $ from 'jquery';
import Backbone from 'backbone';

import Router from './router';


const router = new Router();

Backbone.history.start({
  pushState: true,
  root: '/'
});


$(document).on("click", "a:not([data-bypass])", function (e) {
  // Get the absolute anchor href.
  var href = {
      prop: $(this).prop("href"),
      attr: $(this).attr("href")
    },
    root = location.protocol + "//" + location.host + '/';

  // Ensure the root is part of the anchor href, meaning it's relative.
  if (href.prop && href.prop.slice(0, root.length) === root) {
    e.preventDefault();
    Backbone.history.navigate(href.attr, {trigger:true});
  }
});

$(document).on("click", "a[data-bypass]", function (e) {
  e.preventDefault();
});
