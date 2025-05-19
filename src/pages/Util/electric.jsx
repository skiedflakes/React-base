import React, { useState, useEffect } from "react";
import Case from "../../components/Case";
import { Bar, Doughnut, Line } from "react-chartjs-2";

export default function Electric() {
    const [recentRate, setRecentRate] = useState("");
    const [recentDate, setRecentDate] = useState("");
    const [bardata, setBardata] = useState([]);
    useEffect(() => {
        // Fetch data from the API using fetch
        fetch("https://api.bacolodcity.gov.ph/dashboard/util/elec.php") // Replace with your actual API endpoint
            .then((response) => response.json())
            .then((data) => {
                var recentData = data.data[data.data.length - 1];

                setRecentRate(recentData.rate);
                setRecentDate(recentData.date_applicable);
                console.log(data.data);
                setBardata(data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

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
    return (
        <div className="card-body px-0">
            <p className=" ml-5">Electricity rate as of {recentDate}</p>

            <div className="row">
                <div className="card col-3 mt-2 mr-5 ml-5">
                    <div className="card-body px-0">
                        <p className="px-4">
                            Rate : {recentRate} / kWh
                            <br></br>
                        </p>
                    </div>
                </div>

                <div className="card col-12">
                    <div className="card-body px-0">
                        <Bar
                            style={{ height: 400 }}
                            data={{
                                labels: bardata.map((data) => data.month),
                                datasets: [
                                    {
                                        label: "Count",
                                        data: bardata.map((data) => data.rate),
                                        backgroundColor: [
                                            "rgba(43, 63, 229, 0.8)",
                                            "rgba(250, 192, 19, 0.8)",
                                            "rgba(135, 253, 135, 0.8)",
                                        ],
                                        borderRadius: 5,
                                    },
                                ],
                            }}
                            options={{
                                plugins: {
                                    title: {
                                        text: "Documents",
                                    },
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
