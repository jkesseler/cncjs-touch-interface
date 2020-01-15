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

  it('trows a Generic Error if argument does not have extractable keys', () => {
    const types = [
      [],
      {},
    ];
    types.forEach(a => expect(() => nsKeymirror(a)).toThrow());
  });
});
