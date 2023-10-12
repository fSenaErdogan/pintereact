import { useState } from "react"

const ODSModal = ({ btnTitle = "Modal ac", saveBtnTitle = "", title, children, handleSave = null }) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setOpen(true)} className="px-4 py-2 bg-blue-400 hover:bg-blue-500 transition-all rounded-md">
                {btnTitle}
            </button>
            <div className={`${!open && "hidden"} ods-modal-container absolute top-0 left-0 grid place-content-center w-full h-screen bg-black bg-opacity-40 text-white`}>
                <div className="bg-slate-900 rounded-xl ods-modal-content p-8 w-[600px] ">
                    <div className="ods-modal-header flex items-center mb-4">
                        {title}
                        <div className="ms-auto">
                            <button onClick={() => setOpen(false)}>
                                X
                            </button>
                        </div>
                    </div>
                    <div className="ods-modal-body">
                        {children}
                    </div>
                    <div className="ods-modal-footer flex items-center mt-4">
                        {handleSave !== null && (
                            <button onClick={() => handleSave(setOpen)} className="px-4 py-2 bg-green-400 hover:bg-green-500 transition-all rounded-md">
                                {saveBtnTitle}
                            </button>
                        )}
                        <div className="ms-auto">
                            <button onClick={() => setOpen(false)} className="px-4 py-2 bg-red-400 hover:bg-red-500 rounded-md transition-all">
                                Kapat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ODSModal