import './Style.css'
import React from "react"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react'

// const data = [
//     {
//         id: 1,
//         price: 3900,
//         class: 'book book1',
//         name: "«Հայտարարվում է սպանություն»",
//         author: "Ագաթա Քրիստի",
//         img: "https://bookprize.am/storage/books/v2s0c0jgMfSgg2i9fYLpMb76MKZ456ctprmZTzQ6.jpg",
//         button_text: 'Տես ավելին', 
//         size: '13x20 սմ',
//         pages_count: 408,
//         weight: '326 գրամ',
//         cover: 'Փափուկ',
//         language: 'Հայերեն'
//     },
//     {
//         id: 2,
//         price: 3500,
//         class: 'book book2',
//         name: "«Աստղերն են մեղավոր»",
//         author: "Ջոն Գրին",
//         img: "https://bookprize.am/storage//books/t7Sm3Nw8eEby.jpeg",
//         button_text: 'Տես ավելին',
//         size: '11x17 սմ',
//         pages_count: 144,
//         weight: '189 գրամ',
//         cover: 'Կոշտ',
//         language: 'Հայերեն'
//     },
//     {
//         id: 3,
//         price: 4900,
//         class: 'book book3',
//         name: "«Աշխարհի շուրջը 80 օրում»",
//         author: "Ժյուլ Վեռն",
//         img: "https://bookprize.am/storage/books/tCLjsPacwROLeo8BWmQneZ5A8GOEExwVJQ1fJIqO.jpg",
//         button_text: 'Տես ավելին',
//         size: '14x20 սմ',
//         pages_count: 304,
//         weight: '424 գրամ',
//         cover: 'Կոշտ',
//         language: 'Հայերեն'
//     },
//     {
//         id: 4,
//         price: 5800,
//         class: 'book book4',
//         name: "«Գիտելիքի հնագիտությունը»",
//         author: "Միշել Ֆուկո",
//         img: "https://bookprize.am/storage/books/tPDsP8RHGGofqNdpMpbzlYSGMQrVQQuSnBVfNVxB.jpg",
//         button_text: 'Տես ավելին',
//         size: '14x21 սմ',
//         pages_count: 408,
//         weight: '599 գրամ',
//         cover: 'Կոշտ',
//         language: 'Հայերեն'
//     },
//     {
//         id: 5,
//         price: 7900,
//         class: 'book book5',
//         name: "«Հրեշտակներ և դևեր»",
//         author: "Դեն Բրաուն",
//         img: "https://bookprize.am/storage/books/WkPLnFmL4dZG42msW9sII2A5solEz5kjighFFFsO.jpg",
//         button_text: 'Տես ավելին',
//         size: '16x24 սմ',
//         pages_count: 528,
//         weight: '888 գրամ',
//         cover: 'Կոշտ',
//         language: 'Հայերեն'
//     },
//     {
//         id: 6,
//         price: 6900,
//         class: 'book book5',
//         name: "«Ջեյն Էյր»",
//         author: "Շարլոթ Բրոնթե",
//         img: "https://bookprize.am/storage//books/NMg90JeXCvF9.jpeg",
//         button_text: 'Տես ավելին',
//         size: '15x21 սմ',
//         pages_count: 664,
//         weight: '803 գրամ',
//         cover: 'Կոշտ',
//         language: 'Հայերեն'
//     }
// ];


 function Products(){

    const [booksData,setBooksData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005')
        .then(res => res.json())
        .then(res => setBooksData(res))
    },[])
    return(
    <div className='section'>
        
        {booksData.map((value,i) =>{
            return(
            <div id="main" key={i}>
                <div className="block">
                    <div className={value.class}>
                        <img src ={value.img} width="300px" height="400px"/>
                        <p>{value.author}</p>
                        <p>{value.name}</p><br/>
                        <Link to={'/book/'+value.id}>
                            <button className="more">{value.button_text}</button>
                        </Link>
                    </div>
                </div>
            </div>)})}
            </div>
            
        )
            }

function OneProduct(){
    const {id} = useParams();
    const [bookData,setBookData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/books/' + id)
        .then(res => res.json())
        .then(res => setBookData(res))
    },[])
    // const product = bookData.find(product => product.id === Number(id));

    
        return(
        <div className='section-route'>
            <div className='header-route'>
                <div>
                    <img src = {bookData.img} className='route-image'/>
                </div>
                <div className='info'>
                    <div className='keys'>
                        <div className='information_div'>
                            <p>Հեղինակ</p><p>{bookData.author}</p>
                            
                        </div>
                        <div className='information_div'>
                            <p>Գին</p><p>{bookData.price}</p>
                            
                        </div>
                        <div className='information_div'>
                            <p>Լեզու</p>
                            <p>{bookData.language}</p>
                        </div>
                        <div className='information_div'>
                            <p>Կազմ</p>
                        <p>{bookData.cover}</p>
                        </div>
                        <div className='information_div'>
                            <p>Էջերի քանակը</p>
                            <p>{bookData.pages_count}</p>
                        </div>
                        <div className='information_div'>
                            <p>Քաշ</p>
                            <p>{bookData.weight}</p>
                        </div>
                        <div className='information_div'>
                            <p>Չափս</p>
                            <p>{bookData.size}</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
        }
export {OneProduct,Products}