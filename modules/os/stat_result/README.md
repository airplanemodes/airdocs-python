# os.stat_result

Object whose attributes correspond roughly to the members of the stat structure. It is used for the result of [`os.stat()`](/modules/os/stat.md), [`os.fstat()`](/modules/os/fstat.md) and [`os.lstat()`](/modules/os/lstat.md).

The standard module stat defines functions and constants that are useful for extracting information from a stat structure.

?> On Windows, some items are filled with dummy values.

For backward compatibility, a `stat_result` instance is also accessible as a tuple of at least 10 integers giving the most important (and portable) members of the stat structure, in the order [`st_mode`](/modules/os/stat_result/st_mode.md), [`st_ino`](/modules/os/stat_result/st_ino.md), [`st_dev`](/modules/os/stat_result/st_dev.md), [`st_nlink`](/modules/os/stat_result/st_nlink.md), [`st_uid`](/modules/os/stat_result/st_uid.md), [`st_gid`](/modules/os/stat_result/st_gid.md), [`st_size`](/modules/os/stat_result/st_size.md), [`st_atime`](/modules/os/stat_result/st_atime.md), [`st_mtime`](/modules/os/stat_result/st_mtime.md), [`st_ctime`](/modules/os/stat_result/st_ctime.md). More items may be added at the end by some implementations. For compatibility with older Python versions, accessing `stat_result` as a tuple always returns integers.