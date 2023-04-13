# os.stat_result.st_reparse_tag

When [`st_file_attributes`](/modules/os/stat_result/st_file_attributes.md) has the `FILE_ATTRIBUTE_REPARSE_POINT` set, this field contains the tag identifying the type of reparse point. See the `IO_REPARSE_TAG_*` constants in the [`stat`](/modules/stat/) module.