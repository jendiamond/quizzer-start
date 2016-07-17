import {bootstrap} from 'angular2/platform/browser'
import {HomeComponent} from 'src/home';
import {provide} from 'angular2/core';
import {MockBackend} from 'angular2/http/testing';
import {HTTP_PROVIDERS, Http, BaseRequestOptions} from 'angular2/http';
import {FakeWebServer} from './fake-webserver';

bootstrap(HomeComponent, [
  HTTP_PROVIDERS,
  BaseRequestOptions,
  MockBackend,
  FakeWebServer,
  provide(Http, {
    deps: [MockBackend, BaseRequestOptions],
    useFactory: (backend, options) => {
      return new Http(backend, options);
    }
  })
]);