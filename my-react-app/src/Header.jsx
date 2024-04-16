import React,{useState} from 'react';

function Header() {

    const [isSearchOpen, setIsSearchOpen] = useState(false); // stateful variable + setter function used to manage the opening and closing of searchbar

    // function to update the stateful variable
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };


}

export default Header
