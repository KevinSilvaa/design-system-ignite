import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { VariantProps } from '@stitches/react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  textSize?: VariantProps<typeof TextInputContainer>['size']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'Text Input'
