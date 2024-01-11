import { Popover, Transition } from '@headlessui/react'
import { useState } from 'react'

interface PopoverProps {
  children: React.ReactNode,
  image: string
}

const PopoveBox: React.FC<PopoverProps> = ({
  children,
  image
}) => {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <Popover className="relative w-full h-full bg-[#C05850] rounded-full hover:z-50" >
      <div onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)}>
        <div className={`absolute m-auto inset-0 w-5/6 h-5/6 bg-cover ${image} bg-center rounded-full`} >
        </div>
        <Transition
          show={isShowing}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Popover.Panel
          >
            {children}
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  )
}

export default PopoveBox
