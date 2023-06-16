var currentQue=-1;
const n=10; // no of questions
var correctQue=0 ;
var isAnswered;
const myQuestions = [
  {
    question: "1. Which of following is shared structure of a set of similar objects?",
    answers: {
      a: "Encapsulation",
      b: "Inheritance",
      c: "A Class",
      d: "None",
     
    },
    correctAnswer: "c"
  },
  {
    question: "2.Which of following does not have a body?",
    answers: {
      a: "An Interface",
      b: "An Abstract Method",
      c: "A Class",
      d: "None",
    },
    correctAnswer: "b"
  },
  {
    question: "3.In oops public, private & protected are",
    answers: {
      a: "Classes",
      b: "Access Modifer",
      c: "Interfaces",
      d: "Method signature",
      
    },
    correctAnswer: "b"
  },
  {
    question: "4.Which keyword is used to inherit a class or abstract class is?",
    answers: {
      a: "implement",
      b: "extend",
      c: "inherit",
      d: "extends",
    },
    correctAnswer: "d"
  },
  {
    question: "5.A private member of a class is visible to",
    answers: {
      a: "member to same package",
      b: "in a sub class",
      c: "member of same class",
      d: "everywhere",
      
    },
    correctAnswer: "c"
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
    question: "7.Can we overload constructor in derived class?",
    answers: {
      a: "No",
      b: "Yes",
     
      
    },
    correctAnswer: "a"
  },
  {
    question: "8.Which of the following is not related to OOPS?",
    answers: {
      a: "Class and Object",
      b: "Structure",
      c: "Inheritance and Polymorphism",
      d: "Constructor and Destructor"
    },
    correctAnswer: "b"
  },
  {
    question: "9.Constructor can return a value?",
    answers: {
      a: "True",
      b: "False",
      },
    correctAnswer: "b"
  },
  {
    question: "10.Which Feature of OOP encourges the code reusability?",
    answers: {
      a: "Inheritance",
      b: "Abstraction",
      c: "Encapsulation",
      d: "Polymorphism",
    },
    correctAnswer: "a"
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

  /*  document.getElementById("myImg").style.display= "block";
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