import React from "react";

const FlatItem = ({ Flats }) => {
    // console.log(Flats)
    // const address = "C:\\Users\\hp\\Documents\\workspace-spring-tool-suite-4-4.14.1.RELEASE\\FlatRegistration\\target\\static\\images\\"
  return (
    <div>
      {Flats.map((flat) => (
        <li key={flat.houseId} className="list-group-item" to={`/rooms/${flat.houseId}`}>
          <div className="card mx-2">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-6 succes">
                    <p>
                      Number of rooms : <strong>{flat.noOfRooms}</strong>
                      <br />
                      Area : <strong>{flat.area}</strong>
                      <br />
                      Locality : <strong>{flat.locality}</strong>
                      <br />
                      City : <strong>{flat.city}</strong>
                      <br />
                      State : <strong>{flat.state}</strong>
                    </p>
                    <h3>
                      Rent : <strong>{flat.rent}</strong>
                    </h3>
                  </div>
                  <div className="col-6">
                    {/* <img
                      src={require(`${address}${flat.image_url?flat.image_url:"default.jpg"}`)}
                      alt=""
                      height={200}
                      width={200}
                    /> */}
                    <img
                      src={"https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"}
                      alt=""
                      height={300}
                      width={320}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default FlatItem;
