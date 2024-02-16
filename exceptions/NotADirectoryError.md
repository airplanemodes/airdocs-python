# NotADirectoryError

Raised when a directory operation (such as [`os.listdir()`](/modules/os/listdir.md)) is requested on something which is not a directory. On most POSIX platforms, it may also be raised if an operation attempts to open or traverse a non-directory file as if it were a directory.

Corresponds to [`errno.ENOTDIR`](/modules/errno/ENOTDIR.md).
