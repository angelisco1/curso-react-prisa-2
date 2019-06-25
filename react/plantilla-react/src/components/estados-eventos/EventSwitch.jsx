import React from 'react';

class EventSwitchCmp extends React.Component {
  constructor() {
    super();
    this.state = {
      colorFondo: 'white'
    }
    // this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    event.stopPropagation();
    console.log(event.type)
    switch(event.type) {
      case 'click':
        event.target.tagName === 'DIV' ? console.log('Se ha pulsado el div') : alert('Se ha pulsado el botón');
        break;
      case 'mouseover':
          let c = Math.floor(Math.random()*256);
          this.setState({
            colorFondo: `rgb(${c}, ${c}, ${c})`
          })
        break;
    }
  }

  // handleClick(event) {
  //   alert('Se ha pulsado el botón');
  // }

  // handleClickDiv(event) {
  //   console.log('Se ha pulsado el div');
  // }

  // handleMouseOver(event) {
  //   let c = Math.floor(Math.random()*256);
  //   this.setState({
  //     colorFondo: `rgb(${c}, ${c}, ${c})`
  //   })
  // }

  render() {
    const styles = {
      backgroundColor: this.state.colorFondo,
      width: '200px',
      height: '200px'
    };

    return (
      <div
        style={styles}
        // onClick={this.handleClickDiv}
        // onMouseOver={this.handleMouseOver}>
        onClick={this.handleEvent}
        onMouseOver={this.handleEvent}>

        <button type="button" onClick={this.handleEvent}>Pulsa aquí</button>
        {/* <button type="button" onClick={this.handleClick}>Pulsa aquí</button> */}
      </div>
    )
  }
}

export default EventSwitchCmp;