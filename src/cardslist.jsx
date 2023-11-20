import React from "react";
import pic1 from "./amber-fort-5164731_1280.jpg";
import pic2 from "./jaipur-Albert869.jpg";
import pic3 from "./architecture-639103_1280.jpg";

function Blocks() {
  const carddata = [
    {
      heading: "Architecture of Amber Fort",
      image: `${pic1}`,
      text: `Amer Palace, a great example of Rajput architecture.Constructed of red sandstone and marble. It consists of the Diwan-e-Aam, the Diwan-e-Khas, or  the Sheesh Mahal (mirror palace), or Jai Mandir, and the Sukh Niwas where a cool climate is artificially created by winds that blow over a water cascade within the palace.`
      
    },
    {
      heading: "Glimpse of Albert Hall",
      image: `${pic2}`,
      text: "The Albert Hall Museum in Jaipur is the oldest museum of the state and functions as the state museum of Rajasthan, India. The building is situated in Ram Niwas garden outside the city wall opposite New gate and is a fine example of Indo-Saracenic architecture. It is also called the Government Central Museum."
      
    },
    {
      heading: "Diwaan-E-Khaas Mahal",
      image: `${pic3}`,
      text: "The City Palace, Jaipur is a royal residence and former administrative headquarters of the rulers of the Jaipur State in Jaipur, Rajasthan.Construction started soon after the establishment of the city of Jaipur under the reign of Maharaja Sawai Jai Singh II.The palace complex lies in the heart of Jaipur city."
    },
  ];
  return (
    <>
      {
         carddata.map((list) => {
        return (
          <>
            <div className="block1">
              <h2 className="title">{list.heading}</h2>
              <img className="image" src={list.image} alt="Glimpses of Rajasthan Architecture" />
              <p className="para">{list.text}</p>
              <style>
  @import url('https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap');
</style>
            </div>
          </>
        );
      })}
    </>
  );
}
export { Blocks };
