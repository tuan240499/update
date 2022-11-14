import { useState, useEffect } from "react";
import "./App.css";
import { server } from "./server";

function App() {
  const _server = server();

  const [userList, setUserList] = useState([]);
  const [userDetail, setUserDetail] = useState(null);
  const [userChoose, setUserChoose] = useState(null);

  function fetchUser() {
    _server.getAll().then((data) => {
      console.log(data);
      setUserList(data);
    });
  }

  function fetchUserDetail(id) {
    _server.getDetail(id).then((data) => {
      setUserDetail(data);
    });
  }

  function handleDelete(id) {
    _server.remove(id).then((data) => {
      setUserDetail(data);
      fetchUser();
    });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (userChoose) {
      fetchUserDetail(userChoose);
    }
  }, [userChoose]);

  return (
    <div className="App">
      {userList.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(userList[0]).map((elm) => (
                <th key={elm}>{elm}</th>
              ))}
              <th>View</th>
              <th>Delete</th>
              
            </tr>
          </thead>

          <tbody>
            {userList.map((user, idx) => (
              <tr key={idx}>
                {Object.entries(user).map(([key, value], idx2) => (
                  <td key={idx2}>{JSON.stringify(value)}</td>
                ))}
                <td>
                  <button onClick={() => setUserChoose(user.id)}>
                    View more
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {JSON.stringify(userDetail)}
    </div>
  );
}

export default App;
