import { html, TemplateResult } from "lit";
import "./index.js";
import '../icons/index.js';
import '../button/index.js';

export default {
    title: 'Components/Floating Action Button',
    component: 'tap-floating-action-button',
    args: {
        title: 'enter a title'
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

const LeadingAndTrailingTemplate: Story<ArgTypes> = ({ title }: ArgTypes) => html`
<tap-floating-action-button title=${title}>
    <tap-icon-default slot="leading" width="24" height="24"></tap-icon-default>
    <tap-button slot="trailing" variant="ghost" size="small">Click Me</tap-button>
</tap-floating-action-button>
`

export const FloatingActionButton = Template.bind({});

export const WithLeadingAndTrailing = LeadingAndTrailingTemplate.bind({});