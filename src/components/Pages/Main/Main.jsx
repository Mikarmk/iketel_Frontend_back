import { useState } from "react";
import httoClient from "../../../httoClient";

function  Main() {
    const [user, setUser] = useState(null);

    useEffect(() => {(async () => {
        try {
        const resp = await httoClient.get('./@me')
        setUser(resp.data);
        }catch{
            console.log('error');
        }
    })})
    return (
    <div>
    </div>);
}

export default  Main;