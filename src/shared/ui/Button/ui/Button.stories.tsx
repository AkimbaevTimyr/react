import {Button} from "shared/ui/Button";

import type {Meta, StoryObj} from '@storybook/react';
import DarkIcon from "shared/assets/theme-dark.svg";
import LightIcon from "shared/assets/theme-light.svg";
import {ThemeButton} from "shared/ui/Button/ui/Button";

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Dark: Story = {
    args: {
        children: <img src={DarkIcon} alt="dark"  />
    },
};

export const Light: Story = {
    args: {
        children: <img src={LightIcon} alt="dark"  />
    },
};

export const Clear: Story = {
    args: {
        children: 'Add',
        theme: ThemeButton.CLEAR
    },
};

export const Default: Story = {
    args: {
        children: 'Add',
    },
};



