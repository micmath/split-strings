split-strings
==========
Splits strings into tokens by given separator except treating quoted part as a single token.

_This repo is a clone of elgs/splitargs `splitargs` project with the Flamenco/splitargs updates merged in to allow escaped characters._

#Installation
`npm install split-strings`

#Usage
```javascript
var splitStrings = require('split-strings');

var i1 = "I said 'I am sorry.', and he said \"it doesn't matter.\"";
var o1 = splitStrings(i1);
console.log(o1);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i2 = "I said \"I am sorry.\", and he said \"it doesn't matter.\"";
var o2 = splitStrings(i2);
console.log(o2);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i3 = 'I said "I am sorry.", and he said "it doesn\'t matter."';
var o3 = splitStrings(i3);
console.log(o3);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i4 = 'I said \'I am sorry.\', and he said "it doesn\'t matter."';
var o4 = splitStrings(i4);
console.log(o4);
/*
[ 'I',
  'said',
  'I am sorry.,',
  'and',
  'he',
  'said',
  'it doesn\'t matter.' ]
*/

var i5 = 'I\\ said\\ it\\ matters.';
var o5 = splitStrings(i5);
console.log(o5);
/*
[ 'I said it matters.' ]
*/

var i6 = 'What\\\'s the matter?';
var o6 = splitStrings(i6);
console.log(o6);
/*
[ 'What\'s', 
  'the', 
  'matter?'
]
*/

```
