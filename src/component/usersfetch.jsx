import React from "react";

const Usersfetch = () => {
  const [userData, setUserData] = useState(null);

  const fetchData = (name) => {
    // Fetch data from the JSON file
    fetch(`/Data.json`)
      .then((response) => response.json())
      .then((data) => setUserData(data[name]))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div>
      <h1>JSON Data Fetcher</h1>
      <UserForm onDataFetch={fetchData} />
      {userData && (
        <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Age: {userData.age}</p>
          <p>Occupation: {userData.occupation}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default Usersfetch;
