# os.PathLike

An abstract base class for objects representing a file system path, e.g. [`pathlib.PurePath`](/modules/pathlib/PurePath.md).

Has the abstract method `__fspath__()`: Return the file system path representation of the object. The method should only return a [`str`](/built-in-types/str/) or [`bytes`](/built-in-types/bytes/) object, with the preference being for [`str`](/built-in-types/str/).