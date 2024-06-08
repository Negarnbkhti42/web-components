import { html, TemplateResult } from "lit";
import "./index.js";

export default {
    title: 'Components/Floating Action Button',
    component: 'tap-floating-action-button',
    args: {
        title: 'عنوان'
    }
};

interface Story<T> {
    (args: T): TemplateResult;
    args?: Partial<T>;
    argTypes?: Record<string, unknown>;
}

interface ArgTypes {
    title: string;
}


const Template: Story<ArgTypes> = ({ title }: ArgTypes) => html`
<tap-floating-action-button title=${title}></tap-floating-action-button>
`

export const FloatingActionButton = Template.bind({});