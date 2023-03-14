import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-gray-900 text-white py-4 px-6 fixed bottom-0 left-0 right-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; 2022 Mitt Företag AB</p>
        </div>
        <div className="text-sm">
          <p className="mr-4">Kontakt</p>
          <p className="mr-4">Om oss</p>
          <p className="mr-4">Användarvillkor</p>
          <p>Integritetspolicy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


