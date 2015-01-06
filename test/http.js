var test = require('unit.js')
var should = require('should')
var mock = require('../test/mock');
var sample, instance;

describe('http', function() {
  before(function(done) {
    mock.petstore(done, function(petstore, server){
      sample = petstore;
      instance = server;
    });
  });

  after(function(done){
    instance.close();

    done();
  });

  it('verifies the response messages from the get operation', function(done) {
    var petApi = sample.pet;
    test.object(petApi);
    var req = petApi.getPetById({petId: 1}, function(data) {
      var pet = data.obj;
      test.object(pet);
      should(pet.id).equal(1);
      done();
    });
  })

  it('tests the redirect', function(done) {
    var petApi = sample.pet;
    petApi.redirect({}, function(data) {
      var pet = data.obj;
      test.object(pet);
      should(pet.id).equal(1);
      done();
    });
  })
})