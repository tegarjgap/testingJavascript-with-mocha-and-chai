
var expect = require('chai').expect
var cookie = require('../app.js')

describe('cookie', function() {
	
	it("Test one", function(){
        expect(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
    })
    it("Test two", function(){
        expect(cookie(26), "Who ate the last cookie? It was Monica!")
    })
    it("Test three", function(){
        expect(cookie(2.3), "Who ate the last cookie? It was Monica!")
    })
    it("Test four", function(){
        expect(cookie(true), "Who ate the last cookie? It was the dog!")
    })
})