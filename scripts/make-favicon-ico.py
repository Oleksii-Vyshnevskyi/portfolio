from pathlib import Path
import struct

root = Path.cwd()
public = root / "public"
sources = [
    (16, public / "favicon-16x16.png"),
    (32, public / "favicon-32x32.png"),
    (48, public / "favicon-48x48.png"),
]

images = [(size, path.read_bytes()) for size, path in sources]
header = struct.pack("<HHH", 0, 1, len(images))
directory = bytearray()
offset = 6 + 16 * len(images)
payload = bytearray()

for size, data in images:
    directory.extend(
        struct.pack(
            "<BBBBHHII",
            size if size < 256 else 0,
            size if size < 256 else 0,
            0,
            0,
            1,
            32,
            len(data),
            offset,
        )
    )
    payload.extend(data)
    offset += len(data)

(public / "favicon.ico").write_bytes(header + directory + payload)
