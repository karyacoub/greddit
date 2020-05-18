import ShallowRenderer from 'react-test-renderer/shallow';
import React from "react";
import { Home } from '../home';

describe("Home component", () => {
    const renderer = ShallowRenderer.createRenderer();
    let subject;

    beforeEach(() => {
        subject = renderer.render(<Home />)
    });

    it("renders something", () => {
        console.error("This is a test");
    });
});