import React from 'react'
// import { check } from '../Input/Input.stories'
import Label from './Label'

export default {
    title: 'atoms/Label',
    component: Label
}

export const Small = () => <Label size='small'>Small</Label>
export const Medium = () => <Label size='medium'>Medium</Label>
export const Large = () => <Label size='large'>Large</Label>

const temp = args => <Label {...args} />

export const Custom = temp.bind({})

Custom.args = {
    size: 'large',
    children: 'Custom'
}



