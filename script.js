function reviewCode() {

  const code =
    document.getElementById("codeInput").value;

  const result =
    document.getElementById("result");

  if(code.length < 20){
    result.innerHTML =
      "⚠️ Code too short for analysis.";
    return;
  }

  let score = Math.floor(
    Math.random() * 30
  ) + 70;

  result.innerHTML = `
    <h3>Analysis Result</h3>
    <p>Quality Score: ${score}%</p>
    <p>Suggestions:</p>
    <ul>
      <li>Improve variable naming.</li>
      <li>Add comments.</li>
      <li>Reduce code duplication.</li>
    </ul>
  `;
}
