# -R

Turn on hash randomization.

This option only has an effect if the [`PYTHONHASHSEED`](/cli/Environment/PYTHONHASHSEED.md) environment variable is set to `0`, since hash randomization is enabled by default.

On previous versions of Python, this option turns on hash randomization, so that the `__hash__()` values of [`str`](/built-in-types/str/) and [`bytes`](/built-in-types/bytes/) objects are “salted” with an unpredictable random value. Although they remain constant within an individual Python process, they are not predictable between repeated invocations of Python.

Hash randomization is intended to provide protection against a denial-of-service caused by carefully chosen inputs that exploit the worst case performance of a dict construction, O(n2) complexity. See http://www.ocert.org/advisories/ocert-2011-003.html for details.

[`PYTHONHASHSEED`](/cli/Environment/PYTHONHASHSEED.md) allows you to set a fixed value for the hash seed secret.

### Syntax

```bash
$ python3 -R
```