#!/bin/bash
BASE_DIR=$1
mkdir -p $BASE_DIR/.deploy
RUSH_LIST_JSON=$(rush list --only tag:deploy-app --json)
RUSH_LIST_ARRAY=$(RUSH_LIST_JSON | jq '.[]')
PROJECTS=${RUSH_LIST_JSON[projects]}
for row in $(echo "${PROJECTS}" | jq -r '.[] | @base64'); do
  _jq() {
    echo "${row}" | base64 --decode | jq -r "${1}"
  }

  name=$(_jq '.name')
  appShortName=${name//@cats-cradle\//deploy_}

  echo "Rush deploy $name...."
  node $BASE_DIR/common/scripts/install-run-rush.js deploy --overwrite --project $name

  echo "Compressing $appShortName"
  tar -czvf $BASE_DIR/.deploy/$appShortName.tar.gz $BASE_DIR/common/deploy --remove-files
done
