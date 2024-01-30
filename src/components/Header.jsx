import React from "react";

function Header({ sortOrder, onChangeSortOrder }) {
  return (
    <div>
      <nav className="top-nav-style">
        <div> React : Todo List </div>
        <div>
          <select value={sortOrder} onChange={onChangeSortOrder}>
            <option value="asc" selected>
              오름차순
            </option>
            <option value="desc">내림차순</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

export default Header;
