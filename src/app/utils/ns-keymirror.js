export default function nsKeymirror(objectToMirror, namespace = null, separator = '/') {
  // https://www.30secondsofcode.org/js/s/flatten-object
  const flattenObject = (obj, prefix = '') => Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : '';

    if (obj[k] && typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    } else {
      acc[pre + k] = `${obj[k]}`;
    }
    return acc;
  }, {});

  const getKeys = (obj) => {
    if (Array.isArray(obj)) {
      return obj;
    }

    if (obj instanceof Object) {
      const keys = Object.keys(flattenObject(obj));
      return keys;
    }

    if (typeof obj === 'string') {
      return obj.split(',');
    }

    throw new TypeError('nsKeymirror takes arguments of types array, object and string');
  };

  const keyMirror = (obj) => {
    const [keys, mirrored] = [getKeys(obj), {}];

    if (keys.length === 0) {
      throw new Error('nsKeymirror first argument does not contain extractable keys');
    }

    keys.forEach((key) => {
      Object.assign(mirrored, {
        [key.trim()]: namespace ? `${namespace}${separator}${key.trim()}` : key.trim(),
      });
    });

    return Object.freeze(mirrored);
  };

  return keyMirror(objectToMirror);
}
