import { createContext, useState } from "react";

export const MyContext = createContext();

function AppContext({ children }) {
    const [meals, setMeals] = useState([])

    // const [searchInput, setsearchInput] = useState("");

    return (
        <MyContext.Provider value={{ meals, setMeals}}>
            {children}
        </MyContext.Provider>
    );
}

export default AppContext;
