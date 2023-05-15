import React, { useMemo } from "react";
import Card from "../../containers/Card/Card";

import "./Section.css";

export default function Section({ title, data }) {
  const itemList = useMemo(() => {
    return data.map((item, index) => (
      <li className="shop__section-item" key={title + index}>
        <Card data={item} />
      </li>
    ));
  }, [data]);

  return (
    <section className="shop__section">
      <h3 className="shop__section-title">{title}</h3>
      <ul className="shop__section-list">{itemList}</ul>
    </section>
  );
}
