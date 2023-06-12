## 기능 구현사항

- [x] #1 홈, 알림, 검색, 메시지 탭 만들기
  - [x] stack navigation과 tab navigation을 함께 사용하기
  - [x] 홈 탭에서 상세보기 버튼을 누르면 tab bar가 보이지 않게 만들기
  - [x] 하단바 아이콘 제작
- [x] #2 토글 버튼을 눌러 Box 컴포넌트 제어하기
  - [x] Box 컴포넌트를 분리하고 prop으로 rounded(boolean), size(’small’ | ‘medium’ | ‘large’), color를 받아서 화면에 출력하는 컴포넌트 만들기
  - [x] StyleSheet/StyledComponent와 prop를 사용하여 Box 컴포넌트를 rounded, size, color에 따라 변경되게 만들기
  - [x] 토글 버튼을 누르면 Box 컴포넌트를 사라지게 만들고, 다시 누르면 나타나게 만들기
- [x] #3 카운터 만들기
  - [x] 전역 상태 관리 라이브러리(redux,recoil,zustand … )를 이용해 카운터 만들기
- [ ] #4 Kakao Oauth 구현 (선택)
  - [ ] @react-native-seoul/kakao-login 라이브러리를 이용해 카카오 로그인과 로그아웃 구현
