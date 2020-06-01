import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { HomeScreen } from "../../home-screen/HomeScreen";
import { Root } from "../Root";

describe("Root component", () => {
    let subject: ReactTestRenderer;

    beforeAll(() => {
        subject = create(<Root />)
    });

    it("renders the HomeScreen component", () => {
        expect(subject.root.findByType(HomeScreen)).toBeTruthy();
    });
});