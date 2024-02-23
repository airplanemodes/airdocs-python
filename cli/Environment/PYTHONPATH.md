# PYTHONPATH

Augment the default search path for module files. The format is the same as the shell’s PATH: one or more directory pathnames separated by [`os.pathsep`](/modules/os/pathsep.md) (e.g. colons on Unix or semicolons on Windows). Non-existent directories are silently ignored.

In addition to normal directories, individual `PYTHONPATH` entries may refer to zipfiles containing pure Python modules (in either source or compiled form). Extension modules cannot be imported from zipfiles.

The default search path is installation dependent, but generally begins with `prefix/lib/pythonversion` (see [`PYTHONHOME`](/cli/Environment/PYTHONHOME.md)). It is *always* appended to `PYTHONPATH`.

An additional directory will be inserted in the search path in front of `PYTHONPATH` as described above under [Interface options](/cli/Interface/). The search path can be manipulated from within a Python program as the variable [`sys.path`](/modules/sys/path.md).
