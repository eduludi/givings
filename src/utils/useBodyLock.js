import { useEffect } from 'react'

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default function useBodyLock() {
  useEffect(() => {
    const root = document.querySelector('#root')
    disableBodyScroll(root, {
      allowTouchMove: el => {
        while (el && el !== document.body) {
          if (el.getAttribute('body-scroll-lock-ignore') !== null) {
            return true
          }

          el = el.parentNode
        }
      },
    })
    return () => clearAllBodyScrollLocks()
  }, [])
}
