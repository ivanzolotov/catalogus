import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { CategoriesCollection } from '/imports/db/categories';

import { SETTINGS } from '/imports/settings/setting';

import './catalog.html';

Template.templateCatalog.helpers({
  homepageCategories() {
    const ids = SETTINGS.homepageCategories;
    const categories = [];
    for (let i = 0; i < ids.length; i++) {
      const category = CategoriesCollection.find({id: ids[i].id}).fetch()[0];
      categories.push(category);
    }
    return categories;
  },
});
