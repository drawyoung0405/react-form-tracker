import { useState } from "react"
// import TodoList from "../components/TodoList"
import { dataTodos } from "../mocks/dataTodos"
import TodoForm from "../components/TodoForm";
import TodoFilter from "../components/TodoFilterForm";
// import TodoFilter from "../components/TodoFilter"

function App() {
const [issueTrackers, SetIssueTrackerss] = useState(dataTodos);
// const addIssue = (newItem) => {
//   SetIssueTrackerss([...issueTrackers, { ...newItem, id: Date.now(), status: 'new' }]);
// };
// const deleteIssue = (id) => {
//   SetIssueTrackerss(issueTrackers.filter(issue => issue.id !== id));
// };
// // function filterStatus(status){
// // }
// // Hàm đóng (close) todo
// const closeIssue = (id) => {
//   SetIssueTrackerss(issueTrackers.map(issue => issue.id === id ? { ...issue, status: 'closed' } : issue));
// };
const addIssue = (newIssue) => SetIssueTrackerss([...issueTrackers,{...newIssue, id:Date.now(), status: 'new'}])
const deleteIssue = (id) => {
  SetIssueTrackerss([...issueTrackers.filter(issue => issue.id !== id)])
}
const closeIssue = (id) => {
  // SetIssueTrackerss(issueTrackers.map(issue=>issue.id==id ? {...issue, status:'closed'} : issue))
 const newIssue = [...issueTrackers];
 const indexIssue = newIssue.findIndex(issue => issue.id === id);
 if(indexIssue === -1) return;
 newIssue[indexIssue].status = 'closed'
 SetIssueTrackerss(newIssue);
}

  return (<>
    <div className="container m-4 mx-auto">
      <h1 className="font-bold text-[30px] text-center uppercase">
        Issue Tracker
      </h1>
      <TodoForm onAddIssue={addIssue}/>
      {/* <TodoFilter/> */}
      <h2 className="text-xl font-semibold mt-10">List Issues</h2>
      <TodoFilter/>
      <ul className="mt-5 space-y-3">
      {issueTrackers.map((item) => {
        return (
          <div
            className="max-w-full mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow  "
            key={item.id}
          >
            <span
              className={`
            ${
              item.severity === "low"
                ? "bg-blue-500"
                : item.severity === "medium"
                ? "bg-yellow-300"
                : "bg-red-500"
            }
            text-xs font-medium me-2 px-2.5 py-0.5 rounded
              `}
            >
              {item.severity}
            </span>
            <div className="flex gap-3 item-center mb-2 mt-1">
              <h5 className="text-2xl font-bold tracking-tight ">
                {item.title}
              </h5>
              <span
                className={`${
                  item.status === "new"
                    ? "bg-green-300 text-green-800"
                    : "bg-gray-300 text-gray-800"
                }
              text-xs font-bold me-2 px-2 py-0.5 rounded`}
              >
                {item.status}
              </span>
            </div>
            <p className="mb-3 font-normal ">{item.description}</p>
            <div className="flex justify-between ">
              <div className="flex item-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Rounded avatar"
                ></img>
                <p className="text-xl">{item.author}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 duration-300 ease-linear"
                  onClick={() => closeIssue(item.id)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  duration-300 ease-linear"
                  onClick={() => deleteIssue(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
      </ul>
      </div>
  </>
  )
}
export default App
