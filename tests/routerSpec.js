import chai from 'chai';

import Router from '../src/app/router';

let expect = chai.expect;

describe('SiteNavItemView', function() {

    describe('Router', function() {
        describe('routes', function () {
           it('Should contain the ', function () {
               // Arrange
               let router = new Router();
               let expectedObject = {
                   '': 'home',
                   'profile': 'profile',
                   'projects': 'projects',
                   'journal': 'journal'
               };

                // Act
               let result = router.routes();
                // Assert
               expect(result).to.deep.equal(expectedObject);
           });
        });

        describe('initialize', function () {
            it('', function () {

            });
        });

        describe('home', function () {
            it('Should', function () {
                // Arrange

                // Act

                // Assert
            });
        });

        describe('profile', function () {
            it('Should', function () {
                // Arrange

                // Act

                // Assert
            });
        });

        describe('projects', function () {
            it('Should', function () {
                // Arrange

                // Act

                // Assert
            });
        });

        describe('journal', function () {
            it('Should', function () {
                // Arrange

                // Act

                // Assert
            });
        });
    });
});