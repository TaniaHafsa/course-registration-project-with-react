/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";


const AllCourses = () => {
    const [listOfCourses, setlistOfCourses] = useState([]);
    const [markedCourses, setmarkedCourses] = useState([]);
    const [sumOfCredit, setsumOfCredit] = useState(0)
    const [remaining, setRemaining] = useState(0);
    const [sumOfPrice, setsumOfPrice] = useState(0);


    useEffect(() => {
        fetch('jsonData.json')
        .then(res => res.json())
        .then(data => setlistOfCourses(data))
    },[])

     const handleSelectButton = (course) => {
        const isExist = markedCourses.find(item => item.id == course.id);
        let count = course.credit;
        let price = course.price;

        if(isExist){
            alert('Already Added')
        }
        else{

            markedCourses.forEach(item => {
                count = count + item.credit;
                price = price + item.price;
            })

            const totalRemaining = 20 - count;


            if (count > 20) {
                return alert('20 Credit limitations has exceed');
            }
            else {
                setsumOfCredit(count);
                setRemaining(totalRemaining);
                setsumOfPrice(price);
                const newCourses = [...markedCourses, course];
                setmarkedCourses(newCourses)
            }

        }



     }

    return (

        <div className="max-w-7xl mx-auto " >
            <h1 className="text-5xl font-bold text-center mb-14 mt-14">Course Registration</h1>
            <div className="flex ">
                <div className="cart-container flex flex-wrap gap-4 ">
                   {
                    listOfCourses.map((course )=> 
                    <div className="cart border-2 border-solid  w-[280px] h-[400px]  rounded-lg shadow-slate-500/50">
                    <img className="p-2" src={course.img} alt="" />
                    <div className="p-2">
                        <h3 className="text-xl font-bold mb-2" >{course.title}</h3>
                        <p className=""><small>{course.body}</small></p>
                        {/* credit, price section */}
                        <div className="flex justify-between mt-3">
                            <h3 className="font-extrabold">$</h3>
                            <h3 className="font-extrabold">Price: {course.price}</h3>
                            <h3 className="font-extrabold">Credit: {course.credit} hr</h3>
                        </div>
                        <div className="text-center mt-4">
                            <button onClick={() => handleSelectButton(course)} className="bg-blue-500 px-5 py-2 rounded-lg text-white font-bold w-full">Select</button>
                        </div>
                    </div>


                </div>
                        )
                   }
                </div>
                <Cart
                markedCourses ={markedCourses}
                sumOfCredit ={sumOfCredit}
                remaining ={remaining}
                sumOfPrice ={sumOfPrice}

                >
                
                </Cart>
            </div>
            
        </div>


    );
};

export default AllCourses;