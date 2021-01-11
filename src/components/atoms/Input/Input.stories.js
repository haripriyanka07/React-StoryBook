import React from 'react'
import Input from './Input'
import {actions} from '@storybook/addon-actions'
import {text, boolean} from '@storybook/addon-knobs'

export default {
    title: 'atoms/Input',
    component: Input,
    argTypes: {
        size: {control: 'text'},
        placeholder: {control: 'text'},
        onChange: {action: 'Typing...'}

    }
}

export const Small = () => <Input type="text" size='small' placeholder='Small size' />
export const Medium = () => <Input type="number" size='medium' placeholder='Medium size' />
export const Large = () => <Input size='large' placeholder='Large size' {...actions('onChange', 'onMouseOver')} />
export const knob = () => <Input disabled={boolean('Disabled', false)} size='large' placeholder={text('PlaceHolder', 'Try')} />
const temp = args => <Input {...args} />

export const check = temp.bind({})

check.args = {
    size: 'large',
    placeholder: 'place'
}