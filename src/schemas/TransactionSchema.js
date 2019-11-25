export default class TransactionSchema {
  static schema = {
    name: 'transaction',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      type: 'string',
      description: 'string',
      value: 'string',
      date: 'string',
      category: 'string',
      status: 'int',
    },
  };
}
