import AddUser from "../components/agregarusuario";
import Table from "../pages/table";
import { Link } from "react-router-dom";
export default function UserDash() {
  return (
    <>
      <div className="flex-grow p-6 overflow-auto bg-gray-200">
        <div className=" gap-6 ">
          <div>
            <AddUser />
          </div>
          <div className="">
            <Table />
          </div>
        </div>
      </div>

    </>

  )
}