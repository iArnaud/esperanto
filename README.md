esperanto
=========

Opinionated boilerplate and best practices for building high-quality, large, multi-module client-side applications in JavaScript.


Initial setup
===============

1. Install NodeJS if not already installed.  See [http://nodejs.org/](http://nodejs.org/)
2. Install the Grunt command line tools:  npm install -g grunt-cli (you will have to run this as root) 
3. cd to your project root directory and run: sudo npm install
4. To install bower dependencies run : grunt bower:install


Running UI Unit Tests
===============
1. cd to your project root directory
2. Run the Grunt task simply by typing "grunt" at the command line


CSS Framework Installation
===============
These instructions are for CentOS. Mac should be similar or easier. For windows see the instructions here (https://wiki.openstack.org/wiki/RubyGems#Windows)[https://wiki.openstack.org/wiki/RubyGems#Windows]
These commands use "sudo" to run as root. Please type your usual password when prompted.
1) cd to your project root directory 
2) check if you have ruby installed by running "ruby --version"
   - if you get a response that is 1.8.7 or newer, you can skip to the next step
   - if you get "command not found" or a number lower than 1.8.7, then run "sudo yum install ruby" and try again. or download and compile from http://www.ruby-lang.org/en/downloads
3) sudo yum install rubygems
4) sudo gem install bundler
5) sudo bundle install

Use these grunt commands to compile Sass to CSS:

```javascript
	grunt sass
		- compile Sass using dev mode (whitespace & comments)
		- starts watch process to listen for changes and auto-compile

	grunt sass:dev
		- compile Sass using dev mode, but do not start a watch process   
  
	grunt sass:prod
		- compile Sass using production mode (optimzed, no whitespace/comments
```javascript


