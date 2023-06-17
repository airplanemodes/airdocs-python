# ftplib.all_errors

The set of all exceptions (as a tuple) that methods of [`FTP`](/modules/ftplib/FTP/) instances may raise as a result of problems with the FTP connection (as opposed to programming errors made by the caller). This set includes the four exceptions listed above as well as [`OSError`](/exceptions/OSError.md) and [`EOFError`](/exceptions/EOFError.md).