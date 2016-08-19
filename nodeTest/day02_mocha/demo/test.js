var boot = require('./app').boot,
    shutdown = require('./app').shutdown,
    request = require('superagent'),
    expect = require('chai').expect;
 
describe('server', function () {
    before(function () {
        boot();
    });
    describe('index', function () {
        it('should respond to GET', function (done) {
            request
                .get('http://localhost:3000')
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    done();
                });
        });
    });
    after(function () {
        shutdown();
    });
});