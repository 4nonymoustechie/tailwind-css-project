import Header from "./Header"
import Footer from './Footer'

const Home = () => {

 const merisWealth = "Mersitem Wealth Maintain your lifestyle even when you retire"
 const forMerisWealth = merisWealth.split(" ")


 const forLineImg =  [ 'Invest' ,'Stock trading' ,'Estates & Trustees '  ,  'Financial Advisory ' , 'Wealth management ' , 'Registrars & Probate' , 'Loans & leases ']









    return(
        <div className="text-[#345d45]">
            <Header/>
        <div className="bg-[#ad71aa] h-[30rem]">
                    <h1 className="text-[2rem] pt-10 ml-28 text-[#ffffff]">
                        {`${forMerisWealth[0]} ${forMerisWealth[1]}`} <br/>
                        {`${forMerisWealth[2]} ${forMerisWealth[3]} ${forMerisWealth[4]} `} <br/>
                        {`${forMerisWealth[5]} ${forMerisWealth[6]} ${forMerisWealth[7]} ${forMerisWealth[8]} `} <br/>

                    </h1><br/>
                    <div className="text-lg flex flex-row ">
                        <h2 className="flex ml-[7rem] gap-[1rem] text-[#ffffff]">Learn more <img id="arrow" src="src\assets\imgs\dark_arrow.svg"></img></h2>
                    </div>
            
                    <section className="flex flex-col bg-[#ffffff] mt-[5rem] h-[4rem]">
                        <div className="flex flex-row justify-evenly gap-[7.5rem] pt-[1rem] ">
                        <img className="w-5" src="src\assets\icons\1.svg" alt="" />
                        <img className="w-5" src="src\assets\icons\2.svg" alt="" />
                        <img className="w-5" src="src\assets\icons\3.svg" alt="" />
                        <img className="w-5" src="src\assets\icons\4.svg" alt="" />
                        <img className="w-5" src="src\assets\icons\5.svg" alt="" />
                        <img className="w-5" src="src\assets\icons\6 (2).png" alt="" />
                        <img className="w-5" src="src\assets\icons\7.svg" alt="" />
                        </div>
                            <ul className="flex justify-center gap-[6rem] text-[13px]">
                                <li className=""> {forLineImg[0]}</li>
                                <li className="pl-[1rem]">{forLineImg[1]}</li>
                                <li className="">{forLineImg[2]}</li>
                                <li className="">{forLineImg[3]}</li>
                                <li className="long">{forLineImg[4]}</li>
                                <li className="long">{forLineImg[5]}</li>
                                <li className="long">{forLineImg[6]}</li>
                            </ul>
                        
                            </section>
                    </div>
                    <Footer/>
                    </div>
      )
           
}
export default Home 