import React, { useState } from "react";
import Select, { components } from "react-select";
import { TbWorld } from "react-icons/tb";

import Eng from "../Images/Group 13967.svg";

const countries = [
    { value: "EN", label: "ENG", icon: Eng },
];

const Option = (props) => (
    <components.Option {...props} className="country-option">
        <img src={props.data.icon} alt="logo" className="country-logo" />
        {props.data.label}
    </components.Option>
);

const LanguageSelector = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const handleChange = (value) => {
        setSelectedCountry(value);
    };

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            <img src={selectedCountry.icon} alt="s-logo" className="selected-logo" />
            {children}
        </components.SingleValue>
    );

    return (
        <div>
            <Select
                value={selectedCountry}
                options={countries}
                onChange={handleChange}
                styles={{
                    singleValue: (base) => ({
                        ...base,
                        display: "flex",
                        alignItems: "center"
                    })
                }}
                components={{
                    Option,
                    SingleValue
                }}
            />
        </div>
    );
};

export default LanguageSelector;
