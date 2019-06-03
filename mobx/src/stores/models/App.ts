import { types as t } from 'mobx-state-tree';
export const School = t.model('School', {
  name: t.optional(t.string, 'name')
});
