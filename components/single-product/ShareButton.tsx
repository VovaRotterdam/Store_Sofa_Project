"use client";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LuShare2 } from "react-icons/lu";

import {
    FacebookShareButton,
    EmailShareButton,
    LinkedinShareButton,
    FacebookIcon,
    EmailIcon,
    LinkedinIcon,
} from "react-share";

function ShareButton({ productId, name }: { productId: string; name: string }) {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const sharedLink = `${url}/products/${productId}`;
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="p-2">
                    <LuShare2 />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                side="top"
                align="end"
                sideOffset={10}
                className="flex items-center gap-x-2 justify-content w-full"
            >
                <LinkedinShareButton url={sharedLink}>
                    <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <EmailShareButton url={sharedLink}>
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <FacebookShareButton url={sharedLink}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
            </PopoverContent>
        </Popover>
    );
}

export default ShareButton;
