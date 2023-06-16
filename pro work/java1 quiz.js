var currentQue=-1;
const n=10; // no of questions
var correctQue=0 ;
var isAnswered;
const myQuestions = [
  {
    question: "1.Java is short for JavaScript.",
    answers: {
      a: "True",
      b: "False",
     
    },
    correctAnswer: "b"
  },
  {
    question: "2.What is a correct syntax to output Hello World in java?",
    answers: {
      a: "echo(\"Hello World\");",
      b: "print(\"Hello World\");",
      c: "System.out.println(\"Hello World\");",
      d: "Console.WriteLine(\"Hello World\");",
    },
    correctAnswer: "c"
  },
  {
    question: "3.How do you insert COMMENTS in Java?",
    answers: {
      a: "#",
      b: "/*",
      c: "//",
      
    },
    correctAnswer: "c"
  },
  {
    question: "4.How do you create a variable with the numeric value 4?",
    answers: {
      a: "int x=4;",
      b: "float x=4;",
      c: "x=5;",
      d: "num x=5",
    },
    correctAnswer: "a"
  },
  {
    question: "5.Which operator is used to get remainder of two number?",
    answers: {
      a: "*",
      b: "%",
      c: "+",
      d: "-",
      
    },
    correctAnswer: "b"
  },
  {
    question: "6.The value of a string variable can be surrounded by single quotes",
    answers: {
      a: "True",
      b: "False",
      
      
    },
    correctAnswer: "b"
  },
  {
    question: "7.Which operator can be used to compare two values?",
    answers: {
      a: "<>",
      b: "++",
      c: "==",
      d: "="
      
    },
    correctAnswer: "c"
  },
  {
    question: "8.Array index starts with:",
    answers: {
      a: "1",
      b: "0",
    },
    correctAnswer: "b"
  },
  {
    question: "9.How do you start writing an if statement in Java?",
    answers: {
      a: "if(x>y)",
      b: "if x>y then:",
      c: "if x>y",
      
    },
    correctAnswer: "a"
  },
  {
    question: "10.Which keyword is used to return a value inisde a method?",
    answers: {
      a: "void",
      b: "return",
      c: "break",
      d: "get",
    },
    correctAnswer: "b"
  },
];
 
 
function disp()
{
    isAnswered=0;
   currentQue=(currentQue+1);
   if(currentQue==n)
        {
            viewResults();
            return ;
        }
    if(currentQue==n-1)
        {
             document.getElementById("nxt").innerHTML="View Results";
             
        }
  document.getElementById("q").innerText=myQuestions[currentQue].question;
  const opt=[];
   document.getElementById("n").innerHTML= (currentQue+1) +" out of "+(n);
   for( j in myQuestions[currentQue].answers)
  {
opt.push(`<label>
       <input type="radio" class="optClass" name="${currentQue}" value="${j}">
        ${j}:
        ${myQuestions[currentQue].answers[j]}<br/>
     </label>`);
document.getElementById("o").innerHTML=opt.join(" ");
  }//for loop
     document.getElementById("res").style.display="none";
 // document.getElementById("myImg").style.display="none";
  document.getElementById("sub").style.display="none";

}


(disp());


function viewResults()
{
   alert("Your score :"+correctQue+"/10");
}

function corAns()
{
	correctQue++;
  const result=document.getElementById("res");
    result.innerHTML="TRUE";
    result.style.color="white" ;
    result.style.backgroundColor="#00cc00" ;
    document.getElementById("res").style.display= "block";

/*    document.getElementById("myImg").style.display="block";
      document.getElementById("myImg").src = "";
      document.getElementById("myImg").alt = "happy face"; */


}

function wrongAns()
{
    const result=document.getElementById("res");
    result.innerHTML="FALSE";
    result.style.color="white";
    result.style.backgroundColor="red" ;
    document.getElementById("res").style.display= "block";

/*    document.getElementById("myImg").style.display= "block";
    document.getElementById("myImg").src = "";
    document.getElementById("myImg").alt = "sad face";  */
}

function dispSubmitButton()
{
    document.getElementById("sub").style.display="block";
}

function displayRadioValue()
       {
            var ele = document.getElementsByName(`${currentQue}`);
              var praj="";
		if(isAnswered)
                {
                    alert("alredy answered");
                    return ;
                }
            isAnswered=1;
            for(k = 0; k < ele.length; k++) 
		{
         	 if(ele[k].checked)
                    {    
                        if(ele[k].value==myQuestions[currentQue].correctAnswer)
                        {
                            document.getElementById("res").innerHTML = "Correct Answer "+ele[k].value;
                            corAns();
                        }
                        else 
                        {
                            document.getElementById("res").innerHTML = "wrong answer \n correct Answer:"+myQuestions[currentQue].correctAnswer;
                            wrongAns();
                        }
                    }
		}
        }