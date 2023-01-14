import * as _ from 'lodash';

// gm - portal - create - admin - portal;

// listTopics

const length = 80;

function shorten(string) {
  let res = _.truncate(string, {
    length: length,
    omission: '***',
  });

  return res;
}
