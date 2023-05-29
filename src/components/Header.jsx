import React from 'react'
import { FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Header({search}) {

const onSeach =(word)=> {
  search(word)

}

  return (
   <header className="py-3 bg-danger text-white">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-2">
        <Link to="/"> <img src={require("../images /slide images/logo.png")} className="w-100" alt="" /></Link>  
      </div> {/* 1 */}
      <div className="col-10">
        <div className="input-group ">
          <span className="input-group-text" id="basic-addon1"><FaSistrix /></span>
          <input type="text" onChange={(e)=>{onSeach(e.target.value)}} className="form-control form-control-lg" placeholder="ابحث هنا" />
        </div>
      </div> {/* 2 */}
    </div> {/* row */}
  </div> {/* container */}
</header>

  )
}

export default Header