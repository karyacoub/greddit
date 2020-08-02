import "jest-extended";
import React from "react";
import { createStore } from "redux";
import { renderWithHooks, TestRendererWithHooks } from "../../../testUtils";
import HomeScreen from "../../home-screen/HomeScreen";
import { Root } from "../Root";

describe("Root component", () => {
    let subject: TestRendererWithHooks;

    beforeAll(async () => {
        (createStore as jest.Mock) = jest.fn();
        subject = await renderWithHooks(<Root />)
    });

    it("renders the HomeScreen component", () => {
        expect(subject.findByType(HomeScreen).exists()).toBeTrue();
    });
});