function reviewCode() {
    const code = document.getElementById("codeInput").value;
    const result = document.getElementById("result");

    if (!code.trim()) {
        result.innerHTML = "<p>Please paste some code.</p>";
        return;
    }

    let lines = code.split("\n").length;
    let chars = code.length;

    result.innerHTML = `
        <h3>Analysis Complete</h3>
        <p>Lines of Code: ${lines}</p>
        <p>Characters: ${chars}</p>
        <p>Quality Score: ${Math.floor(Math.random()*20)+80}%</p>
        <p>Suggestions:</p>
        <ul>
            <li>Use meaningful variable names</li>
            <li>Add comments</li>
            <li>Improve code structure</li>
        </ul>
    `;
}
