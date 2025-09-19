
// export default function (props) {
//     return (
//         <li className="student">Task: {props.task}</li>
//     ) 
// } 

export default function ({ task, isdone }) {


  if (isdone === true) {
    return <li className="student">Done: {task}</li>
  }
  else return <li className="student">Pending: {task}</li>


}  