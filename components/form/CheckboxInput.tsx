"use client";

import { Checkbox } from "@/components/ui/checkbox";

type CheckboxInputProps = {
    name: string;
    label: string;
    defaultChecked?: boolean;
};

import React from "react";

function CheckboxInput({ name, label, defaultChecked }: CheckboxInputProps) {
    return (
        <div className="flex item-center space-x-2 mb-4">
            <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
            <label
                htmlFor={name}
                className="text-sm leading-none capitalize peer-disable:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    );
}

export default CheckboxInput;
