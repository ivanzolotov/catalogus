import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './test.html';

Template.templateTest.helpers({
  getSlug() {
    return FlowRouter.getParam('slug');
  }
})
