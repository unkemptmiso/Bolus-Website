from PIL import Image

img = Image.open("/Users/nirmal/Desktop/AI Projects/Bolus Website/site/src/assets/logos/bolus-mark.png")
print("Size:", img.size)
print("Mode:", img.mode)

# Let's count colors
colors = img.getcolors(maxcolors=100000)
if colors:
    print(f"Total unique colors: {len(colors)}")
    # Print a few colors that are not transparent
    non_transparent = [c for c in colors if len(c[1]) == 4 and c[1][3] > 0]
    print(f"Non-transparent colors count: {len(non_transparent)}")
    for count, color in sorted(non_transparent, reverse=True)[:10]:
        print(f"Color {color}: {count} pixels")
else:
    print("Too many colors to count or getcolors returned None")
