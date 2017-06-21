from PIL import Image
import os
from os import walk
from os import listdir
from os.path import isfile, join

#files_list = [f for f in listdir(".") if isfile(join(".", f))]
#print(files_list)

if len(argv) != 2:
    print("Incorrect usage: %s <filename>" %(argv[0]))
    exit()

file_name = argv[1]

with Image.open(file_name) as img:

	name, extension = os.path.splitext(file_name)

	if extension == '.png': 
		img = img.convert('RGB')
		img.save(str(name + '.jpg'))
		os.system("rm " + file_name)
		file_name = str(name + '.jpg')

	width,height = img.size
	print(str(width) + " " + str(height))

	if height > 600:
		new_width = ((int)((width*600.0)/height))
		img = img.resize((new_width,600), Image.ANTIALIAS)

	# print("Image size after resizing")
	width,height = img.size
	# print(str(width) + " " + str(height))

	img.save(file_name, optimize=True, quality=85)

	return file_name