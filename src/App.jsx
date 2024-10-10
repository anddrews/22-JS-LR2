import { Row } from './row/Row';
import { Cell } from './cell/Cell';

import './App.css'

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rows = [1, 2, 3, 4, 5, 6]


function App() {

  return (
    <>
    {rows.map(row => (
      <Row key={`row-${row}`}>
        {columns.map((item) => <Cell key={item * row} />)}
      </Row>)
    )}
    </>
  )
}

export default App
