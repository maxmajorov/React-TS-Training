import React, { useState } from "react";
import "./App.css";
import Rating, { RatingValuesType } from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import UncontrolledRating from "./components/UncontrolledRating/Rating";
import Uncontrolled_ON_OFF from "./components/Uncontrolled-onOff/Uncontrol_ON_OFF";
import Controlled_ON_OFF from "./components/Controlled-onOff/Uncontrol_ON_OFF";

const App = () => {
  const [ratingVal, setRatingVal] = useState<number>(0);
  const [accordion, setAccordion] = useState<boolean>(false);
  const [on, setOn] = useState<boolean>(true);

  return (
    <div>
      <PageTitle title={"Training React with TypeScript"} />
      <Accordion
        title={"Controlled accordion"}
        collapsed={accordion}
        setAccordion={setAccordion}
      />
      <UncontrolledAccordion />
      <Rating value={ratingVal} onClick={setRatingVal} />
      <UncontrolledRating />
      <Uncontrolled_ON_OFF />
      <Controlled_ON_OFF setOn={setOn} current={on} />
    </div>
  );
};

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
