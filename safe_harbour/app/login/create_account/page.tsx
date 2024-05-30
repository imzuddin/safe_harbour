'use client'

import { lusitana } from '@/app/ui/fonts';
import { useRouter } from 'next/navigation'
import { 
    LanguageIcon,
    AtSymbolIcon,
    KeyIcon,
    ArrowUpCircleIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import BackButton from "@/app/ui/backButton"

export default function Page() {

    const router = useRouter();

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    
        const formData = new FormData(event.currentTarget);
    
        console.log(formData.get('Fname'), formData.get('email'))
    }

    return (
        <form className="space-y-3 p-6" onSubmit={handleFormSubmit}>
            <div className="flex-1 rounded-lg bg-white px-6 pb-4 pt-2">
                <BackButton path="/" className='mb-5' />

                <div className="w-full flex flex-row items-center justify-between gap-2 text-2xl mb-5">
                    <div className='flex flex-row items-center gap-2'>
                        <div className="w-35 flex flex-col items-center justify-center gap-2">
                            <div className="h-0 w-0 border-b-[15px] border-l-[10px] border-r-[1px] border-b-black border-l-transparent border-r-transparent"/>
                            <div className="h-0 w-0 border-t-[20px] border-l-[30px] border-r-[20px] border-t-black border-l-transparent border-r-transparent"/>
                        </div>
                        <p className="text-blue-500 text-xl"> <strong> Safe Harbour </strong> </p>
                    </div>
                    <h1 className={`${lusitana.className} text-xl text-black px-10`}>
                        <strong> Create Your Personal Pier </strong>
                    </h1>
                </div>

                <div className='w-full flex flex-col'>
                    <div className="flex flex-row gap-4">
                        <div className="w-1/2">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor='Fname'
                        >
                            First Name
                        </label>
                        <div className='relative'>
                            <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-black text-sm outline-2 placeholder:text-gray-500"
                            id="Fname"
                            type="text"
                            name="Fname"
                            placeholder="E.g. John"
                            required
                            />
                            <LanguageIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        </div>
                        <div className="w-1/2">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor='Lname'
                        >
                            Last Name
                        </label>
                        <div className='relative'>
                            <input
                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-black text-sm outline-2 placeholder:text-gray-500"
                            id="Lname"
                            type="text"
                            name="Lname"
                            placeholder="E.g. Doe"
                            required
                            />
                            <LanguageIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        </div>
                    </div>
                    <div>
                        <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor='email'
                        >
                        Email
                        </label>
                        <div className='relative'>
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-black text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="E.g. john@gmail.com"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div>
                        <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor='password'
                        >
                        Password
                        </label>
                        <div className='relative'>
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-black text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Please Enter Password"
                                required
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <div>
                    <SubmitButton />
                </div>
                <div>
                    {/* Add form errors here */}
                </div>
            </div>
        </form>
    )
}

function SubmitButton() {
    const router = useRouter()

    return (
        <Button className="mt-4 w-auto gap-2 text-white" >
            Submit <ArrowUpCircleIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    )
}