
# emoji-unicode-map

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/emoji-unicode-map.svg)](https://www.npmjs.com/package/emoji-unicode-map) [![Downloads](https://img.shields.io/npm/dt/emoji-unicode-map.svg)](https://www.npmjs.com/package/emoji-unicode-map) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Unicode to name emoji mapping.

## :cloud: Installation

```sh
$ npm i --save emoji-unicode-map
```


## :clipboard: Example



```js
const unicode = require("emoji-unicode-map");

console.log(unicode.get("😍"));
// heart_eyes

console.log(unicode.emoji);
// { '💯': '100',
//   '🔢': '1234',
//   '😀': 'grinning',
//   '😬': 'grimacing',
//   '😁': 'grin',
//   '😂': 'joy',
//   ...
// }
```

## :memo: Documentation


### `get(char)`
Gets the emoji name, by providing the character.

#### Params
- **String** `char`: The emoji character.

#### Return
- **String** The emoji name.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`emoji-chars`](https://github.com/IonicaBizau/emoji-chars#readme)—Get the emoji chars as array.
 - [`emoji-dictionary`](https://github.com/IonicaBizau/emoji-dictionary#readme)—Convert emoji names in unicode characters and vice versa.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
