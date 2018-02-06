#!/bin/bash

# Script for removing specified release dir from code.bangularjs.org.

echo "################################################"
echo "## Remove a version from code.bangular.js.org ###"
echo "################################################"

ARG_DEFS=(
  "--action=(prepare|publish)"
  "--version-number=([0-9]+\.[0-9]+\.[0-9]+(-[a-z]+\.[0-9]+)?)"
)

function init {
  TMP_DIR=$(resolveDir ../../tmp)
  REPO_DIR=$TMP_DIR/code.bangularjs.org
  echo "code tmp $TMP_DIR"
}

function prepare {
  echo "-- Cloning code.bangularjs.org"
  git clone git@github.com:bangular/code.bangularjs.org.git $REPO_DIR

  #
  # Remove the files from the repo
  #
  echo "-- Removing $VERSION_NUMBER from code.bangularjs.org"
  cd $REPO_DIR
  if [ -d "$VERSION_NUMBER" ]; then
    git rm -r $VERSION_NUMBER
    echo "-- Committing removal to code.bangularjs.org"
    git commit -m "removing v$VERSION_NUMBER"
  else
    echo "-- Version: $VERSION_NUMBER does not exist in code.bangularjs.org!"
  fi
}

function publish {
  cd $REPO_DIR

  echo "-- Pushing code.bangularjs.org to github"
  git push origin master
}

source $(dirname $0)/../utils.inc
