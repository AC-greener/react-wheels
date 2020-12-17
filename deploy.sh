#!/bin/env bash
#每一步执行成功之后在执行下一步 && 
# ./deploy.sh major.minor.patch
npm version $1 && \
    git push --follow-tags