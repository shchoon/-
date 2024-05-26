• 프로젝트 설정
- 프로그래밍 언어: TypeScript
- 프레임워크: React
- 라이브러리: React-Icons
  
• 실행 방법
- 저장소 클론
  git clone https://github.com/shchoon/codingTest.git
  cd codingTest

- 의존성 패기지 설치 (terminal)
  npm install (/codingTest)

- 파일 실행
  npm start (/codingTest)

• 구현 로직

1. Basic ToolTip
- getBoundingClientRect()의 x, y 를 기반으로 toolTip의 위치 설정
- 버튼 안으로 커서가 들어오면 onMouseEnter 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state를 변경
- 버튼 밖으로 커서가 벗어나면 onMouseLeave 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state가 초기화
- state의 targetDirection의 값이 빈 문자열인지 여부에 따라 툴팁이 보여짐

2. ToolTip on Scroll
- max-width, max-height, overflow: scroll로 스크롤 UI 구현   
- getBoundingClientRect()의 x, y 를 기반으로 toolTip의 위치 설정
- 버튼 안으로 커서가 들어오면 onMouseEnter 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state를 변경
- 버튼 밖으로 커서가 벗어나면 onMouseLeave 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state가 초기화
- state의 targetDirection의 값이 빈 문자열인지 여부에 따라 툴팁이 보여짐

3. Delay toolTip
- 버튼 안으로 커서가 들어모면 onMouseEnter 함수를 통해 timer 라는 변수에 setTimeOut 함수를 할당해주고 지정한 시간이 지나면 툴팁의 활성화 여부를 판단하는 state 변경
- 버튼 밖으로 커서가 벗어나면 onMouseLeave 함수를 통해 state 값을 변경하고 clearTimeOut(timer)로 setTimeOut를 취소하고 다시 timer을 null로 초기화
- setTimeOut의 시간은 props로 넘긴 값을 사용하여 사용자가 설정할 수 있게 구현 ( ex) 1초면 1, 2초면 2로 props를 설정할 수 있음 )
- 툴팁의 보여짐 여부를 판단하는 state가 true면 툴팁이 보여지고 false이면 툴팁이 사라짐
  
4. Custom Color
- 원하는 색을 배열에 넣으면 map 함수로 배열을 순회하면서 배열의 요소(색)들을 props로 넘겨줘 툴팁과 버튼의 background 색상 변경
- 툴팁이 보여지는 기능은 onMouseEnter, onMouseLeave로 위와 동일

5. ToolTip by state
- boolean 값을 가질 수 있는 isAble, isToolTip state를 생성
- 왼쪽 버튼 클릭시 isAble의 state 값이 변경되고 오른쪽 버튼 영역 내에 커서가 들어오고 나갈 경우 isToolTip 값이 변경
- isAble과 isToolTip의 값이 모두 true이면 툴팁 기능 활성화

6. Button ToolTip
- 툴팁의 버튼을 누르면 Modal 컴포넌트 내의 array 배열에 값이 추가
- setInterval 함수를 통해 1초마다 array의 요소 제거 
- useEffect의 의존성 배열에 array 값을 가지고 cleanUp 함수를 통해 clearInterval로 setInterval 함수 취소 
