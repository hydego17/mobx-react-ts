import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Root } from "../mst";
import { EmployeeComponent } from "./Employee";

interface EmployerComponentProps {
  rootTree?: Root;
}
interface EmployerComponentState {
  employeeName: string;
  hoursWorked: string;
  searchString: string;
}

@inject("rootTree")
@observer
class EmployerComponent extends Component<
  EmployerComponentProps,
  EmployerComponentState
> {
  constructor(props: EmployerComponentProps) {
    super(props);
    this.state = {
      employeeName: "",
      hoursWorked: "",
      searchString: "",
    };
  }

  changeEmployeeName = (e: any) => {
    const employeeName = e.target.value;
    this.setState({ employeeName });
  };

  changeHoursWorked = (value: string) => {
    this.setState({ hoursWorked: value });
  };

  searchStringChange = (e: any) => {
    const searchString = e.target.value;
    this.setState({ searchString });
  };

  onSubmit = (e: any) => {
    e.preventDefault();

    const { employeeName, hoursWorked } = this.state;
    const { rootTree } = this.props;

    if (!rootTree) return null;

    rootTree.employer.newEmployee(employeeName, Number(hoursWorked));

    this.setState({ employeeName: "", hoursWorked: "" });
  };

  render() {
    const { employeeName, hoursWorked, searchString } = this.state;
    const { rootTree } = this.props;

    if (!rootTree) return null;

    const {
      employer: { name, location, employees, employeeNum, filterEmployees },
    } = rootTree;

    const filteredEmployees = filterEmployees(searchString);

    return (
      <Box>
        <Heading size="lg">{name}</Heading>
        <Heading size="md">{location}</Heading>
        <Text fontSize="sm" my={4}>
          Total number of employees: {employeeNum}
        </Text>
        <Divider mb={6} />

        <Heading size="md">Employee</Heading>

        <FormControl maxW="lg" py={4} id="search">
          <Input
            type="search"
            value={searchString}
            onChange={this.searchStringChange}
            placeholder="Search employee name"
          />
        </FormControl>

        {filteredEmployees.map((employee) => (
          <EmployeeComponent key={employee.id} employee={employee} />
        ))}

        <Divider my={6} />

        <Heading size="md">New Employee:</Heading>

        <Box as="form" maxW="lg" py={4} onSubmit={this.onSubmit}>
          <FormControl pb={2} id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={employeeName}
              onChange={this.changeEmployeeName}
            />
          </FormControl>

          <FormControl pb={2} id="hoursWoked">
            <FormLabel>Hours Worked</FormLabel>
            <NumberInput
              value={hoursWorked}
              onChange={this.changeHoursWorked}
              max={50}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Button type="submit" colorScheme="green" my={2}>
            Submit
          </Button>
        </Box>
      </Box>
    );
  }
}

export { EmployerComponent };
