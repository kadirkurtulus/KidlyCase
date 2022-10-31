import _ from 'lodash';

const toObj = (mix: any): object => {
  if (_.isEmpty(mix)) return {};

  if (Array.isArray(mix)) {
    let obj = {};
    mix.map(x => {
      obj = { ...obj, ...x }
    })
    return obj;

  } else {
    return mix;
  }
};

// Style merge
const mergeStyle = (...arg: any): object => {
  let tmp,
    obj,
    str = {};

  for (let i = 0; i < _.size(arg); i++) {
    if ((tmp = arg[i])) {
      obj = toObj(tmp);
      if (!_.isEmpty(obj)) {
        str = {
          ...str,
          ...obj,
        };
      }
    }
  }

  return str;
};

export { mergeStyle };
