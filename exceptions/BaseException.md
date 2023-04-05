# BaseException

The base class for all built-in exceptions.

It is not meant to be directly inherited by user-defined classes (for that, use [`Exception`](/exceptions/Exception.md)). If [`str()`](/built-in-functions/str.md) is called on an instance of this class, the representation of the argument(s) to the instance are returned, or the empty string when there were no arguments.