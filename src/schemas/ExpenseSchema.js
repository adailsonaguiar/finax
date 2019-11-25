export default class ExpenseSchema {
  static schema = {
    name: 'Expense',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      description: 'string',
      value: 'string',
      date: 'string',
      category: 'string',
      status: 'int',
    },
  };
}
