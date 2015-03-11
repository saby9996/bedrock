/* Base JS unit test spec for bedrock plugincheck/lib/version-comapre.js
 * For reference read the Jasmine and Sinon docs
 * Jasmine docs: https://jasmine.github.io/
 * Sinon docs: http://sinonjs.org/docs/
 */

describe("utils.js", function() {

    var knownVersions = [];

    // set some variable values used by the below tests.
    beforeEach(function () {
        // simplified knownVersions array for testing
        knownVersions = [
            { version: '7.6.6', status: 'outdated' },
            { version: '7.6.6.0', status: 'outdated' },
            { version: '7.6.9', status: 'outdated' },
            { version: '7.7.1', status: 'latest' }
        ];
    });

    it('should return mac', function() {
        var os = Utils.getOS();
        expect(os).toBe('mac');
    });

    it('should return plugin info object for a match', function() {
        var match = Utils.isMatch('7.7.1', knownVersions);
        expect('latest').toBe(match.status);
    });

    it('should return false for non match', function() {
        var match = Utils.isMatch('7.6.9.1', knownVersions);
        expect(match).toBe(false);
    })
});
