# PYTHONHOME

Change the location of the standard Python libraries. By default, the libraries are searched in `prefix/lib/pythonversion` and `exec_prefix/lib/pythonversion`, where **prefix** and **exec_prefix** are installation-dependent directories, both defaulting to `/usr/local`.

When `PYTHONHOME` is set to a single directory, its value replaces both **prefix** and **exec_prefix**. To specify different values for these, set `PYTHONHOME` to `prefix:exec_prefix`.
