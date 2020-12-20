import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Box, Heading } from '@chakra-ui/react';
import { Root } from '../mst';

interface EmployerComponentProps {
  rootTree?: Root;
}
interface EmployerComponentState {}

@inject('rootTree')
@observer
class EmployerComponent extends Component<
  EmployerComponentProps,
  EmployerComponentState
> {
  constructor(props: EmployerComponentProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { rootTree } = this.props;

    if (!rootTree) return null;
    const {
      employer: { name, location },
    } = rootTree;
    return (
      <Box>
        <Heading>{name}</Heading>
        <Heading>{location}</Heading>
      </Box>
    );
  }
}

export { EmployerComponent };
