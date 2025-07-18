import React, { useState, FC } from 'react'
import { IconButton, Collapse } from '@material-ui/core'
import { chevronDown, chevronUp } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'

interface AccordionCardProps {
  children?: React.ReactNode
  title?: string
  className?: string
  defaultOpen?: boolean
}

const AccordionCard: FC<AccordionCardProps> = ({
  children,
  defaultOpen = false,
  title = 'Summary',
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className='d-flex flex-column px-3 py-3 accordion-card m-0'>
      <div
        style={{
          alignItems: 'center',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        onClick={() => setOpen(!open)}
        className='d-flex flex-row justify-content-between font-weight-medium'
      >
        {title}
        <IconButton size='small'>
          <IonIcon
            className='fs-small me-2 text-muted'
            icon={open ? chevronUp : chevronDown}
          />
        </IconButton>
      </div>
      <Collapse in={open}>
        <div className='mt-2 mb-2'>{children}</div>
      </Collapse>
    </div>
  )
}

export default AccordionCard
