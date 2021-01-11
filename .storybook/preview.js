import {withConsole} from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/react'
import { withA11y} from '@storybook/addon-a11y'
import Center  from '../src/components/Center/Center'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => <Center>{story()}</Center>)

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addDecorator(withKnobs)
addDecorator(withA11y)