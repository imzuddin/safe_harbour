import { Button } from "./button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface BackButtonProps {
    path: string;
    children: React.ReactNode;
    className?: string; 
}

export default function BackButton({path, children, className}: BackButtonProps) {
    const router = useRouter()

    return (
        <Button 
            className={clsx("w-auto bg-white text-black transition-colors hover:bg-gray-200 px-1", className)}
            onClick={() => {router.push(`${path}`)}}
        >
            <span className="text-black flex flex-row gap-2">
                <ArrowLeftIcon className="ml-auto h-5 w-5 text-black" /> Back {children} 
            </span>
        </Button>
    )
}