import nsKeymirror from '../ns-keymirror';

describe('ns-keymirror', () => {
  const namespace = 'testNamespace';
  const testArr = ['TEST0', 'TEST1', 'TEST2'];

  it('creates mirror keys with namespace and separator', () => {
    expect(nsKeymirror(testArr, namespace, '@@')).toEqual({
      TEST0: `${namespace}@@TEST0`,
      TEST1: `${namespace}@@TEST1`,
      TEST2: `${namespace}@@TEST2`,
    });

    expect(nsKeymirror(testArr, namespace, '/')).toEqual({
      TEST0: `${namespace}/TEST0`,
      TEST1: `${namespace}/TEST1`,
      TEST2: `${namespace}/TEST2`,
    });
  });

  it('creates mirror keys without namespace and separator', () => {
    expect(nsKeymirror(testArr)).toEqual({
      TEST0: 'TEST0',
      TEST1: 'TEST1',
      TEST2: 'TEST2',
    });
  });

  it('ignores separator if namespace is not specified', () => {
    expect(nsKeymirror(testArr, null, '@@')).toEqual({
      TEST0: 'TEST0',
      TEST1: 'TEST1',
      TEST2: 'TEST2',
    });
  });

  it('accepts a comma seperated string', () => {
    const testString = 'test, test2, test3';
    const keys = nsKeymirror(testString);
    expect(keys).toEqual({
      test: 'test',
      test2: 'test2',
      test3: 'test3',
    });
  });

  it('accepts a nested object', () => {
    const testObject = {
      a: {
        b: {
          c: 1,
        },
      },
      d: 1,
    };

    const keys = nsKeymirror(testObject);
    expect(keys).toEqual({
      'a.b.c': 'a.b.c',
      d: 'd',
    });
  });

  it('accepts mixed types', () => {
    const extraTypes = { FIRST: null, SECOND: null, THIRD: '' };

    const types = nsKeymirror({
      KEY_ONE: 1,
      KEY_TWO: extraTypes,
      KEY_THREE: extraTypes,
    }, '@NAMESPACE');

    expect(types).toEqual({
      KEY_ONE: '@NAMESPACE/KEY_ONE',
      'KEY_TWO.FIRST': '@NAMESPACE/KEY_TWO.FIRST',
      'KEY_TWO.SECOND': '@NAMESPACE/KEY_TWO.SECOND',
      'KEY_TWO.THIRD': '@NAMESPACE/KEY_TWO.THIRD',
      'KEY_THREE.FIRST': '@NAMESPACE/KEY_THREE.FIRST',
      'KEY_THREE.SECOND': '@NAMESPACE/KEY_THREE.SECOND',
      'KEY_THREE.THIRD': '@NAMESPACE/KEY_THREE.THIRD',
    });
  });


  it('trows a TypError if argument is of wrong type', () => {
    const types = [
      1,
      true,
      null,
      undefined,
      NaN,
    ];
    types.forEach(a => expect(() => nsKeymirror(a)).toThrowError(TypeError));
  });

  it('creates mirror keys with namespace and separator', () => {
    const asyncTypes = { START: null, SUCCESS: null, FAILED: null };

    const types = nsKeymirror({
      CONNECTION_STATUS: 1,
      FETCH_BAUDRATE: asyncTypes,
      FETCH_PORTS: asyncTypes,
    }, '@NAMESPACE');

    expect(types).toEqual({
      CONNECTION_STATUS: '@NAMESPACE/CONNECTION_STATUS',
      'FETCH_BAUDRATE.START': '@NAMESPACE/FETCH_BAUDRATE.START',
      'FETCH_BAUDRATE.SUCCESS': '@NAMESPACE/FETCH_BAUDRATE.SUCCESS',
      'FETCH_BAUDRATE.FAILED': '@NAMESPACE/FETCH_BAUDRATE.FAILED',
      'FETCH_PORTS.START': '@NAMESPACE/FETCH_PORTS.START',
      'FETCH_PORTS.SUCCESS': '@NAMESPACE/FETCH_PORTS.SUCCESS',
      'FETCH_PORTS.FAILED': '@NAMESPACE/FETCH_PORTS.FAILED',
    });
  });


  it('result cannot be mutated', () => {
    const testString = 'test, test2, test3';
    const result = nsKeymirror(testString);
    const nextResult = () => result.newProp = 'test'; // eslint-disable-line no-return-assign

    expect(() => nextResult()).toThrow();
  });

  it('trows a Generic Error if argument does not have extractable keys', () => {
    const types = [
      [],
      {},
    ];
    types.forEach(a => expect(() => nsKeymirror(a)).toThrow());
  });
});
