var isWin = /^win/.test(process.platform);
var isMac = /^darwin/.test(process.platform);
var isLinux32 = /^linux/.test(process.platform) && /^x32/.test(process.arch);
var isLinux64 = /^linux/.test(process.platform) && /^x64/.test(process.arch);;
var os = "unknown";

if (isWin)
    os = "win32";
if (isMac)
    os = "mac";
if (isLinux32)
    os = "linux32";
if (isLinux64)
    os = "linux64";

var nwVer = '0.10.0';

var nwExec = "";

if (!isWin) {
    nwExec = "cd release/" + os + "/ && ./electron ../../src";
} else {
    nwExec = "release\\" + os + "\\electron.exe src";
}
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        less: {
            './src/css/app.css': ['./src/css/app.less']
        },

        nwjs: {
            options: {
                version: nwVer,
                buildDir: './release', // Where the build version of my NW.js app is saved
                platforms: ['win32'] // These are the platforms that we want to build
            },
            src: ['./src/**/*']
        },
        'build-electron-app': {
            options: {
                build_dir: './release',
                platforms: ['win32', 'linux32', 'linux64'],
                app_dir: './src'
            }
        },
        clean: ["./releases/**/*"],
        shell: {
            install: {
                command: function() {
                    return 'npm install';
                },
                options: {
                    stdout: true,
                    stderr: true,
                    stdin: true
                }
            },
            run: {
                command: function() {
                    return nwExec;
                },
                options: {
                    stdout: true,
                    stderr: true,
                    stdin: true
                }

            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-electron-app-builder');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['less', 'shell:run']);
    grunt.registerTask('run', ['default']);
    grunt.registerTask('install', ['shell:install', 'build-electron-app']);
    grunt.registerTask('build', ['less', 'build-electron-app']);


};