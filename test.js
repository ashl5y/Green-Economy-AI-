function checkTest() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');
  let score = 0;

  if (q1 && q1.value === "b") score++;
  if (q2 && q2.value === "a") score++;
  if (q3 && q3.value === "a") score++;
  if (q4 && q4.value === "a") score++;

  document.getElementById("testResult").innerText = `Your score: ${score}/4`;
}
