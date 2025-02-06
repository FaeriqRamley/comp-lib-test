import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./MyButton";

const meta: Meta<typeof MyButton> = {
    title: "Atoms/Button",
    tags: ["autodocs"],
    component: MyButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Click Me!",
    },
};

// argTypes: {
//     ...Object.fromEntries(
//         Object.entries(myButtonConfig.variants).map(([key, val]) => {
//             return [
//                 key,
//                 {
//                     controls: {
//                         type: "select",
//                         options: Object.keys(val),
//                     },
//                     description: `Available options:\n${Object.keys(
//                         val
//                     ).join(" | ")}`,
//                 },
//             ];
//         })
//     ),
//     ref: { table: { disable: true } }, // Hide ref from autodocs
// },
