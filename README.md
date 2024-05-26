• 실행 방법
- 저장소 클론
  -- bash
  git clone ~~~
  cd my-app

- 의존성 패기지 설치 (terminal)
  npm install (/my-app)

- 파일 실행
  npm start (/my-app)

• 프로젝트 설정
- 프로그래밍 언어: TypeScript
- 프레임워크: React
- 라이브러리: React-Icons

• 구현 로직

1. 기본 툴팁
• UI
- Left, Top, Right, Bottom의 각 방향 별로 left, center, right 3개의 버튼 구현
- Left & Right의 flex-direction = row
- Top & Bottom의 flex-direction = col
       
• Feat 
- getBoundingClientRect()의 x, y 를 기반으로 toolTip의 위치 설정
- 버튼 안으로 커서가 들어오면 onMouseEnter 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state를 변경
- 버튼 밖으로 커서가 벗어나면 onMouseLeave 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state가 초기화
- state의 targetDirection의 값이 빈 문자열인지 여부에 따라 툴팁이 보여짐

2. 스크롤 UI 기반 툴팁
• UI
- Left, Top, Right, Bottom의 각 방향 별로 left, center, right 3개의 버튼 구현
- Left & Right의 flex-direction = row
- Top & Bottom의 flex-direction = col
- max-width, max-height, overflow-scroll을 통해 width와 height의 값이 max 값을 넘어가면 스크롤되게 구현
    
• Feat 
- getBoundingClientRect()의 x, y 를 기반으로 toolTip의 위치 설정
- 버튼 안으로 커서가 들어오면 onMouseEnter 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state를 변경
- 버튼 밖으로 커서가 벗어나면 onMouseLeave 함수를 통해 {x: number, y: number, targetDirection: string} 타입의 state가 초기화
- state의 targetDirection의 값이 빈 문자열인지 여부에 따라 툴팁이 보여짐

3. delay 툴팁
• Feat
- 버튼 안으로 커서가 들어모면 onMouseEnter 함수를 통해 timer 라는 변수에 setTimeOut 함수를 할당해주고 지정한 시간이 지나면 툴팁의 보여짐 여부를 판단하는 state 변경
- 버튼 밖으로 커서가 벗어나면 onMouseLeave 함수를 통해 state 값을 변경하고 clearTimeOut(timer)로 timer의 지정 시간을 취소하고 다시 timer을 null로 초기화
- setTimeOut의 시간은 props로 넘긴 값을 사용하여 사용자가 설정할 수 있게 구현 ( ex) 1초면 1, 2초면 2로 props를 설정할 수 있음 )
- 툴팁의 보여짐 여부를 판단하는 state가 true면 툴팁이 보여지고 false이면 툴팁이 사라짐

  
4. 색 커스텀
• Feat
- 원하는 색을 배열에 넣으면 map 함수로 배열을 순회하면서 배열의 요소(색)들을 props로 넘겨줘 툴팁과 버튼의 background 색상 변경
- 툴팁이 보여지는 기능은 onMouseEnter, onMouseLeave로 위와 동일

5. state 변경에 따른 툴팁 활성화
• Feat
- boolean 값을 가질 수 있는 isAble, isToolTip state를 생성
- 왼쪽 버튼 클릭시 isAble의 state 값이 변경되고 오른쪽 버튼 영역 내에 커서가 들어오고 나갈 경우 isToolTip 값이 변경
- isAble과 isToolTip의 값이 모두 true이면 툴팁 기능 활성화






