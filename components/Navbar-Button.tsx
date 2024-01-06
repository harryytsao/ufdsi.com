"use client";

import { useRouter } from "next/navigation";

interface NavbarButtonProps {
    mode?: "off" | "on";
}

export const NavbarButton = ({
    mode = "off",
} : NavbarButtonProps) => {
    const router = useRouter();
}