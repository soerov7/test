type Answer = "매우 아니다" | "아니다" | "보통이다" | "그렇다" | "매우 그렇다";

type MBTI = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

interface Score {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export type Question = {
  disagree: keyof Score;
  agree: keyof Score;
  text: string;
};

export function solution(questionList: Question[]) {
  const answerList: Answer[] = [
    "매우 아니다",
    "아니다",
    "그렇다",
    "그렇다",
    "아니다",
    "아니다",
    "매우 그렇다",
    "매우 그렇다",
  ];

  const score: Score = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  };

  answerList.forEach((answer, i) => {
    const question = questionList[i];

    switch (answer) {
      case "매우 아니다": {
        score[question.disagree] += 2;
        break;
      }
      case "아니다": {
        score[question.disagree] += 1;
        break;
      }
      case "그렇다": {
        score[question.agree] += 1;
        break;
      }
      case "매우 그렇다": {
        score[question.agree] += 2;
        break;
      }
    }
  });

  const result: (keyof Score)[] = [];

  result.push(score.E >= score.I ? "E" : "I");
  result.push(score.N >= score.S ? "N" : "S");
  result.push(score.F >= score.T ? "F" : "T");
  result.push(score.P >= score.J ? "P" : "J");

  return result.join("");
}
