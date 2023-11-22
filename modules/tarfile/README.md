# tarfile

**Read and write tar archive files.**

> Source code: [`Lib/tarfile.py`](https://github.com/python/cpython/tree/3.12/Lib/tarfile.py).

The `tarfile` module makes it possible to read and write tar archives, including those using gzip, bz2 and lzma compression. Use the [`zipfile`](/modules/zipfile/) module to read or write `.zip` files, or the higher-level functions in [`shutil`](/modules/shutil/).

Some facts and figures:

* reads and writes [`gzip`](/modules/gzip/), [`bz2`](/modules/bz2/) and [`lzma`](/modules/lzma/) compressed archives if the respective modules are available.
* read/write support for the POSIX.1-1988 (ustar) format.
* read/write support for the GNU tar format including *longname* and *longlink* extensions, read-only support for all variants of the *sparse* extension including restoration of sparse files.
* read/write support for the POSIX.1-2001 (pax) format.
* handles directories, regular files, hardlinks, symbolic links, fifos, character devices and block devices and is able to acquire and restore file information like timestamp, access permissions and owner.
