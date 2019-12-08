export default class ContasSchema {
  static schema = {
    name: 'contas',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      name: 'string',
      atualizacao: 'string',
      categoria: 'string',
      balance: 'string',
      account: 'string',
    },
  };
}
