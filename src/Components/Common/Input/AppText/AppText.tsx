import { Ref } from "react"

interface TextType {
	refValue: Ref<HTMLInputElement>
	label: string
}

const Text = ({ refValue, label }: TextType) => {
	return (
		<>
			<label>{label}</label>
			<input type="text" ref={refValue} />
		</>
	)
}

export default Text
