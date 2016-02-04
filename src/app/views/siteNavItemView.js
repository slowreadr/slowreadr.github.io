import Marionette from 'backbone.marionette';

import mainTranslation from '../nls/mainTranslation';
import siteNavItemViewTemplate from '../templates/siteNavItemViewTemplate.hbs';
import template from './template.hbs';

export default Marionette.ItemView.extend({

  className: 'mmrk-menu',

  template: siteNavItemViewTemplate,

  translation: mainTranslation,

  initialize: function() {
    return this;
  },

  serializeData() {
    return {
      logo: this.translation.logo,
      menu: this.translation.menu,
      contact: this.translation.contact
    };
  }

});
