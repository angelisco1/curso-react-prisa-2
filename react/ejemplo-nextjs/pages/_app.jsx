import App, { Container } from 'next/app';
import React from 'react';
import Nav from '../components/Nav';

class MiLayout extends App {
  render() {
    console.log(this.props);
    const { pageProps, Component: PageCmp } = this.props;
    return (
      <Container>
        <Nav />
        <PageCmp {...pageProps} />
      </Container>
    )
  }
}

export default MiLayout;