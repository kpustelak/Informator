import {type ReactNode} from "react";
import { createPortal } from 'react-dom';
import {Button} from "@/components/ui/Button.tsx";

interface SidePanelProps {
    title: string,
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void,
}

export function SidePanel({ title, children, isOpen, onClose }: SidePanelProps) {

    return createPortal(
        <div className={`fixed inset-0 z-20 flex justify-end bg-black/20 ${isOpen ? "" : "hidden"}`}>
            <div className="flex h-full w-full max-w-200 flex-col bg-surface">
                <header className="border-b border-line px-6 py-4">
                    <h3>{title}</h3>
                </header>
                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
                    {children}
                </div>
                <footer className="border-t border-line px-6 py-4 flex justify-end gap-2">
                    <Button type="button" onClick={onClose} variant="outline">Cancel</Button>
                    <Button type="button">Create</Button>
                </footer>
            </div>
        </div>
        , document.body)
}
