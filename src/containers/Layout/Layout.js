import React , {useState} from "react";
import logo from '../../assets/logo/logo.svg';
import classes from './Layout.module.css'
import SearchBar from "../../components/SearchBar/SearchBar";
import Home from "../Home/Home";

const Layout = () => {

   // const [contacts , setContacts] = useState([]);
  //  const [contact , setContact] = useState({});
   // const [isContactViewOn , setIsContactViewOn] = useState(false);
  //  const [sortValue , setSortValue] = useState('');
   const [inputValue , setInputValue] = useState('');

  const contacts = [
    {
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
   ];

   const contactFilterOnChange = (e)=>{
    console.log("Hi from filter ", e.target.value);
    setInputValue(e.target.value);

}

const filteredContacts = contacts.filter(contact =>{
    return contact.name.toLowerCase().includes(inputValue.toLowerCase())
     // inputValue.toLowerCase().charAt(0) == contact.name.toLowerCase().charAt(0)
})

  return (
     
    <div className={`container ${classes.SmallScreenAlign}`} >
    <nav className="navbar navbar-light ">
        <div className={classes.Logo}>

 <img src={logo} alt="Logo Image" />
        </div>
        <form className="form-inline">
        <SearchBar contactFilterOnChange={contactFilterOnChange} inputValue={inputValue} />
        </form>

</nav>

        <Home contacts={filteredContacts} />
    </div>
      
  );
};

export default Layout;
