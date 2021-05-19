#!/bin/bash

module_name=${1-platform}
work_path=$(pwd)
front_path="$work_path/mall-$module_name-front"
back_path="$work_path/mall-$module_name-app"
back_resource_path="$back_path/src/main/resources/public"

rm -rf "$back_resource_path"
cd "$front_path" || exit
npm build
mv "$front_path/build" "$back_resource_path"
cd "$back_path" || exit

./gradlew clean
./gradlew bootJar

#scp "$back_path/build/libs/mall-$module_name-app-1.0.0-SNAPSHOT.jar" "$ali_ssh:/root/peacetrue/mall/$module_name"
#sh restart.sh "$module_name"

# scp $ali_ssh:/root/peacetrue/confucianism/02-output/template-0.pdf ./
# scp docs/antora/modules/ROOT/attachment/Fonts.zip $ali_ssh:/root/peacetrue/confucianism/
