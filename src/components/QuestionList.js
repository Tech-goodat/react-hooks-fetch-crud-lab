import React,{useState,useEffect} from "react"

function QuestionList() {
  const[questions,setQuestion]=useState([])
  const [QuestionItem, setQuestionItem]=useState([])
  useEffect(()=>{
   fetch("http://localhost:3000/questions")
   .then((response)=>response.json())
   .then((question)=>setQuestion(question));
    }
  ,[])
  function handleDelete(deletedquestion) {
    const updatedQuestion=questions.filter((question)=>question.id!== deletedquestion.id);
    setQuestion(updatedQuestion)
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDeleteQuestion}
            onUpdateCorrectAnswer={handleUpdateCorrectAnswer}
          />
      ))}</ul>
      
    </section>
  );
}

export default QuestionList;