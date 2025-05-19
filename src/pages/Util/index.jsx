import React, { useEffect } from "react";
import Case from "../../components/Case";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import water from "./assets/water.svg"; // Importing the SVG as a component
import electric from "./assets/electric.svg"; // Importing the SVG as a component
import WaterComponent from "./water";
import ElectricComponent from "./electric";
export default function Util() {
    const [activeTab, setActiveTab] = React.useState("dashboard");

    useEffect(() => {
        document.title = "Utilities";
    }, []);

    const data = [
        {
            label: "Water",
            value: "dashboard",
            icon: <img src={water} alt="Bcdts Logo" width="60" height="60" />,
            desc: <WaterComponent />,
        },
        {
            label: "Electric",
            value: "profile",
            icon: (
                <img
                    src={electric}
                    alt="Bcdts Logo"
                    width="30"
                    height="30"
                    style={{ marginRight: 20 }}
                />
            ),
            desc: <ElectricComponent />,
        },
    ];

    return (
        <Case>
            <div className="section-header px-4 tw-rounded-none tw-shadow-md tw-shadow-gray-200 lg:tw-rounded-lg">
                <h1 className="mb-1 tw-text-lg">Utilities</h1>
            </div>

            <div className="section-body">
                <div className="card">
                    <Tabs value={activeTab}>
                        <TabsHeader>
                            {data.map(({ icon, label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    className={
                                        activeTab === value
                                            ? "active-tab ml-4 mr-4"
                                            : "ml-4 mr-4"
                                    }
                                >
                                    <div
                                        className="row"
                                        style={{
                                            alignItems: "center",
                                        }}
                                    >
                                        {icon}
                                        <span>{label}</span>
                                    </div>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {data.map(({ value, desc }) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </Case>
    );
}
