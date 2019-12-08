export default class ContasSchema {
  static schema = {
    name: 'contas',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      atualizacao: 'string',
      description: 'string',
      balance: 'string',
      account: 'string',
    },
  };
}
