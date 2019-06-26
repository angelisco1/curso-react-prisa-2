import React from 'react';

class Referencias extends React.Component {
  constructor() {
    super();
    this.state = {
      mensajes: ['Mensaje 1', 'Mensaje 2']
    }
    this.inputRef = React.createRef();
    this.audioRef = React.createRef();
    this.guardarMsg = this.guardarMsg.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  guardarMsg() {
    // console.dir(this.inputRef);
    const nuevoMsg = this.inputRef.current.value;
    this.setState({
      mensajes: [...this.state.mensajes, nuevoMsg]
    })
  }

  play() {
    this.audioRef.current.play();
  }

  pause() {
    console.dir(this.audioRef.current.currentTime);
    this.audioRef.current.pause();
  }

  render() {
    const listaMsgs = this.state.mensajes.map((m, i) => <li key={i}>{m}</li>);
    return (
      <React.Fragment>
        <div>
          <audio src="./sonido-piolin.m4a" ref={this.audioRef}></audio>
          <button type="button" onClick={this.play}>Play</button>
          <button type="button" onClick={this.pause}>Pause</button>
        </div>
        <div>
          <label htmlFor="msg">Mensaje</label>
          <input type="text" id="msg" ref={this.inputRef} />
          <button type="button" onClick={this.guardarMsg}>Enviar mensaje</button>
        </div>
        <ul>
          {listaMsgs}
        </ul>
      </React.Fragment>
    );
  }
}

export default Referencias;