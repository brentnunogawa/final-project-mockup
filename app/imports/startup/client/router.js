import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/create-club', {
  name: 'Create_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Club_Page' });
  },
});

FlowRouter.route('/create-event', {
  name: 'Create_Event_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Event_Page' });
  },
});

FlowRouter.route('/club-stat', {
  name: 'Club_Stat_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Club_Stat_Page' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/find-club', {
  name: 'Find_Club_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_Club_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
