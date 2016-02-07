

const names = require("emoji-name-map")
    , iterateObject = require("iterate-object")
    ;

const unicode = module.exports = {};
unicode.emoji = {};

iterateObject(names.emoji, (value, name) => {
    unicode.emoji[value] = name;
});

/**
 * get
 * Gets the emoji name, by providing the character.
 *
 * @name get
 * @function
 * @param {String} char The emoji character.
 * @return {String} The emoji name.
 */
unicode.get = function (char) {
    return unicode.emoji[char];
};
