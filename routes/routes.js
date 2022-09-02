import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

FlowRouter.route('/', {
  name: 'routeHome',
  action() {
    FlowRouter.go('routeCatalog');
  }
});

FlowRouter.route('/catalog', {
  name: 'routeCatalog',
  action() {
    BlazeLayout.render('layoutApplication', {regionMain: 'templateCatalog'});
  }
});
