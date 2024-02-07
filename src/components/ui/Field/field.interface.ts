import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	error?: FieldError | any
}
export type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> &
	IFieldProps

export interface iField extends TypeInputPropsField {}
