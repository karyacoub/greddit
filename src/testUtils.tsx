// import TestRenderer, { act, ReactTestRenderer } from "react-test-renderer";
import { ElementType } from "react";
import { act, create, ReactTestRenderer, ReactTestInstance } from "react-test-renderer";

export async function renderWithHooks(element: JSX.Element) {
    let subject: TestRendererWithHooks | undefined;

    await act(async () => {
        subject = await new TestRendererWithHooks(element);
    })

    return subject!;
}

export class TestRendererWithHooks {
    private subject: ReactTestRenderer;

    constructor(rootElement: React.ReactElement) {
        this.subject = create(rootElement);
    }

    public findAllByType(element: ElementType<any>): ReactTestInstance[] {
        return this.subject.root.findAllByType(element);
    }

    public findByType(element: ElementType<any>): ReactTestInstance {
        return this.subject.root.findByType(element);
    }
}