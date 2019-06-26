import React from 'react';
import FormCV from './FormCV';
import PreviewCV from './PreviewCV';

class MiCV extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      apellidos: '',
      email: '',
      skills: [],
    }
    this.changeData = this.changeData.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }

  changeData(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addSkill(nuevaSkill) {
    this.setState({
      skills: [...this.state.skills, nuevaSkill]
    })
  }

  render() {
    return (
      <div>
        <FormCV
          {...this.state}
          onHandleChangeData={this.changeData}
          onHandleAddSkill={this.addSkill} />
        <PreviewCV {...this.state} />
      </div>
    )
  }
}

export default MiCV;