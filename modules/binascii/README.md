# binascii

**Convert between binary and ASCII.**

The `binascii` module contains a number of methods to convert between binary and various ASCII-encoded binary representations. Normally, you will not use these functions directly but use wrapper modules like `uu` or [`base64`](/modules/base64/) instead. The `binascii` module contains low-level functions written in C for greater speed that are used by the higher-level modules.