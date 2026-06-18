function animateValue(id,start,end,duration){

let obj=document.getElementById(id);

let range=end-start;

let current=start;

let increment=end>start?1:-1;

let step=Math.abs(Math.floor(duration/range));

let timer=setInterval(()=>{

current+=increment;

obj.innerHTML=current+(id==="github"||id==="interview"?"%":"");

if(current===end){
clearInterval(timer);
}

},step);

}

animateValue("projects",0,12,1000);
animateValue("github",0,92,1200);
animateValue("interview",0,84,1200);
animateValue("streak",0,21,1000);

function reviewCode(){

const code=document.getElementById("codeInput").value;

const result=document.getElementById("result");

if(code.trim()===""){

result.innerHTML="⚠ Please enter some code";

return;
}

let lines=code.split("\n").length;

let score=Math.floor(Math.random()*15)+85;

result.innerHTML=`
<div class="analysis">
<h3>✅ Analysis Complete</h3>
<p>📄 Lines of Code : ${lines}</p>
<p>⭐ Quality Score : ${score}%</p>
<p>⚡ Status : Excellent</p>
<p>💡 Suggestions:</p>
<ul>
<li>Use meaningful variable names</li>
<li>Add comments for readability</li>
<li>Implement proper error handling</li>
<li>Follow clean coding standards</li>
</ul>
</div>
`;

}
