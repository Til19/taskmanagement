"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Activity,
  CreditCard,
  Layout,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { 
  AccordionContent,
  AccordionItem, 
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
  };

interface NavItemProps {
    isExpanded: boolean;
    isActive: boolean;
    organization: Organization;
    onExpand: (id: string) => void;
  };

export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand,
}: NavItemProps) => {
    return (
       <AccordionItem
            value={organization.id}
            className="border-none"
        >

       </AccordionItem>
    );
};
