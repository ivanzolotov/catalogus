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
    BlazeLayout.render('layoutApplication', {
      regionMain: 'templateCatalog',
    });
  }
});

FlowRouter.route('/test/:slug', {
  name: 'routeTest',
  action(params, queryParams) {
    console.log(params);
    BlazeLayout.render('layoutApplication', {
      regionMain: 'templateTest',
    });
  }
});
