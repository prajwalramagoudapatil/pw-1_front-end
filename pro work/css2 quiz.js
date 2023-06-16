var currentQue=-1;
const n=10; // no of questions
var correctQue=0 ;
var isAnswered;
const myQuestions = [
  {
    question: "1. How do you display a border like this:? \n The top border = 10 pixels  The bottom border = 5 pixels \n The left border = 20 pixels  The right border = 1pixel?" ,              
               
    answers: {
      a: "border-width:10px 1px 5px 20px;",      
      b: "border-width:5px 20px 10px 1px;",
      c: "border-width:10px 5px 20px 1px;",
      
      
     
    },
    correctAnswer: "a"
  },
  {
    question: "2.Which property is used to change the left margin of an element? ",
    answers: {
      a: "padding-left",
      b: "indent",
      c: "margin-left  ",
      
    },
    correctAnswer: "c"
  },
  {
    question: "3.When using the padding property; are you allowed to use negative values?",
    answers: {
      a: "NO",
      b: "YES",
      },
    correctAnswer: "a"
  },
  {
    question: "4.How do you make a list that lists its items with squares?",
    answers: {
      a: "list-type: square;",
      b: "list-style-type: square;",    
      c: "list: square;",
     
    },
    correctAnswer: "b"
  },
  {
    question: "5.How do you select an element with id 'demo'?",
    answers: {
      a: ".demo",
      b: "demo",
      c: "#demo",    
      d: "*demo" ,      
      
      
    },
    correctAnswer: "c"
  },
  {
    question: "6.How do you select elements with class name 'test'?",
    answers: {
      a: "#test",
      b: "test",
      c: "*test",
      d: ".test  ",
       },
    correctAnswer: "d"
  },
  {
    question: "7.What is the default value of the position property?",
    answers: {
      a: "absolute",
      b: "static",
      c: "fixed",
      d: "relative",
       
     
      },
    correctAnswer: "b"
  },
  {
    question: "8.Which element is used to represent the transparency of an element in CSS ?",
    answers: {
      a: "Hover",
      b: "Opacity",
      c: "Transparent",
      d: "Overlay",
      },
    correctAnswer: "c"
  },
  {
    question: "9.Which of the below CSS property is used to add a stroke in the text ?",
    answers: {
      a: "ext-stroke",
      b: "text-transform",
      c: "text-decoration",
      d: "None of the above",     
     },
    correctAnswer: "a"
  },
  {
    question: "10.Which of the below CSS properties represent the order of flex items in the grid container ?",
    answers: {
     a: "order",
     b: "float",
     c: "overflow",
     d: "All of the above",
    },
    correctAnswer: "a"
  },
];


function disp()
{
 	isAnswered=0;
   // currentQue=(currentQue+1)%n;
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
  isAnswered=0;
  
  document.getElementById("myImg").style.display="none";
}


(disp());

function viewResults()
{
   // alert("Hello! I am an alert box!");
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
    document.getElementById("myImg").style.display="block";
     // document.getElementById("myImg").src = "";
      //document.getElementById("myImg").alt = "happy face";
    //correctQue=correctQue+1;

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