import AddUser from "../../components/agregarusuario";
import IndexDash from "../../pages/table";
import Button from "../button";
import NavDash from "../navdash";
import { useState } from "react";

export default function Page_Users() {

    const [isFormVisible, setFormVisible] = useState(false);

    const openForm = () => {
        setFormVisible(true);
    };

    const closeForm = () => {
        setFormVisible(false);
    };
    return (
        <>
            <div className="flex ">
                <div>
                    <NavDash />
                </div>
                <div className="flex flex-col mr-[25rem]">
                    <div>
                <Button onClick={openForm}/>
                {isFormVisible && <AddUser onClose={closeForm} />}
                    </div>
                    <div>
                        <IndexDash />
                    </div>
                </div>
            </div>
        </>
    )
}