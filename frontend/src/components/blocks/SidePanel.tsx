import { createPortal } from 'react-dom';

export function SidePanel() {
    return createPortal(
        <div className="fixed w-full h-full bg-black/20 inset-0 z-20">
            <div className="max-w-200 bg-surface h-full float ">

            </div>
        </div>
        , document.body)
}