import { Row } from "./row/Row";
import { Cell } from "./cell/Cell";

import "./App.css";
import { MainSection } from "./main-section/MainSection";

const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const rows = [1, 2];

function App() {
  return (
    <>
    <MainSection title="Empty section" />
    <MainSection title="Some cells">
      {rows.map((row) => (
        <Row key={`row-${row}`}>
          {columns.map((item) => (
            <Cell key={item * row} />
          ))}
        </Row>
      ))}
    </MainSection>
    </>
  );
}

export default App;
