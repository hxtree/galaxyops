import * as _ from 'lodash';

// gm - portal - create - admin - portal;

// listTopics

const length = 80;

function shorten(string: string) {
  const res = _.truncate(string, {
    length,
    omission: '***',
  });

  return res;
}
