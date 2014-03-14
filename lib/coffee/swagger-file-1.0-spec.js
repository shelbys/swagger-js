// Generated by CoffeeScript 1.6.3
(function() {
  window.api_key = 'special-key';

  describe('Swagger Api Listing for file-based 1.0 spec', function() {
    beforeEach(function() {
      var success;
      return success = function() {
        return log("success");
      };
    });
    return describe("verifies loading a specification", function() {
      beforeEach(function() {
        window.body = null;
        window.response = null;
        window.callback = null;
        window.error = null;
        window.success_callback = function(data) {
          return window.response = data;
        };
        return window.error_callback = function(data) {
          return window.error = data;
        };
      });
      it("verifies a 1.0 spec functions can be read from an object", function() {
        var cb, obj, swagger;
        obj = wordnik_1_0_spec;
        swagger = new window.SwaggerApi();
        cb = function(data) {
          var api, resourceListing, wordApi, _i, _len, _ref;
          resourceListing = data;
          expect(resourceListing.apisArray.length).toBe(5);
          _ref = resourceListing.apisArray;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            api = _ref[_i];
            expect(api.basePath).toBe("http://api.wordnik.com/v4");
          }
          wordApi = resourceListing.word;
          expect(wordApi.operations).toBeDefined;
          expect(wordApi.getAudio).toBeDefined;
          expect(wordApi.getDefinitions).toBeDefined;
          expect(wordApi.getEtymologies).toBeDefined;
          expect(wordApi.getExamples).toBeDefined;
          expect(wordApi.getPhrases).toBeDefined;
          expect(wordApi.getRelatedWords).toBeDefined;
          expect(wordApi.getScrabbleScore).toBeDefined;
          expect(wordApi.getTextPronunciations).toBeDefined;
          expect(wordApi.getWord).toBeDefined;
          return expect(wordApi.getWordFrequency).toBeDefined;
        };
        return swagger.specFromObject(obj, cb);
      });
      return it("verifies a 1.0 spec models can be read from an object", function() {
        var cb, obj, swagger;
        obj = wordnik_1_0_spec;
        swagger = new window.SwaggerApi();
        cb = function(data) {
          var models, resourceListing, wordApi;
          resourceListing = data;
          wordApi = resourceListing.word;
          models = wordApi.models;
          return window.foo = wordApi.getWord;
        };
        return swagger.specFromObject(obj, cb);
      });
    });
  });

}).call(this);