// Main State Tree

import { Instance, types } from 'mobx-state-tree';

const EmployeeModel = types.model('Employee', {
  id: types.identifier,
  name: types.string,
  hours_worked: types.number,
});

const EmployerModel = types.model('Employer', {
  id: types.identifier,
  name: types.string,
  location: types.string,
  employees: types.array(EmployeeModel),
});

const RootModel = types.model('Root', {
  employer: EmployerModel,
});

export { RootModel };

export type Root = Instance<typeof RootModel>;
export type Employer = Instance<typeof EmployerModel>;
export type Employee = Instance<typeof EmployeeModel>;
