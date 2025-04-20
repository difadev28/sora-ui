import { Button } from '@sora-ui-material/button'
import { ModalBase } from '@sora-ui-material/modal-base'
import { useState } from 'react'

const SectionModalBase = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div className='flex gap-2.5 border border-custom-primary p-3 m-3 flex-col items-start rounded-2xl'>
        <Button
          variant='secondary'
          className='!border-custom-primary !text-custom-primary'
          onClick={() => {
            setShowModal(!showModal)
          }}
        >
          Modal Button Sample
        </Button>
      </div>
      {
        showModal && (
          <ModalBase
            isOpen={showModal}
          >
            <p>Tes</p>
          </ModalBase>
        )
      }
    </>
  )
}

export default SectionModalBase;