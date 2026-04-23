import AppKit
import Foundation

let outputDirectory = URL(fileURLWithPath: FileManager.default.currentDirectoryPath)
  .appendingPathComponent("public")

let sizes = [16, 32, 48, 180, 512]
let background = NSColor(calibratedRed: 245 / 255, green: 245 / 255, blue: 245 / 255, alpha: 1)
let foreground = NSColor(calibratedRed: 5 / 255, green: 5 / 255, blue: 5 / 255, alpha: 1)

func drawIcon(size: Int) throws {
  let canvasSize = NSSize(width: size, height: size)
  let image = NSImage(size: canvasSize)

  image.lockFocus()

  NSGraphicsContext.current?.imageInterpolation = .high
  background.setFill()
  NSBezierPath(rect: NSRect(origin: .zero, size: canvasSize)).fill()

  let fontSize = max(7, CGFloat(size) * (224.0 / 512.0))
  let tracking = fontSize * 0.08
  let font =
    NSFont(name: "Inter-Bold", size: fontSize)
    ?? NSFont(name: "HelveticaNeue-Bold", size: fontSize)
    ?? NSFont.systemFont(ofSize: fontSize, weight: .bold)

  let paragraph = NSMutableParagraphStyle()
  paragraph.alignment = .center

  let attributes: [NSAttributedString.Key: Any] = [
    .font: font,
    .foregroundColor: foreground,
    .kern: tracking,
    .paragraphStyle: paragraph
  ]

  let text = NSAttributedString(string: "OV", attributes: attributes)
  let textSize = text.size()
  let drawRect = NSRect(
    x: (CGFloat(size) - textSize.width) / 2 - tracking / 2,
    y: (CGFloat(size) - textSize.height) / 2,
    width: textSize.width + tracking,
    height: textSize.height
  )
  text.draw(in: drawRect)

  image.unlockFocus()

  guard
    let tiff = image.tiffRepresentation,
    let bitmap = NSBitmapImageRep(data: tiff),
    let png = bitmap.representation(using: .png, properties: [:])
  else {
    throw NSError(domain: "Favicon", code: 1)
  }

  let url = outputDirectory.appendingPathComponent("favicon-\(size)x\(size).png")
  try png.write(to: url)
}

for size in sizes {
  try drawIcon(size: size)
}
