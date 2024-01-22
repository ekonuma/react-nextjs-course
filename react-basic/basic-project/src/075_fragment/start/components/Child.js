import "./Child.css";
import Header from "./Header";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment key="component">
      <div className="component">
        <Header />
      </div>
      <Header />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
        suscipit recusandae eius perspiciatis illo corporis? Aliquam nam
        repellendus quos expedita est?
      </p>
    </Fragment>
  );
};

export default Child;
