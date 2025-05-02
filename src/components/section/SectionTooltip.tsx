import { Tooltip } from '../../../packages/components/atoms/tooltip/src'

const SectionTooltip = () => {
  return (
    <div className='flex gap-5 items-center justify-center border border-custom-border_default p-7 rounded-lg mt-5'>

      <div className="flex gap-5">
        <p className="flex items-center">
          <Tooltip content={"Tes"} position="bottom" />
          Tes Data Tooltip Bottom
        </p>
        <p className="flex items-center">
          <Tooltip content={"Tes"} />
          Tes Data Tooltip Top
        </p>
        <p className="bg-custom-primary p-3 rounded-xl flex items-center text-white">
          <Tooltip content={"Tes"} variant="light" />
          Tes Data Tooltip Top Light
        </p>
        <p className="bg-custom-primary p-3 rounded-xl flex items-center text-white">
          <Tooltip content={"Analisis uji coba dan tidak akan tercatat dalam faktur tagihan."} variant="light" position="bottom" />
          Tes Data Tooltip Bottom Light
        </p>
      </div>
    </div>
  )
}

export default SectionTooltip;