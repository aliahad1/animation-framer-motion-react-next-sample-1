const interpolateNumber = function (a: number, b: number) {
  return (
    (a = +a),
    (b = +b),
    function (t: number) {
      return a * (1 - t) + b * t;
    }
  );
};

export default interpolateNumber;
