import React from 'react'

import Image from '../ui/Image'
import Screen from '../ui/Screen'
import Link from '../utils/Link'

function ScanQR() {
  return (
    <Screen title="Scan QR code" hideFooter fixedHeader={false}>
      <div
        className="flex flex-col flex-grow justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: 'url(images/qr-code-camera.png)' }}
      >
        <Link to="/projects/detail">
          <Image name="qr-scanner" />
        </Link>
        <p className="text-white rounded-full bg-gray-900 mt-8 px-4 py-2 opacity-75 shadow-md">
          Place the code inside of the box
        </p>
      </div>
    </Screen>
  )
}

export default ScanQR
