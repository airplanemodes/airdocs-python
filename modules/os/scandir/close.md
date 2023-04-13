# os.scandir.close()

Close the iterator and free acquired resources.

This is called automatically when the iterator is exhausted or garbage collected, or when an error happens during iterating. However it is advisable to call it explicitly or use the [`with`](/statements/with.md) statement.

[**back to os.scandir()**](/modules/os/scandir.md)