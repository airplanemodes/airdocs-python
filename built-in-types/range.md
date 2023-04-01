# range

The `range` type represents an immutable sequence of numbers and is commonly used for looping a specific number of times in `for` loops.

Ranges may be constructed using the type constructor: [`range()`](/built-in-functions/range.md).

?> The advantage of the `range` type over a regular `list` or `tuple` is that a range object will always take the same (small) amount of memory, no matter the size of the range it represents (as it only stores the **start**, **stop** and **step** values, calculating individual items and subranges as needed).