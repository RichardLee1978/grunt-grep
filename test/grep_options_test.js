var grunt = require('grunt');

exports.grep = {
	compile: function(test){
		'use strict';

		test.expect(9);

		var actual = grunt.file.read('tmp/start_end_pattern.js');
		var expected = grunt.file.read('test/expected/start_end_pattern.js');
		test.equal(expected, actual, 'should apply start and end pattern set in options');

		var actual = grunt.file.read('tmp/file_override.js');
		var expected = grunt.file.read('test/expected/file_override.js');
		test.equal(expected, actual, 'should override existing file if fileOverride options is true');

		test.ok(grunt.file.isDir('tmp/src_folder_multi_source'), 'should create directory for multi-source input');
		test.ok(grunt.file.isFile('tmp/src_folder_multi_source/css_multi_line.css') && grunt.file.isFile('tmp/src_folder_multi_source/css_multi_line.css'), 'should create files matching patterns for multi-source input');

		test.ok(grunt.file.isDir('tmp/src_folder_one_source'), 'should create directory for one-source input');
		test.ok(grunt.file.isFile('tmp/src_folder_one_source/css_multi_line.css'), 'should create files matching patterns for one-source input');

		test.ok(grunt.file.isFile('tmp/src_file_forced'), 'should create files (not folders) if isDestAFile truthy');

		var actual = grunt.file.read('tmp/custom_denotation.js');
		var expected = grunt.file.read('test/expected/custom_denotation.js');
		test.equal(expected, actual, 'should override @grep denotation to custom one');

		var actual = grunt.file.read('tmp/non_removing_denotation.js');
		var expected = grunt.file.read('test/expected/non_removing_denotation.js');
		test.equal(expected, actual, 'should not remove denotatiom if option is false');

		test.done();
	}
};