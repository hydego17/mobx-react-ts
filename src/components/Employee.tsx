import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Box, Text } from '@chakra-ui/react';

import { Employee } from '../mst';

interface EmployeeComponentProps {
  employee: Employee;
}
interface EmployeeComponentState {}

@observer
class EmployeeComponent extends Component<
  EmployeeComponentProps,
  EmployeeComponentState
> {
  state = {};

  render() {
    const { name, hoursWorked } = this.props.employee;
    return (
      <Box pt={4}>
        <Text>Name: {name} </Text>
        <Text>Hours Worked: {hoursWorked} </Text>
      </Box>
    );
  }
}

export { EmployeeComponent };
