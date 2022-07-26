import { Countries } from "./Countries";
import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Search = (({data, loading}) => {

    const [search, setSearch] = useState("");
    const [region1, setRegion] = useState("");
    const [toggle, setToggle] = useState(false);
    
    const regions = [
        { name: "Africa", id: 1 },
        { name: "America", id: 2 },
        { name: "Asia", id: 3 },
        { name: "Europe", id: 4 },
        { name: "Oceania", id: 5 },
    ];
    
    const handleChange = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    return (
        <>
            <nav className="search">
                <div className="container container-search">
                    <input
                    type="text"
                    name="seach"
                    placeholder="Search for a country..."
                    onChange={(e) => setSearch(e.target.value)}
                    />
            
                    <IconContext.Provider value={{className: "arrow"}}>
                        <button onClick={handleChange}>
                            Filter by Region
                            <AiOutlineArrowDown />
                        </button>
                    </IconContext.Provider>
            
                    <div className='regions' style={toggle ? {display: "block"} : {display: 'none'}}>
                    {regions.map((region) => (
                        <div key={region.id} className="region">
                        <p onClick={(e) => setRegion(e.target.innerText)}>{region.name}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </nav>


            <Countries data={data} loading={loading} search={search} region1={region1} />
        </>
    );
})