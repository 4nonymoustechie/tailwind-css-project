

const Header = () => {
    return (
        <div>
            <nav className="flex flex-row justify-around items-center bg-[#ffffff] bg-transparent h-12">
                <div className="flex items-center">
                    <img class="w-32"  id="img1" src="src\assets\imgs\merii.png" alt="" />
                    <a href="meri.html"><img className="w-6" src="src\assets\imgs\home_inner.svg" alt="" /></a>
                    <a id="lin" href="ind.html"><img className="w-9" src="src\assets\icons\(17).png" alt="" /></a>
                </div>

                <div className="w-76 flex justify-around gap-16">
                    <a href="meri.html">About us</a>
                    <a href="#">Research</a>
                    <select name="" id="model">
                        <option value=""> <h3>Media</h3></option>
                        <option value="">Employees Of The Quarter</option>
                        <option value="">Best Execution Policy</option>
                        <option value="">Privacy Policy</option>
                        <option value="">Meristem Registrar E-Mandate</option>
                        <option value="">Neimeth Rights Circular</option>
                        <option value="">Neimeth Acceptance Form</option>
                        <option value=""> Information Security Policy</option>
                        <option value="">Brochure </option>
                        <option value="">Client Update Form</option>
                        <option value="">Simple Will Form</option>
                        <option value=""> 2021 Outlook</option>
                    </select>
                    <a href="#">Careers</a>
                    <a href="#">Log in</a>
                </div>
            </nav>

                
            </div>
        


    )
         }

                export default Header