# email.message.EmailMessage.as_string()

Return the entire message flattened as a string.

When optional **unixfrom** is true, the envelope header is included in the returned string. **unixfrom** defaults to `False`. For backward compatibility with the base `Message` class **maxheaderlen** is accepted, but defaults to `None`, which means that by default the line length is controlled by the `max_line_length` of the policy. The **policy** argument may be used to override the default policy obtained from the message instance. This can be used to control some of the formatting produced by the method, since the specified **policy** will be passed to the [`Generator`](/modules/email/generator/Generator/).

Flattening the message may trigger changes to the [`EmailMessage`](/modules/email/message/EmailMessage/) if defaults need to be filled in to complete the transformation to a string (for example, MIME boundaries may be generated or modified).

Note that this method is provided as a convenience and may not be the most useful way to serialize messages in your application, especially if you are dealing with multiple messages. See [`email.generator.Generator`](/modules/email/generator/Generator/) for a more flexible API for serializing messages. Note also that this method is restricted to producing messages serialized as “7 bit clean” when [`utf8`](/modules/email/policy/EmailPolicy/utf8.md) is `False`, which is the default.

### Syntax

```python
email.message.EmailMessage.as_string(unixfrom=False, maxheaderlen=None, policy=None)
```
