#!/bin/bash

#module_name=${1-mall-platform-app}
module_name=${1-mall-merchant-app}
#module_name=${1-mall-member-app}

ssh $ali_ssh <<EOF
mkdir -p "/root/peacetrue/mall/$module_name"
cd "/root/peacetrue/mall/$module_name"
killbp 8202
nohup java -Dspring.profiles.active=aliyun -jar "$module_name-1.0.0-SNAPSHOT.jar" >/dev/null 2>&1  &
EOF

# nohup java -Dspring.profiles.active=aliyun -jar "mall-platform-app-1.0.0-SNAPSHOT.jar" >/dev/null 2>&1  &
# scp $ali_ssh:/root/peacetrue/confucianism/02-output/template-0.pdf ./
# scp docs/antora/modules/ROOT/attachment/Fonts.zip $ali_ssh:/root/peacetrue/confucianism/
# http://101.200.133.86:8200/index.html
