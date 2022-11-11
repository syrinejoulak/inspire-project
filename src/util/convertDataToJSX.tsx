export const convertRateToStars = (rate: number) => {
  let trunkedRate = Math.trunc(rate);
  let result: any = [];

  for (let i = 0; i < 5; i++) {
    if (i < trunkedRate) {
      result.push(<img src="/assets/star-selected.png" />);
    } else {
      result.push(<img src="/assets/star-not-selected.png" />);
    }
  }

  return result;
};
