#!/usr/bin/env python3
"""Assemble a page from shared fragments + a body file.
Usage: python3 _dev/build-page.py <out.html> <title> <active-nav-href> <body-fragment-path>
Keeps head/header/footer byte-identical across pages except <title> + aria-current.
"""
import sys, re
out, title, active, bodypath = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
head = open('_dev/shared-head.frag').read()
header = open('_dev/shared-header.frag').read()
footer = open('_dev/shared-footer.frag').read()
body = open(bodypath).read()

head = re.sub(r'<title>.*?</title>', f'<title>{title}</title>', head, flags=re.S)
# move aria-current to the active nav item
header = header.replace(' aria-current="page"', '')
header = header.replace(f'class="nav-link" href="{active}"', f'class="nav-link" aria-current="page" href="{active}"')

page = f"{head}\n<body>\n\n  {header}\n\n  <main>\n{body}\n  </main>\n\n  {footer}\n\n</body>\n</html>\n"
open(out, 'w').write(page)
print(f"built {out}")
