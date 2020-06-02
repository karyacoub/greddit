// import TestRenderer, { act, ReactTestRenderer } from "react-test-renderer";
import { ElementType } from "react";
import { act, create, ReactTestRenderer, ReactTestInstance } from "react-test-renderer";
import { Text } from "react-native";

export async function renderWithHooks(element: JSX.Element) {
    let subject: TestRendererWithHooks | undefined;

    await act(async () => {
        subject = new TestRendererWithHooks(element);
    })

    return subject!;
}

interface ReactTestInstanceExtension {
    text: () => string;
    props: any;
}

export type TestInstanceWithHooks = ReactTestInstance & ReactTestInstanceExtension;

export class TestRendererWithHooks {
    private subject: ReactTestRenderer;

    constructor(rootElement: React.ReactElement) {
        this.subject = create(rootElement);
    }

    private extendTestInstance(instance: ReactTestInstance): TestInstanceWithHooks {
        function textFn(): string {
            return instance.findByType(Text).props.children as string;
        }
        
        return {
            ...instance,
            props: instance.props,
            text: textFn,
        }
    }

    public debug(): string {
        return JSON.stringify(this.subject.toJSON(), null, 1);
    }

    public findAllByType(element: ElementType<any>): TestInstanceWithHooks[] {
        return this.subject.root.findAllByType(element)
            .map((instance: ReactTestInstance) => this.extendTestInstance(instance));
    }

    public findByType(element: ElementType<any>): TestInstanceWithHooks {
        return this.extendTestInstance(this.subject.root.findByType(element));
    }

    public findByTestId(testId: string): TestInstanceWithHooks | null {
        const element = this.subject.root.findAll((el) => el.props.testID === testId)[0];

        return element 
            ? this.extendTestInstance(element)
            : null;
    }
}