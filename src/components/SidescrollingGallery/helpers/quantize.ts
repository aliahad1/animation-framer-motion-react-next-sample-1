const quantize = function <T>(interpolator: (t: number) => T, n: number): T[] {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
};

export default quantize;
