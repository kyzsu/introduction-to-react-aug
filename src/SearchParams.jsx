import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Jakarta, ID");
  // usestate mengembalikan dua variable dalam array, dimana var 1 adalah valuenya, dan var 2 adalah fungsi untuk memperbarui valuenya.

  console.log("event pada input: ", location);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
