#!/bin/bash

module_name=${1-platform}

ssh $ali_ssh <<EOF
cd "/root/peacetrue/mall/$module_name"
killbp 8200
nohup java -jar "mall-$module_name-app-1.0.0-SNAPSHOT.jar" >/dev/null 2>&1  &
EOF

# scp $ali_ssh:/root/peacetrue/confucianism/02-output/template-0.pdf ./
# scp docs/antora/modules/ROOT/attachment/Fonts.zip $ali_ssh:/root/peacetrue/confucianism/
