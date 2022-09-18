/* eslint-disable space-in-parens */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import {
  sayWelcome,
  greetingUser,
  getGameRule,
  getQuestion,
  getRandomNumber,
  getAnswer,
  getPositiveFeedback,
  getNegativeFeedback,
  getCongratulation
} from '../index.js';

export default (runEven) => {
  sayWelcome();

  const userName = greetingUser();

  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  getGameRule(gameRule);

  for (let countRightAnswers = 0; countRightAnswers < 3; ) {
    const randomNumber = getRandomNumber();

    const question = randomNumber;
    getQuestion(question);

    const userAnswer = getAnswer();

    const evenNumber = randomNumber % 2 === 0;
    let correctAnswer = 'yes';
    if (
      (evenNumber && userAnswer === correctAnswer) ||
      (!evenNumber && userAnswer !== correctAnswer)
    ) {
      getPositiveFeedback();
      countRightAnswers += 1;
    } else if (evenNumber && userAnswer !== correctAnswer) {
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      return false;
    } else if (!evenNumber && userAnswer === correctAnswer) {
      correctAnswer = 'no';
      getNegativeFeedback(userAnswer, correctAnswer, userName);
      return false;
    }
  }
  getCongratulation(userName);

  return runEven;
};
