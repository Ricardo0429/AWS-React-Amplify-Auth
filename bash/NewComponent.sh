#!/bin/bash
from=`pwd`/templates/Component
dest=$(dirname `pwd`)/src/components
clear
echo "Component name:"
read name
mkdir $dest/$name
chmod 775 $dest/$name
cp -R $from/. $dest/$name/
cd $dest/$name
mv "Component.css" "$name.css"
mv "Component.js" "$name.js"
mv "Container.js" "${name}Container.js"
mv "Component.test.js" "$name.test.js"
mv "Container.test.js" "${name}Container.test.js"

for file in *
do
while read a ;
do
str=${a//\[ComponentName\]/$name} ;
echo $str
done < $file > $file.t ;
mv $file{.t,}
done
