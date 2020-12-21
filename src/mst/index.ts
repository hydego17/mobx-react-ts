// Main State Tree
import { v4 as uuidv4 } from "uuid";
import { applySnapshot, Instance, types } from "mobx-state-tree";

// Employee Model (Node of Employer)
const EmployeeModel = types
  .model("Employee", {
    id: types.identifier,
    name: types.string,
    hoursWorked: types.number,
  })
  .actions((self) => {
    function editEmployee(name: string, hoursWorked: number) {
      applySnapshot(self, {
        ...self,
        name,
        hoursWorked,
      });
    }

    return { editEmployee };
  });

// Employer Model (Node of Root)
const EmployerModel = types
  .model("Employer", {
    id: types.identifier,
    name: types.string,
    location: types.string,
    employees: types.array(EmployeeModel),
  })
  .actions((self) => {
    function newEmployee(name: string, hoursWorked: number) {
      const id = uuidv4();

      applySnapshot(self, {
        ...self,
        employees: [{ id, name, hoursWorked }, ...self.employees],
      });
    }

    return { newEmployee };
  })
  .views((self) => ({
    get employeeNum() {
      return self.employees.length;
    },

    filterEmployees(searchString: string) {
      return self.employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchString.toLowerCase())
      );
    },
  }));

// Root Model (Tree)
const RootModel = types.model("Root", {
  employer: EmployerModel,
});

export { RootModel };

export type Root = Instance<typeof RootModel>;
export type Employer = Instance<typeof EmployerModel>;
export type Employee = Instance<typeof EmployeeModel>;
