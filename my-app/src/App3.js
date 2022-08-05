import React from 'react';

function Btn({ text, x, fontSize, z=2 }) {
  console.log(text, x, fontSize)
  // props 는 Btn 이 전달받는 인자이자 객체로서, 보낸 모든 것들을 갖음.
  // <Btn text="Save Changes" x="7" y={13} />
  // -> props = {text: 'Save Changes', x: '7', y: 13}
  //
  // function Btn(props) -> function Btn({ text }) 로도 작성가능한데,
  // props 가 오브젝트이기 때문에 바로 key 값으로 꺼내줌.
  // 
  // 기본값 설정도 가능(z=2)
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize,
        // fontSize: fontSize 라서 축약함.
      }}
    >
      {text}
    </button>
  )
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};

function App() {
  return (
    <div>
      <Btn text="Save Changes" x="7" fontSize={18} />
      {/* Btn 함수를 불러서 text 라는 인자를 보내는 것과 같음
      = Btn({text:"Save Changes"}) */}
      <Btn text="Continue" z="1" />
    </div>
  );
}

export default App;