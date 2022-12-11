/**
 * 일급 시티즌
 * 1. 인자로 사용될 수 있다.
 * 2. 변수에 할당할 수 있다.
 * 3. 리턴타입이 될 수 있다.(함수가 함수를 반환할 수도 있다)
 *
 */

/**
 * 1 함수의 첫번째 : 인자가 함수.
 * @param 사람
 */

function 집에간다고_말하기(사람){
  console.log(사람 + " : 저 집에 갑니다");
}

function 청소하기(사람){
  console.log(사람 + " : 저 청소도 했어요");
}

// ----

function 퇴근(퇴근전하는_행동, human){
  console.log('퇴근전에 ' + human + '은 다음 행동을 하고 퇴근합니다');
  return 퇴근전하는_행동(human);
}

// 결과값 생각해보기.
퇴근(집에간다고_말하기, "정은");
//함수의 매개변수로 함수넣기.
// 퇴근 함수가 실행되는데, 퇴근 함수의 매개변수 첫번째로, 집에간다고_말하기 함수가 들어간다. 그리고 console창에 퇴근전에 정은 은 다음 햄동을 하고 바로 퇴근합니다가 먼저 출력된다.
// 그리고 나서 집에간다고_말하기 라는 인자가 퇴근전하는_행동 으로 전달이 되어서, 정은: 저 집에갑니다 가 출력된다.
퇴근(청소하기, "정은");
console.log("-------------------");
퇴근(집에간다고_말하기, "레오 - 후다닥");
