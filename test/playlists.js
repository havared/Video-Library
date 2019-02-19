let mongoose = require("mongoose");
let Playlist = require('../src/models/playlist');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Playlists', () => {
  /*
    * Test the /GET route
  */
  describe('/GET playlist', () => {
      it('it should give error GET playlist', (done) => {
        chai.request(server)
            .get('/playlists/5c6bf9afe7ee58ef056d4412')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message');
              done();
            });
      });
  });

  describe('/POST playlist', () => {
      it('it should give error POST playlist', (done) => {
        let sample_playlist = {
        	"website_url": "asdasdasd",
        	"videos": ["5c6bf9afe7ee58ef056d4412", "5c6bfc153e3ec4f655901a70"]
        };
        chai.request(server)
            .post('/playlists')
            .send(sample_playlist)
            .end((err, res) => {
                  res.body.should.be.a('object');
                  res.body.should.have.property('message');
                  res.body.should.have.property('message').eql('Name, website url, videos should be provided');
              done();
            });
      });
  });

  describe('/DELETE playlist', () => {
      it('it should give error DELETE playlist', (done) => {
        chai.request(server)
            .delete('/playlists/5c6bf9afe7ee58ef056d4412')
            .end((err, res) => {
                  res.body.should.be.a('object');
                  res.body.should.have.property('playlist');
                  res.body.should.have.property('playlist').eql(null);
              done();
            });
      });
  });
});
