import React from "react";
import LayoutWithoutNav from "../components/layout/LayoutWithoutNav";
import WishList from "../components/WishList";
import Header from "../components/layout/Header";

function MyPage() {

  return (
    <LayoutWithoutNav>
      <div>
        <WishList />
      </div>
    </LayoutWithoutNav>
  );
}

export default MyPage;
