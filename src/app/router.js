import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'lodash';

import HelloView from './views/hello';
import SiteNavItemView from './views/siteNavItemView';


export default Backbone.Router.extend({

  siteNavItemView: null,

  routes: function () {
    return {
      '': 'home',
      'profile': 'profile',
      'projects': 'projects',
      'journal': 'journal'
    }
  },

  initialize() {
    this.renderSiteNavItemView();
  },

  home() {
    var helloView = new HelloView().render();

    $('#js-app').empty().append(helloView.$el);
  },

  profile() {
    var helloView = new HelloView({
      template: _.template('Im the profile page')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  },

  projects() {
    var helloView = new HelloView({
      template: _.template('Im the projects page')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  },

  journal() {
    var helloView = new HelloView({
      template: _.template('Im the journal page')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  },

  renderSiteNavItemView() {
    if (_.isNull(this.siteNavItemView)) {
      this.siteNavItemView = new SiteNavItemView();
    }
    $('#js-nav').empty().append(this.siteNavItemView.render().$el);
  }

});
