# TypeError

Raised when an operation or function is applied to an object of inappropriate type. The associated value is a string giving details about the type mismatch.

This exception may be raised by user code to indicate that an attempted operation on an object is not supported, and is not meant to be. If an object is meant to support a given operation but has not yet provided an implementation, [`NotImplementedError`](/exceptions/NotImplementedError.md) is the proper exception to raise.

Passing arguments of the wrong type (e.g. passing a [`list`](/built-in-types/list/) when an [`int`](/built-in-types/int/) is expected) should result in a `TypeError`, but passing arguments with the wrong value (e.g. a number outside expected boundaries) should result in a [`ValueError`](/exceptions/ValueError.md).
