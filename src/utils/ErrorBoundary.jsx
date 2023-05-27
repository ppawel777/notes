import { Alert } from '@mantine/core';
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: ''
    }
  }

  static getDeriveStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error
    }
  }

  componentDidCatch(error) {
    console.log('error', error)
    // this.setState({...this.state, errorMessage: error})
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <Alert title="Ошибка" color="red">
          { this.state.errorMessage }
        </Alert>
      )
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children
  }
}

export default ErrorBoundary;
