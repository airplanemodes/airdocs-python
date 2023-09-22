# --check-hash-based-pycs

Control the validation behavior of hash-based `.pyc` files. 

- When set to **default**, checked and unchecked hash-based bytecode cache files are validated according to their default semantics.
- When set to **always**, all hash-based `.pyc` files, whether checked or unchecked, are validated against their corresponding source file.
- When set to **never**, hash-based `.pyc` files are not validated against their corresponding source files.

The semantics of timestamp-based `.pyc` files are unaffected by this option.

### Syntax

```bash
$ python3 --check-hash-based-pycs default
$ python3 --check-hash-based-pycs always
$ python3 --check-hash-based-pycs never
```