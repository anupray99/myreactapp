import { useContext } from "react";
import MyContext from "./Context/Context";
function ContextDemo() {
    const [value] = useContext(MyContext);

    return (<div>
        {value}
    </div>)
}

export default ContextDemo