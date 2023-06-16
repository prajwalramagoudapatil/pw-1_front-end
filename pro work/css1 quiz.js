var currentQue=-1;
const n=10; // no of questions
var correctQue=0 ;
var isAnswered;
const myQuestions = [
  {
    question: "1. What does CSS stand for?",
    answers: {
      a: "Cascading Style Sheets",      
      b: "Computer Style Sheets",
      c: "Creative Style Sheets",
      d: "Colorful Style Sheets",
      
     
    },
    correctAnswer: "a"
  },
  {
    question: "2.What is the correct HTML for referring to an external style sheet?  ",
    answers: {
      a: "< style src=\"mystyle.css\" >",
      b: "< stylesheet>mystyle.css</stylesheet >",
      c: "< link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\" >",  
    },
    correctAnswer: "c"
  },
  {
    question: "3.Where in an HTML document is the correct place to refer to an external style sheet?",
    answers: {
      a: "In the < head > section ",
      b: "In the <body> section ",
      c: "At the end of the document",
      },
    correctAnswer: "a"
  },
  {
    question: "4.Which HTML tag is used to define an internal style sheet?",
    answers: {
      a: "< script >",
      b: "< css >",
      c: "< style >",
      
    },
    correctAnswer: "c"
  },
  {
    question: "5.Which is the correct CSS syntax?",
    answers: {
      a: "body {color: black;}" ,      
      b: "{body:color=black;}" ,
      c: "{body;color:black;}" ,
      d: "body:color=black;" ,
      
    },
    correctAnswer: "a"
  },
  {
    question: "6.How do you insert a comment in a CSS file?",
    answers: {
      a: "// this is a comment",
      b: " 'this is a comment",
      c: "// this is a comment //",
      d: "/* this is a comment */",
       },
    correctAnswer: "d"
  },
  {
    question: "7.Which CSS property controls the text size?",
    answers: {
      a: "font-size ",   
      b: "text-size",
      c: "text-style",
      d: "font-style",
      },
    correctAnswer: "a"
  },
  {
    question: "8.What is the correct CSS syntax for making all the <p> elements bold?",
    answers: {
      a: "< p style=\"font-size:bold;\" >",
      b: "< p style=\"text-size:bold;\" >",
      c: "p {font-weight:bold;} ",   
      d: "p {text-size:bold;}",
       
      
    },
    correctAnswer: "c"
  },
  {
    question: "9.Which property is used to change the font of an element?",
    answers: {
      a: "font-family",     
      b: "font-style",
      c: "font-weight",
       },
    correctAnswer: "a"
  },
  {
    question: "10.How do you make the text bold?",
    answers: {
     a: "font:bold;",
     b:  "font-weight:bold;",    
     c:  "style:bold;",

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

   /* document.getElementById("myImg").style.display="block";
      document.getElementById("myImg").src = "";
      document.getElementById("myImg").alt = "happy face";  */


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
    document.getElementById("myImg").alt = "sad face"; */ 
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