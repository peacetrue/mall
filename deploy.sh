#!/bin/bash

#module_name=${1-platform}
#module_name=${1-merchant}
module_name=${1-member}
front_module_name="mall-$module_name-front"
back_module_name="mall-$module_name-app"
work_path=$(pwd)
front_path="$work_path/$front_module_name"
back_path="$work_path/$back_module_name"
back_resource_path="$back_path/src/main/resources/public"

#rm -rf "$back_resource_path"
#cd "$front_path" || exit
#npm run build
#mv "$front_path/build" "$back_resource_path"
#cd "$work_path" || exit
#
#./gradlew ":$back_module_name:clean"
#./gradlew ":$back_module_name:bootJar"

scp "$back_path/build/libs/$back_module_name-1.0.0-SNAPSHOT.jar" "$ali_ssh:/root/peacetrue/mall/$back_module_name"
sh restart.sh "$back_module_name"

# scp $ali_ssh:/root/peacetrue/confucianism/02-output/template-0.pdf ./
# scp docs/antora/modules/ROOT/attachment/Fonts.zip $ali_ssh:/root/peacetrue/confucianism/
