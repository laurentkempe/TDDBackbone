define(['backbone'], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({

        validate: function(attrs, options) {
            if (attrs.last === '') {
                return "A name is required.";
            }
        },

        fullName: function() {
            return this.get('first') + ' ' + this.get('last');
        },

        yob: function() {
            return (new Date).getFullYear() - this.get('age');
        }
    });

});