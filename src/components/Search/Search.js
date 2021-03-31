import React, { useState, useEffect } from "react";
import { StyledForm } from "../../styled/Search/StyledSearch";
import { SearchInput } from "../SearchInput/SearchInput";
import { BrowserRouter as Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
export const Search = () => {
  //  const [filterURL, setFilterURL] = useState({});
  const [all, setAll] = useState({
    check: false,
    id: "",
   
  });
  const [no, setNo] = useState({
    check: false,
    id: "",
  });
  const [one, setOne] = useState({
    check: false,
    id: "",
  });
  const [two, setTwo] = useState({
    check: false,
    id: "",
    path: "",
  });
  const [three, setThree] = useState({
    check: false,
    id: "",
  });
  let history = useHistory();

  const allToggle = (e) => {
    history.push(`/${e.target.id}`);
    setAll({
      check: e.target.checked,
      id: e.target.id,
      
    });

    console.log(all);
  };
  const noToggle = (e) => {
    history.push(`/${e.target.id}`);
    setNo({
      check: e.target.checked,
      id: e.target.id,
    });
    console.log(no);
  };

  const oneToggle = (e) => {
    history.push(`/${e.target.id}`);
    setOne({
      check: e.target.checked,
      id: e.target.id,
    });
    console.log(one);
  };

  const twoToggle = (e) => {
    history.push(`/${e.target.id}`);
    setTwo({
      check: e.target.checked,
      id: e.target.id,
    });
    console.log(two);
  };

  const threeToggle = (e) => {
    history.push(`/${e.target.id}`);
    setThree({
      check: e.target.checked,
      id: e.target.id,
    });
    console.log(three);
  };

  useEffect(() => {
    const { pathname } = history.location;
    switch (pathname) {
      case "/all":
        setAll({ check: true });
        break;
      case "/no":
        setNo({ check: true });
        break;
      case "/one":
        setOne({ check: true });
        break;
      case "/two":
        setTwo({ check: true });
        break;
      case "/three":
        setThree({ check: true });
        break;
      default:
        break;
    }
  }, []);

  // let value = useParams();
  // console.log(value)

  //   function handleCheckAll() {
  //     history.push("/all",setFilerURL(filterURL) );

  //   }
  //   function handleCheckNoStops() {
  //     history.push("/nostops");
  //   }

  // function handleCheckOneStops() {
  //   history.push("/onestop");
  // }
  // function handleCheckTwoStops() {
  //   history.push("/twostops");
  // }
  // function handleCheckThreeStops() {
  //   history.push("/threstops");
  // }
  // console.log(state)
  return (
    <Router>
      <StyledForm>
        <div>
          <h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
          <SearchInput
            name={1}
            onChange={allToggle}
            id="all"
            inline
            label="Все"
            type="checkbox"
            checked={all.check}
          />
          <SearchInput
            name={2}
            onChange={noToggle}
            id="no"
            inline
            label="Без пересадок"
            type="checkbox"
            checked={no.check}
          />
          <SearchInput
            name={3}
            onChange={oneToggle}
            id="one"
            inline
            label="1 пересадка"
            type="checkbox"
            checked={one.check}
          />
          <SearchInput
            name={4}
            onChange={twoToggle}
            id="two"
            inline
            label="2 пересадки"
            type="checkbox"
            checked={two.check}
          />
          <SearchInput
            name={5}
            onChange={threeToggle}
            id="three"
            inline
            label="3 пересадки"
            type="checkbox"
            checked={three.check}
          />
        </div>
      </StyledForm>
    </Router>
  );
};
