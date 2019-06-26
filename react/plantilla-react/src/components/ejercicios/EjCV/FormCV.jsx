import React from 'react';

class FormCV extends React.Component {
  constructor(props) {
    super(props);
    this.skillInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onHandleAddSkill(this.skillInput.current.value)
    this.skillInput.current.value = '';
  }

  render() {
    const { nombre, apellidos, email, onHandleChangeData } = this.props;

    return (
      <div>
        <h2>Formulario CV</h2>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={onHandleChangeData} />
          </div>
          <div>
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" value={apellidos} onChange={onHandleChangeData} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={email} onChange={onHandleChangeData} />
          </div>
          <div>
            <label htmlFor="skill">Skill:</label>
            <input type="text" id="skill" name="skill" ref={this.skillInput} />
            <button type="button" onClick={this.handleClick}>Añadir</button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormCV;