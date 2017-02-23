var assert = require( 'chai' ).assert;
var fs = require( 'fs-extra' );

var sugarcoat = require( '../index' );
var fsp = require( '../lib/fs-promiser' );

/**
 *
 * consume assets (nested)
 * prefix assets (default and specified prefix)
 * output head.hbs (template verification?)
 *
 */

// suite( 'Render: globPartials', function() { test( '', function() {});});
// suite( 'Render: readPartials', function() {});
// suite( 'Render: registerPartials', function() {});
// suite( 'Render: renderLayout', function() {});
suite( 'Render: File Prefixer', function() {

    test( 'By default, assets are prefixed as .sugar-example. Output file is prefixed with "prefixed-"', function( done ) {

        var config = {
            settings: {
                dest: './test/sugarcoat',
                prefix: {
                    assets: [
                        './test/assert/prefixAssets.css'
                    ]
                }
            },
            sections: [
                {
                    title: 'CSS File',
                    files: './test/assert/parseVarCode.css'
                },
                {
                    title: 'CSS File 2',
                    files: './test/assert/parseVarCode.css',

                }
            ]
        };

        var setupFiles = [
            './test/assert/prefixAssets-assertDefault.css',
            './test/sugarcoat/sugarcoat/css/prefixed-prefixAssets.css'
        ];

        sugarcoat( config )
        .then( function() {

            return Promise.all( setupFiles.map( fsp.readFile ))
            .then( function( assets ) {

                assert.equal( assets[ 0 ], assets[ 1 ], 'prefixAssets-assertDefault.css matches');
                done();
            });
        });
    });

    test( 'Prefixed output should use the selector designated in the config: `prefix.selector`', function( done ) {

        var config = {
            settings: {
                dest: './test/sugarcoat',
                prefix: {
                    assets: [
                        './test/assert/prefixAssets.css'
                    ],
                    selector: '.designated-prefix'
                }
            },
            sections: [
                {
                    title: 'CSS File',
                    files: './test/assert/parseVarCode.css'
                }
            ]
        };

        var setupFiles = [
            './test/assert/prefixAssets-assert.css',
            './test/sugarcoat/sugarcoat/css/prefixed-prefixAssets.css'
        ];

        sugarcoat( config )
        .then( function() {

            return Promise.all( setupFiles.map( fsp.readFile ))
            .then( function( assets ) {
                assert.equal( assets[ 0 ], assets[ 1 ], 'prefixAssets-assert.css matches');
                done();
            });
        });
    });

    teardown( function ( done ) {

        fs.remove( './test/sugarcoat', function ( err ) {

            if ( err ) return console.error( err );

            done();
        });
    });
});
// suite( 'Render: prefixAssets', function() {});
// suite( 'Render: copyAssets', function() {});