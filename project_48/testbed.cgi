#!/usr/bin/env python2.7
# -*- coding: UTF-8 -*-
import cgi
import cgitb
cgitb.enable()
import sys
import traceback
import json

def htmlTop():
	print("""Content-type:text/html\n\n
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="utf-8"/>
					<title>A Test Page</title>
				</head>
				<body>""")
def getData():
	
	form = cgi.FieldStorage()
	#form=json.loads(formData)
	#tableData,checkbox1,checkbox2
	
	if "checkbox1" not in form or "checkbox2" not in form:
		print ("<H1>Error</H1>")
		print ("Didn't get any post datas.")
	else:
		if "tableData" in form:
			tbData=json.loads(form["tableData"].value)
			for d in tbData:
				for key, value in d.iteritems():
					print ("key: {0}, value:{1}".format(key,value))
		else: 
			print("please select atleast one data")

		print ("<p>checkbox1:{0}".format(form["checkbox1"].value))
		print ("<p>checkbox2:{0}".format(form["checkbox2"].value))

def htmlBottom():
	print("""</body>
		</html>""")
		


if __name__ == "__main__":
	try:
		htmlTop()
		getData()		
		htmlBottom()
	except:
		cgi.print_exception()
