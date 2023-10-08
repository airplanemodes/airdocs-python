# zipimport

**Import modules from Zip archives.**

> Source code: [`Lib/zipimport.py`](https://github.com/python/cpython/tree/3.12/Lib/zipimport.py)

This module adds the ability to import Python modules (`*.py`, `*.pyc`) and packages from ZIP-format archives. It is usually not needed to use the `zipimport` module explicitly. It is automatically used by the built-in [`import`](/statements/import.md) mechanism for [`sys.path`](/modules/sys/path.md) items that are paths to ZIP archives.

Typically, [`sys.path`](/modules/sys/path.md) is a list of directory names as strings. This module also allows an item of [`sys.path`](/modules/sys/path.md) to be a string naming a ZIP file archive. The ZIP archive can contain a subdirectory structure to support package imports, and a path within the archive can be specified to only import from a subdirectory. For example, the path `example.zip/lib/` would only import from the `lib/` subdirectory within the archive.

Any files may be present in the ZIP archive, but importers are only invoked for `.py` and `.pyc` files. ZIP import of dynamic modules (`.pyd`, `.so`) is disallowed. Note that if an archive only contains `.py` files, Python will not attempt to modify the archive by adding the corresponding `.pyc` file, meaning that if a ZIP archive doesn’t contain `.pyc` files, importing may be rather slow.