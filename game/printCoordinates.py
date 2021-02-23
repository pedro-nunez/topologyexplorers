#!/usr/bin/env python3
import sys

rows=[]
for i in range(9,25):
    rows.append([])
    for j in range(9,25):
        rows[i-9].append([(3**i)%17,(7**j)%17])

original_stdout = sys.stdout # Save a reference to the original standard output

with open('coordinates.txt','w') as f:
    sys.stdout = f # Change the standard output to the file we created.
    for j in range(16):
        string = ""
        for i in range(16):
            string += "("+str(rows[i][15-j][0]).zfill(2)+","+str(rows[i][15-j][1]).zfill(2)+") "
        print(string)
    sys.stdout = original_stdout # Reset the standard output to its original value
