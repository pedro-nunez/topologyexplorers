#!/bin/bash

# Board of size 16x16
# 3 and 7 are generators of the multiplicative group of units modulo 17
# They are used to generate labels for the x and y axes respectively, so that the point (i,j) corresponds to (3^{i}%17,7^{j}%17)

cd ~/topexplorers/cells
for i in {1..16}
do
    x=$(((3**i)%17))
    for j in {1..16}
    do
	y=$(((7**j)%17))
	cp ../templateCell.html \_$x\_$y\_.html
    done
done
