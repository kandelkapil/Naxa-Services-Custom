import React, { useEffect } from "react";
import "./content.css";
import Icon from "../../assets/icon1.svg";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/reducer/getReducer";

const Content = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  var Apidata = useSelector((state) => state.data.data);

  //Filtering out Element for right side

  const filteredArrayOne_One = Apidata.filter(
    (el) => el.service_order === 1 || el.service_order === 2
  );
  const filteredArrayOne_Two = Apidata.filter((el) => el.service_order === 3);
  const finalArrayOne = filteredArrayOne_One.concat(filteredArrayOne_Two);

  //Filtering out Element for left side

  const filteredArrayTwo_One = Apidata.filter((el) => el.service_order === 4);
  const filteredArrayTwo_Two = Apidata.filter((el) => el.service_order === 5);
  const filteredArrayTwo_Three = Apidata.filter((el) => el.service_order === 6);

  const finalArrayTwo_Concat =
    filteredArrayTwo_One.concat(filteredArrayTwo_Two);
  const finalArrayTwo = finalArrayTwo_Concat.concat(filteredArrayTwo_Three);

  // Merging arranged right and left side
  const finalizedArray = finalArrayOne.concat(finalArrayTwo);

  const Elements = ({ item, flex, id }) => {
    return (
      <>
        <div className="container-content" id={id}>
          <div className="content-wrapper" style={{ flexDirection: flex }}>
            <div className="svg-container">
              <div className="svg-wrapper">
                <img className="image" src={item.photo} alt="" />
              </div>
            </div>
            <div className="elements-container">
              <div className="element-icon">
                <img className="icon" src={Icon} alt="" />
              </div>
              <div className="element-header">{item.title}</div>
              <div className="element-desc-intro">{item.description1}</div>
              <div className="element-desc-main-container">
                <div className="element-desc-main-wrapper">
                  {item.description2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      {!Apidata ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        finalizedArray.map((item) => {
          if (item.service_order % 2 === 1) {
            return (
              <Elements
                item={item}
                flex={"row"}
                id={item.service_order}
                key={item.service_order}
              />
            );
          } else {
            return (
              <Elements
                item={item}
                flex={"row-reverse"}
                id={item.service_order}
                key={item.service_order}
              />
            );
          }
        })
      )}
    </>
  );
};

export default Content;
