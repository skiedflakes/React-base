import React, { useState, useEffect } from "react";
import Case from "../../components/Case";

export default function Water() {
    const [recentPv, setRecentPv] = useState("");
    const [recentDeepwell, setRecentDeepwell] = useState("");
    const [recentSpring, setRecentSpring] = useState("");
    const [recentBBWI, setRecentBBWI] = useState("");
    const [recentMWD, setRecentMWD] = useState("");
    const [recentHIHI, setRecentHIHI] = useState("");
    const [recentDate, setRecentDate] = useState("");

    const testdata = [
        {
            primewater_id: "123",
            PV: "77.98",
            Deepwell: "51.34",
            Spring: "7.477",
            BBWI: "13.66",
            MWD: "2.57",
            HIHI: "2.92",
            date_applicable: "",
        },
    ];

    useEffect(() => {
        // Fetch data from the API using fetch
        fetch("https://api.bacolodcity.gov.ph/dashboard/util/water.php") // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((data) => {
                var recentData = data.data[data.data.length - 1];
                // console.log(recentData.PV);
                setRecentPv(recentData.PV);
                setRecentHIHI(recentData.HIHI);
                setRecentMWD(recentData.MWD);
                setRecentBBWI(recentData.BBWI);
                setRecentSpring(recentData.Spring);
                setRecentDeepwell(recentData.Deepwell);
                setRecentDate(recentData.date_applicable);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="card-body px-0">
            <p className=" ml-5">Last Updated | {recentDate}</p>

            <div className="row">
                <div className="card col-3 mt-2 mr-5 ml-5">
                    <div className="card-body px-0">
                        <p className="px-4">
                            PV : {recentPv} MLD
                            <br></br>
                        </p>
                    </div>
                </div>

                <div className="card col-3 mt-2 mr-5">
                    <div className="card-body px-0">
                        <p className="px-4">
                            Deepwell : {recentDeepwell} MLD<br></br>
                        </p>
                    </div>
                </div>

                <div className="card col-3 mt-2">
                    <div className="card-body px-0">
                        <p className="px-4">
                            Spring : {recentSpring}MLD<br></br>
                        </p>
                    </div>
                </div>

                <div className="card col-3 mt-2 mr-5 ml-5">
                    <div className="card-body px-0">
                        <p className="px-4">
                            BBWI : {recentBBWI} MLD<br></br>
                        </p>
                    </div>
                </div>

                <div className="card col-3 mt-2 mr-5">
                    <div className="card-body px-0">
                        <p className="px-4">
                            MWD : {recentMWD} MLD <br></br>
                        </p>
                    </div>
                </div>

                <div className="card col-3 mt-2">
                    <div className="card-body px-0">
                        <p className="px-4">
                            HIHI : {recentHIHI} MLD<br></br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
