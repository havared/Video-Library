let mongoose = require("mongoose");
let Video = require('../src/models/video');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('Videos', () => {
  /*
    * Test the /GET route
  */
  describe('/GET video', () => {
      it('it should give error GET video', (done) => {
        chai.request(server)
            .get('/videos/5c5906c453a969e1ed7ceda2f')
            .end((err, res) => {
                  res.should.have.status(500);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message');
              done();
            });
      });
  });

  describe('/POST video', () => {
      it('it should give error POST video', (done) => {
        let sample_video = {
        	"url": "haksdj",
        	"thumbnail_url": "asdasdasd",
        	"duration": 32891
        };
        chai.request(server)
            .post('/videos')
            .send(sample_video)
            .end((err, res) => {
                  res.body.should.be.a('object');
                  res.body.should.have.property('message');
                  res.body.should.have.property('message').eql('Title and video url should be provided');
              done();
            });
      });
  });

  describe('/DELETE video', () => {
      it('it should give error DELETE video', (done) => {
        chai.request(server)
            .delete('/videos/5c6bf9afe7ee58ef056d4412')
            .end((err, res) => {
                  res.body.should.be.a('object');
                  res.body.should.have.property('video');
                  res.body.should.have.property('video').eql(null)
              done();
            });
      });
  });
});
