# PYTHONHASHSEED

If this variable is not set or set to `random`, a random value is used to seed the hashes of [`str`](/built-in-types/str/) and [`bytes`](/built-in-types/bytes/) objects.

If `PYTHONHASHSEED` is set to an integer value, it is used as a fixed seed for generating the [`hash()`](/built-in-functions/hash.md) of the types covered by the hash randomization.

Its purpose is to allow repeatable hashing, such as for selftests for the interpreter itself, or to allow a cluster of python processes to share hash values.

The integer must be a decimal number in the range `0 ... 4294967295`. Specifying the value `0` will disable hash randomization.
