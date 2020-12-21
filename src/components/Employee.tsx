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
  Flex,
} from "@chakra-ui/react";

import { Employee } from "../mst";

interface EmployeeComponentProps {
  employee: Employee;
}
interface EmployeeComponentState {
  employeeName: string;
  hoursWorked: number;
  edit: boolean;
}

@inject("rootTree")
@observer
class EmployeeComponent extends Component<
  EmployeeComponentProps,
  EmployeeComponentState
> {
  constructor(props: EmployeeComponentProps) {
    super(props);

    this.state = {
      employeeName: this.props.employee.name,
      hoursWorked: this.props.employee.hoursWorked,
      edit: false,
    };
    this.changeEmployeeName = this.changeEmployeeName.bind(this);
    this.changeHoursWorked = this.changeHoursWorked.bind(this);
    this.toggleEddit = this.toggleEddit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeEmployeeName(e: any) {
    const employeeName = e.target.value;
    this.setState({ employeeName });
  }

  changeHoursWorked(value: string) {
    this.setState({ hoursWorked: Number(value) });
  }

  toggleEddit() {
    this.setState((prev) => ({
      edit: !prev.edit,
    }));
  }

  onSubmit(e: any) {
    e.preventDefault();

    const { employeeName, hoursWorked } = this.state;
    this.props.employee.editEmployee(employeeName, Number(hoursWorked));

    this.toggleEddit();
  }

  render() {
    const { name, hoursWorked } = this.props.employee;
    const { edit } = this.state;
    return (
      <Box pt={4}>
        {edit ? (
          <Box as="form" maxW="lg" py={4} onSubmit={this.onSubmit}>
            <FormControl pb={2} id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={this.state.employeeName}
                onChange={this.changeEmployeeName}
              />
            </FormControl>

            <FormControl pb={2} id="hoursWoked">
              <FormLabel>Hours Worked</FormLabel>
              <NumberInput
                defaultValue={hoursWorked}
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

            <Button mr={2} size="sm" type="submit" colorScheme="green" my={2}>
              Edit
            </Button>
            <Button size="sm" type="button" onClick={this.toggleEddit} my={2}>
              Cancel
            </Button>
          </Box>
        ) : (
          <>
            <Flex maxW="lg" justify="space-between" align="center">
              <Box>
                <Text>Name: {name} </Text>
                <Text>Hours Worked: {hoursWorked} </Text>
              </Box>

              <Button size="sm" onClick={this.toggleEddit}>
                Edit
              </Button>
            </Flex>
          </>
        )}
      </Box>
    );
  }
}

export { EmployeeComponent };
