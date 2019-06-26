import React, { Component } from 'react'

const withHover = (WrappedCmp) => {

  return class extends Component {
    render() {
      // console.log('PROPS withHover', this.props);
      return (
        <div className="hover">
          <WrappedCmp {...this.props} />
        </div>
      )
    }
  }

};

export default withHover;