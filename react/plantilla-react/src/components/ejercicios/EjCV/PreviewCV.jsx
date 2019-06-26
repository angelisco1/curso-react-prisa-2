import React from 'react';

class PreviewCV extends React.Component {
  render() {
    const { nombre, apellidos, email, skills } = this.props;

    const listaSkills = skills.map((skill, pos) => <li key={pos}>{skill}</li>)

    return (
      <div>
        <h2>CV de {nombre} {apellidos}</h2>
        <p>Email: {email}</p>
        <ul>
          {listaSkills}
        </ul>
      </div>
    )
  }
}

export default PreviewCV;