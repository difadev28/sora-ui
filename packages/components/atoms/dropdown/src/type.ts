
export type DropdownProps = {
  options: OptionList,
  name: string,
  value: TypeValue  | null,
  handleChangeData: (type: string, value: {id:number | string, name:string}) => void
  config ?: {
    id?: string,
    placeholder?: string,
    label_empty?:string,
    disabled?: boolean,
  }
  className?: {
    container:string
  }
}

type OptionList = TypeValue[]

export type TypeValue = {
  id: number | string ,
  name: string
}