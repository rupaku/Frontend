import React from "react";
import Card from "./Card";

const Cardsection = () => (
  <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">We love new friends!</h2>
      <div className="row">
        <div className="col-4">
          <Card
            title="Card Title One"
            buttonText="Try"
            myImg="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            para="Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready. "
          />
        </div>
        <div className="col-4">
          <Card
            title="Card Title Two"
            buttonText="Again"
            myImg="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            para="He share of first to worse. Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend attention tolerably."
          />
        </div>
        <div className="col-4">
          <Card
            title="default Title"
            buttonText="default"
            myImg="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            para="Now principles discovered off increasing how reasonably middletons men. Add seems out man met plate court sense. His joy she worth truth given."
          />
        </div>
      </div>
    </div>
  </section>
);

export default Cardsection;
