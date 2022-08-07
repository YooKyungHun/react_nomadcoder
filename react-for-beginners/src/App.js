import {useEffect, useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // preventDefault()를 사용하면
    // submit태그를 통한 데이터 전달은 정상적으로 작동하며
    // 페이지 새로고침만 막을 수 있게 된다.

    if (toDo === "") {
      return;
      // toDo 가 비어있다면 그냥 종료 시키기
    }

    setToDos((currentArray) => [toDo, ...currentArray]);
    // react 는 함수를 보낼때, 함수의 첫번째 인자로 현재 state(toDos) 를 보냄.
    // 이를 통해 현재 state 를 계산하거나 새로운 state 를 만드는데 사용할 수 있음.
    setToDo("");
    // todo State 초기화 시키기
  }
  return (
    <div>
      <h1>My ToDo List ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )

}

export default App;
