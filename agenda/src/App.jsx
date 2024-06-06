import ListItem from "./ListItem"
const personas = [
  {
    nombre: 'Antonio',
    apellidos: 'Jimenez Diaz',
    email: 'antojdgmail.com',
    telefono: '45151512254',

  },
  {
    nombre: 'Miguel',
    apellidos: 'Cruz Vargas',
    email: 'mgvargas@gmail.com',
    telefono: '7448912155',

  },
  {
    nombre: 'William',
    apellidos: 'Carillo Olivera',
    email: 'wolivera@gmail.com',
    telefono: '485612397',

  },
  {
    nombre: 'Antonio',
    apellidos: 'Olivera Vargas',
    email: 'Alivar@gmail.com',
    telefono: '445586123',

  }
]
function App() {

  return (
    <div>
      <h1 align="center">Agenda de personas</h1>
      <hr />
      <ul>
        {personas.map((persona) => (
          <ListItem
            key={persona.email}
            persona={persona}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
