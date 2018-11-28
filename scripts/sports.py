"""
Format for Sports Team Updation Google Form:
	1. title: Team title (Eg: Basketball (Boys))
	2. captainName: Name of Team Captain
	3. introduction:	
	4. selectionProcedure: 
	5. competitions: (comma-separated)
	6. achievements: (comma-separated)
	7. image: (Eg: IMG_472234.jpg)

This form's reponses spreadsheet is then downloaded in csv format as "sports.csv"

This script converts that to sports.json
"""

import csv
import json
file1 = "sports"
csvfile = open(file1 + '.csv', 'r')
jsonfile = open(file1 + '.json', 'w')

fieldnames = ("timestamp","title","captainName","introduction","selectionProcedure","competitions","achievements","image")

# True when the csv file has a line for the headings from Form responses Spreadsheet (Eg: Name, title, timestamp, etc.)
heading = True

reader = csv.DictReader( csvfile, fieldnames)
mainheadingIndex = 0
jsonfile.write('var ' + file1 + ' = [\n')

for row in reader:
	# to skip the first entry which makes up the headings
	if heading == True:
			heading = False
			continue

	# To make formatting right
	# the first main heading doesn't need a ',' in the beginning
	if mainheadingIndex != 0:
		jsonfile.write(",\n")
	else:
		mainheadingIndex+=1
	subHeadingIndex = 0
	jsonfile.write('{\n')
	
	for i, j in row.items():
		# To make formatting right
		# the first subheading in each main doesn't need a ',' in the beginning
		if subHeadingIndex == 0:
			jsonfile.write('\t\"' + str(i) + "\": ")
			# To check if value in None in csv.
			# If None, give json an empty string
			if j == None:
				jsonfile.write("\"\"")
			else:
				jsonfile.write("\"" + str(j) + "\"")
			subHeadingIndex+=1
		else:
			jsonfile.write(',\n\t\"' + str(i) + "\": ")
			if j == None:
				jsonfile.write("\"\"")
			else:
				jsonfile.write("\"" + str(j) + "\"")
	jsonfile.write('\n}')
jsonfile.write('\n]\n')