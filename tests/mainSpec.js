import chai from 'chai';

import SiteNavItemView from '../src/app/views/siteNavItemView';
import mainTranslation from '../src/app/nls/mainTranslation';

let expect = chai.expect;

describe('SiteNavItemView', function() {

    describe('serializeData', function() {
        it('Should return expected object', function() {
            // Arrange
            let siteNavItemView = new SiteNavItemView();
            let expectedObject = {
                logo: siteNavItemView.translation.logo,
                menu: siteNavItemView.translation.menu,
                contact: siteNavItemView.translation.contact
            };

            // Act
            let result = siteNavItemView.serializeData();

            // Assert
            expect(result).to.deep.equal(expectedObject);
        });
    });
});