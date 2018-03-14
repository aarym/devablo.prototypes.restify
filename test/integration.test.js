const restClient = require('restify-clients');

test('can call echo api with params', (done) => {

    jest.setTimeout(10000); // 1 second

    var client = restClient.createJsonClient({
        url: 'http://localhost:8080'
      });

    try
    {
      function callback(err, req, res, obj) {
        expect(err).toBe(null);
        expect(obj.name).toBe("hello+world");

        console.log('Server returned: %j', obj);
        
        done();
      }

      client.get('/api/echo/hello+world', callback);
    }
    catch(ex)
    {
      done.fail(ex);
    }
});