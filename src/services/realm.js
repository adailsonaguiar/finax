import Realm from 'realm';

import ExpenseSchema from '../schemas/ExpenseSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ExpenseSchema],
  });
}
