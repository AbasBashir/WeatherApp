import React from 'react'

function Searchbar() {

    const [search, setSearch] = useState(""); // This is a stateful variable setter used for displaying text in the searchbar when a user types
    const [searchResult, setSearchResult] = useState([]); // This is used for updating and storing the latest weather data depending on what city the user selects but searchResult is also used for displaying search results 

    // important function which updates the search state depending on user input and also calls the fetchData() with the input value from the user
    function searchUpdate(event){
        setSearch(event.target.value);
        const value = event.target.value;
        fetchData(value);
      }

     // css style
     const inputStyle = {
        backgroundImage: `url(${searchLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px center',
        backgroundSize: '18px 18px',
        paddingLeft: '35px', 
    };

  return (
    <div>
      
    </div>
  )
}

export default Searchbar
