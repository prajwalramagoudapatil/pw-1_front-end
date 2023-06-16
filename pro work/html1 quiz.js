var currentQue=-1;
const n=10; // no of questions
var correctQue=0 ;
var isAnswered;
const myQuestions = [
  {
    question: "1. What does HTML stand for?",
    answers: {
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks and Text Markup Language",
     
    },
    correctAnswer: "a"
  },
  {
    question: "2.Choose the correct HTML element for the largest heading:",
    answers: {
      a: "< h6 >",
      b: "< heading >",
      c: "< head >",
      d: "< h1 > ",
    },
    correctAnswer: "d"
  },
  {
    question: "3.What is the correct HTML for adding a background color?",
    answers: {
      a: "< body bg=\"yellow\" >",
      b: "< body style=\"background-color:yellow;\" >",
      c: "< background>yellow</background >",
      },
    correctAnswer: "c"
  },
  {
    question: "4.What is the correct HTML element for inserting a line break?",
    answers: {
      a: "< lb >",
      b: "< br >",      
      c: "< break >",
      
    },
    correctAnswer: "b"
  },
  {
    question: "5.How can you open a link in a new tab/browser window?",
    answers: {
      a: "< a href=\"url\" new>",
      b: "< a href=\"url\" target=\"new\">",
      c: "< a href=\"url\" target=\"_blank\"> ",
      
    },
    correctAnswer: "c"
  },
  {
    question: "6.Inline elements are normally displayed without starting a new line.",
    answers: {
      a: "True",
      b: "False",
      
      
    },
    correctAnswer: "a"
  },
  {
    question: "7.How can you make a numbered list?",
    answers: {
      a: "< ul>",
      b: "< ol > ",
      c:"< list >",
      d:"< dl >",
     
      
    },
    correctAnswer: "b"
  },
  {
    question: "8.What is the correct HTML for making a checkbox?",
    answers: {
      a: "< input type=\"checkbox\" >  ",
      b: "< check >",
      c: "< input type=\"check\" >",
      d: "< checkbox >",
    },
    correctAnswer: "b"
  },
  {
    question: "9.What is the correct HTML for making a drop-down list?",
    answers: {
      a: "< list >",
      b: "< select >",    
      c: "< input type=\"dropdown\" >",
      d: "< input type=\"list\" >",
     
      },
    correctAnswer: "b"
  },
  {
    question: "10.Which character is used to indicate an end tag?",
    answers: {
      a: "^",
      b: "*",
      c: "<",
      d: "/",
    },
    correctAnswer: "d"
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
             
        } document.getElementById("q").innerText=myQuestions[currentQue].question;
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
    document.getElementById("myImg").style.display= "block";
    document.getElementById("myImg").src = "";
    document.getElementById("myImg").alt = "sad face";  
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