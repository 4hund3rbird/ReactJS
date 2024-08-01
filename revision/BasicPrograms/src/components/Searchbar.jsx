import { useState } from "react";
import datajson from "../data/userdata.json";

const Searchbar = () => {
  // console.log(datajson);
  let data = [...datajson];
  // console.log(data.);
  const [query, updatequery] = useState("");

  function search(searchstring) {
    return data.filter((e) =>
      e.username.toLowerCase().includes(searchstring.toLowerCase())
    );
  }

  return (
    <div>
      <h1>Searchbar</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            updatequery(e.target.value);
          }}
        />
        <span>
          <button>clear</button>
        </span>
      </div>
      <Searchresult searcharray={search(query)} />
    </div>
  );
};

const Searchresult = ({ searcharray }) => {
  console.log(searcharray);
  return (
    <div className="searchresult">
      <table border={"1"} cellPadding={"10"} align="center">
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
            <th>gender</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {searcharray.map((user) => {
            return (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.hobby}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Searchbar;
