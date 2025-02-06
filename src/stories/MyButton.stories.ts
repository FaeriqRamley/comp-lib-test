import type { Meta, StoryObj } from "@storybook/react";

import { MyButton, myButtonConfig } from "./MyButton";

const meta: Meta<typeof MyButton> = {
    title: "Actual/Button",
    tags: ["autodocs"],
    component: MyButton,
    argTypes: Object.fromEntries(
        Object.entries(myButtonConfig.variants).map(([key, val]) => {
            return [key, { type: "select", options: Object.keys(val) }];
        })
    ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
    },
};
