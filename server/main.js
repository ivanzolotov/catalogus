import { CategoriesCollection } from '/imports/db/categories';
import { FirmsCollection } from '/imports/db/firms';

import { CategoriesInitialData } from '/imports/db/categoriesFixtures';
import { FirmsInitialData } from '/imports/db/firmsFixtures';

const insertCategory = (category) => {
  CategoriesCollection.insert(category);
}

const insertFirm = (firm) => {
  FirmsCollection.insert(firm);
}

Meteor.startup(() => {
  CategoriesCollection.remove({});
  FirmsCollection.remove({});
  CategoriesInitialData.forEach(insertCategory);
  FirmsInitialData.forEach(insertFirm);
});
