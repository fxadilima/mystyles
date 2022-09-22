import EmberRouter from '@ember/routing/router';
import config from 'mystyles/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sejarah');
  this.route('drama');
  this.route('programming');
  this.route('buku');
});
