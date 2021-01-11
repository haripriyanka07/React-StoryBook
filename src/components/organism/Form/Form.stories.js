import React from 'react';
import Center from '../../Center/Center';
import Form from './Form';

export default {
    title: 'organism/Form',
    component: Form
}

export const Small = () => <Center><Form size="small">Name</Form></Center>
export const Medium = () => <Center><Form size="medium">Name</Form></Center>
export const Large = () => <Center><Form size="large">Name</Form></Center>