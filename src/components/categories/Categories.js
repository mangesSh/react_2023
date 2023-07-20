import React from 'react';
import categoriesArr from "./Categories.json";
import Category from "./Category";
// import './Categories.css';

function Categories() {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1350e22cff9663e7.png?q=100"></img>
            <div>Top Offers</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d64cae0f8081256a.png?q=100"></img>
            <div>Mobiles & Tabs</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7dbcda527b648814.png?q=100"></img>
            <div>Electonics</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e29a070388d534a5.png?q=100"></img>
            <div>Tvs Application</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d44ffc537ed6e241.png?q=100"></img>
            <div>Fashion</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/994a83c90019fb5f.png?q=100"></img>
            <div>Beauty</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d300931a0fd1c17e.png?q=100"></img>
            <div>Home and Furniture</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/2dac2decff60c650.png?q=100"></img>
            <div>Fligths</div>
          </div>
        </div>
        <div className="col">
          <div className="category text-center">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/aecfaba5969b96dd.png?q=100"></img>
            <div>Grocery</div>
          </div>
        </div> */}
          {categoriesArr.map((categoryObj) => {
          return <Category categoryObj={categoryObj} />;
        })}
      </div>
      
    </div>
  );
}

export default Categories
