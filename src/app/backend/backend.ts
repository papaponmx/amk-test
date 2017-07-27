import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export let fakeBackendProvider = {
  provide: Http,
  useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
    backend.connections.subscribe((connection: MockConnection) => {
      // tslint:disable-next-line:prefer-const
      let testUser = { username: 'jaime', password: 'elmejor', firstName: 'Jaime', lastName: 'Madrigal Rios' };
      setTimeout(() => {
        if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
          // tslint:disable-next-line:prefer-const
          let params = JSON.parse(connection.request.getBody());
          if (params.username === testUser.username && params.password === testUser.password) {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })
            ));
          } else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200 })
            ));
          }
        }

        if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
          if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: [testUser] })
            ));
          } else {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 401 })
            ));
          }
        }
      }, 500);
    });
    return new Http(backend, options);
  },
  deps: [MockBackend, BaseRequestOptions]
};
