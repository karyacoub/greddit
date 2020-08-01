import { ElementType } from "react";
import { act, create, ReactTestRenderer, ReactTestInstance } from "react-test-renderer";
import { Text } from "react-native";
import configureMockStore from "redux-mock-store";

// used when having multiple async tests causes contamination between promises
export const flushPromises = () => new Promise(setImmediate);

// used in reducer tests
const storeConfigCreator = configureMockStore();
export const mockStore = storeConfigCreator();

// adds some useful functions to react test renderer for testing
export async function renderWithHooks(element: JSX.Element): Promise<TestRendererWithHooks> {
    let subject: TestRendererWithHooks | undefined;

    await act(async () => {
        subject = new TestRendererWithHooks(element);
    })

    return subject!;
}

interface ReactTestInstanceExtension {
    text: () => string;
    exists: () => boolean;
    props: any;
}

export type TestInstanceWithHooks = ReactTestInstance & ReactTestInstanceExtension;

export class TestRendererWithHooks {
    private subject: ReactTestRenderer;

    constructor(rootElement: React.ReactElement) {
        this.subject = create(rootElement);
    }

    private static EmptyComponent: React.FunctionComponent = () => null;

    private static doesNotExist(caller: string): any { 
        throw `Could not call function ${caller} - test instance does not exist`;
    }

    private static textFn(instance: ReactTestInstance): string {
        return instance.findByType(Text).props.children as string;
    }

    private static existsFn(instance: ReactTestInstance): boolean {
        return instance !== null;
    }

    private static emptyTestInstance: TestInstanceWithHooks = {
        instance: null,
        props: {},
        parent: null,
        children: [],
        type: TestRendererWithHooks.EmptyComponent,
        findByType: () => TestRendererWithHooks.doesNotExist("findByType"),
        findByProps: () => TestRendererWithHooks.doesNotExist("findByProps"),
        findAllByType: () => TestRendererWithHooks.doesNotExist("findAllByType"),
        findAllByProps: () => TestRendererWithHooks.doesNotExist("findAllByProps"),
        findAll: () => TestRendererWithHooks.doesNotExist("findAll"),
        find: () => TestRendererWithHooks.doesNotExist("find"),
        text: () => TestRendererWithHooks.doesNotExist("text"),
        exists: () => false
    }

    private static extendTestInstance(instance: ReactTestInstance | null): TestInstanceWithHooks {    
        return instance
            ? {
                ...instance,
                props: instance.props,
                exists: () => TestRendererWithHooks.existsFn(instance),
                text: () => TestRendererWithHooks.textFn(instance),
            }
            : TestRendererWithHooks.emptyTestInstance;
    }

    public debug(): string {
        return JSON.stringify(this.subject.toJSON(), null, 1);
    }

    public findAllByType(element: ElementType<any>): TestInstanceWithHooks[] {
        return this.subject.root.findAllByType(element)
            .map((instance: ReactTestInstance) => TestRendererWithHooks.extendTestInstance(instance));
    }

    public findByType(element: ElementType<any>): TestInstanceWithHooks {
        return TestRendererWithHooks.extendTestInstance(this.subject.root.findByType(element));
    }

    public findByTestId(testId: string): TestInstanceWithHooks {
        const element = this.subject.root.findAll((el) => el.props.testID === testId)[0];

        return TestRendererWithHooks.extendTestInstance(element);
    }
}