import React, { Component } from 'react';
import Editor from './components/Textarea';
import Preview from './components/Preview';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIni: '',
    }
  }

  componentDidMount() {
    let textIni = `
# ¡Hola! ...Bienvenido a mi React Markdown Previewer!
    
## Este es un subtítulo ...
### Y aquí hay otras cosas interesantes:
      
Este es un código en linea: \`<div> </div>\`.
    
Este es un código en bloque:
\`\`\`
    
function anotherExample(firstLine, lastLine) {
  console.log(anotherExample);
}
\`\`\`

También puede hacer el texto **en negrilla**, _en cursiva_, **_combinandolas_**, ~~tachando el texto~~, etc...

También hay [enlaces](https://www.freecodecamp.com)

>Listas:

* Item 1
* Item 2
* Item 3

>Imagenes
    
![React Logo w/ Text](https://goo.gl/Umyytc)`;

    this.setState({
      textIni: textIni
    })

  }
  changeText = (event) => {
    console.log(event.target.value)
    this.setState({
      textIni: event.target.value
    });
  }

  render() {
    return (
      <section className='container-fluid containerApp'>
        <Editor
          textIni={this.state.textIni}
          changeText={this.changeText}
        />
        <Preview
          textIni={this.state.textIni}
        />
         <footer className='p-3 mb-2 text-white'>>by Tatiana Ochoa 2020</footer>
      </section>
    );
  }
}

export default App;
