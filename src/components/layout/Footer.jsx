import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="bg-orange-500 text-white mt-16">
                <div className='max-w-[1500px] mx-auto'>
                    <div class=" px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 class="font-extrabold text-lg mb-3">
                                Wah!
                            </h4>
                            <p class="text-sm max-w-[180px]">
                                Subscribe to our newsletter to get the latest deals for you.
                            </p>
                        </div>
                        <div>
                            <h5 class="font-semibold mb-3">
                                Support
                            </h5>
                            <ul class="text-sm space-y-1">
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Phone: +1 123 456 7890
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Email: support@wah.com
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Help Center
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold mb-3">
                                Account
                            </h5>
                            <ul class="text-sm space-y-1">
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    My Account
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    My Stuff
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Wallet
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Chat
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold mb-3">
                                Quick Link
                            </h5>
                            <ul class="text-sm space-y-1">
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Home
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Wallet
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    FAQ
                                </li>
                                <li className="transition-all duration-200 ease-in-out cursor-pointer">
                                    Contact
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="max-w-7xl mx-auto px-6 pb-12 flex flex-col md:flex-row items-center justify-between border-t border-orange-500">
                        <div class="mb-6 md:mb-0">
                            <h5 class="font-semibold mb-2">
                                Download App
                            </h5>
                            <div class="flex items-center space-x-4">
                                <img alt="App Store download QR code" class="w-20 h-6 object-contain cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105" height="30" src="https://storage.googleapis.com/a1aa/image/6683f89c-a39d-461e-7024-e48fd4279eba.jpg" width="100" />
                                <img alt="Google Play download QR code" class="w-20 h-6 object-contain cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105" height="30" src="https://storage.googleapis.com/a1aa/image/8d6ee04e-1f76-4ad7-eac4-4739e2b3d451.jpg" width="100" />
                            </div>
                        </div>
                        <div class="flex space-x-6 text-white text-lg">
                            <a aria-label="Facebook" class="hover:text-orange-200 transition-all duration-200 ease-in-out hover:text-xl cursor-pointer" href="#">
                                <i class="fab fa-facebook-f">
                                </i>
                            </a>
                            <a aria-label="Twitter" class="hover:text-orange-200 transition-all duration-200 ease-in-out hover:text-xl cursor-pointer" href="#">
                                <i class="fab fa-twitter">
                                </i>
                            </a>
                            <a aria-label="Instagram" class="hover:text-orange-200 transition-all duration-200 ease-in-out hover:text-xl cursor-pointer" href="#">
                                <i class="fab fa-instagram">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
