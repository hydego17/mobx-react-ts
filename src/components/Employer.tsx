import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  Divider,
  Button,
} from '@chakra-ui/react';
import { Root } from '../mst';
import { EmployeeComponent } from './Employee';

interface EmployerComponentProps {
  rootTree?: Root;
}
interface EmployerComponentState {
  employeeName: string;
  hoursWorked: string;
}

@inject('rootTree')
@observer
class EmployerComponent extends Component<
  EmployerComponentProps,
  EmployerComponentState
> {
  constructor(props: EmployerComponentProps) {
    super(props);
    this.state = {
      employeeName: '',
      hoursWorked: '',
    };
  }

  changeEmployeeName = (e: any) => {
    const employeeName = e.target.value;
    this.setState({ employeeName });
  };

  changeHoursWorked = (value: string) => {
    this.setState({ hoursWorked: value });
  };

  onSubmit = (e: any) => {
    e.preventDefault();

    const { employeeName, hoursWorked } = this.state;
    const { rootTree } = this.props;

    if (!rootTree) return null;

    rootTree.employer.newEmployee(employeeName, Number(hoursWorked));
  };

  render() {
    const { employeeName, hoursWorked } = this.state;
    const { rootTree } = this.props;

    if (!rootTree) return null;

    const {
      employer: { name, location, employees },
    } = rootTree;

    return (
      <Box>
        <Heading size="lg">{name}</Heading>
        <Heading size="md">{location}</Heading>

        <Divider my={6} />

        <Heading size="md">Employee</Heading>

        {employees.map((employee) => (
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
