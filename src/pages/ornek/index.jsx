import ODSModal from "../../components/modals/ODSModal"


const Ornek = () => {

    const handleSave = (setOpen) => {
        alert("kaydet basildi")
        setOpen(false)
    }

    return (
        <div className="p-12">
            <ODSModal btnTitle="Giris Yap" saveBtnTitle="Giris Yap" title="Giris Yap" handleSave={handleSave} >
                <div className="mb-3">
                    <div className="mb-2">
                        Email
                    </div>
                    <input type="email" className="p-3 border border-slate-700 outline-none rounded-md bg-slate-800 text-white block w-full" />
                </div>
                <div className="mb-3">
                    <div className="mb-2">
                        Password
                    </div>
                    <input type="password" className="p-3 border border-slate-700 outline-none rounded-md bg-slate-800 text-white block w-full" />
                </div>
            </ODSModal>
            <ODSModal btnTitle="Sozlesme" title="Sozlesme" handleSave={handleSave} >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos doloribus aut deleniti ducimus. Earum delectus, quam veritatis exercitationem dolorem minus, laborum labore beatae nihil eos ducimus tempora excepturi odit.
                </p>
            </ODSModal>

        </div>
    )
}

export default Ornek
