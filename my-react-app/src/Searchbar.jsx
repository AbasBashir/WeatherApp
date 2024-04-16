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
    <div className={`overflow-hidden flex-col container mx-auto rounded-md p-1`}>
        <div className='w-full py-0.5 rounded-sm bg-white border-2 border-white outline-none'>
        <input type="text" value={search} onChange={searchUpdate} style={inputStyle} placeholder='Search City' className='w-full pl-4 py-0.5 outline-none'/>
        <ul className="list-none">
            {searchResult.map((result, index) => <li key={index} className='mt-2 p-1.5 hover:bg-gray-200 cursor-pointer'><button className='pl-5 inline-block w-full text-left' onClick={() => handleCitySelect(result)}>{result.name ? `${result.name}, ${result.country}` : ''}</button></li>)}
        </ul>
        </div>
    </div>
  )
}

export default Searchbar
