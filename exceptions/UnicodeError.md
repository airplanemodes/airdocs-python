# UnicodeError

Raised when a Unicode-related encoding or decoding error occurs. It is a subclass of [`ValueError`](/exceptions/ValueError.md).

`UnicodeError` has attributes that describe the encoding or decoding error. For example, `err.object[err.start:err.end]` gives the particular invalid input that the codec failed on.

* `encoding` is the name of the encoding that raised the error.
* `reason` is a string describing the specific codec error.
* `object` is the object the codec was attempting to encode or decode.
* `start` is the first index of invalid data in object.
* `end` is the index after the last invalid data in object.
