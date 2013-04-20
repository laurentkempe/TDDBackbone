Original comes from [Jeffrey Way](https://github.com/JeffreyWay) - [Backbone--RequireJS--and-Testem-Boilerplate-Project](https://github.com/JeffreyWay/Backbone--RequireJS--and-Testem-Boilerplate-Project) with some adaptations so that I coudl have it running on my Windows 8 machine with WebStorm 6.

# What's This?

This is a simple bit of boilerplate to create a new testable Backbone application. It's setup for:

- Backbone
- Require.js
- Testem
- Package Management, via Jam

## Getting Started

- Git clone this rep
- Make sure you have [Jam](http://jamjs.org/) installed (`npm install -g jamjs`)
- Install Backbone and its dependencies: `jam install`
- Install [Testem](https://github.com/airportyh/testem) (`npm install testem -g`)
- Run the tests: `testem`
- An example Backbone model and test file are included to get you started. Of course, delete these after you've had a chance to review them: `rm app/tests/models/personTest.js && rm app/scripts/models/person.js`
- If you need any other packages, such as Handlebars, just run `jam install handlebars` and you're good to go.
- There's also a *very* minimal Build shell script within the `bin/` directory. To use it, run `bin/build.sh`. This will create a new `dist/` directory, and compile your vendor packages (Backbone, Underscore, etc.) into the `require.js` script. This way, you don't have to update any script references on your page. You can view your compiled app by loading `dist/app/index.html`.
