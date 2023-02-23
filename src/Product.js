import './Style.css'
import React from "react"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

const data = [
    {
        id: 1,
        price: 3900,
        class: 'book book1',
        name: "«Հայտարարվում է սպանություն»",
        author: "Ագաթա Քրիստի",
        img: "https://bookprize.am/storage/books/v2s0c0jgMfSgg2i9fYLpMb76MKZ456ctprmZTzQ6.jpg",
        button_text: 'Տես ավելին', size: '13x20 սմ',
        pages_count: 408,
        weight: '326 գրամ',
        cover: 'Փափուկ',
        language: 'Հայերեն'
    },
    {
        id: 2,
        price: 3500,
        class: 'book book2',
        name: "«Աստղերն են մեղավոր»",
        author: "Ջոն Գրին",
        img: "https://bookprize.am/storage//books/t7Sm3Nw8eEby.jpeg",
        button_text: 'Տես ավելին',
        size: '11x17 սմ',
        pages_count: 144,
        weight: '189 գրամ',
        cover: 'Կոշտ',
        language: 'Հայերեն'
    },
    {
        id: 3,
        price: 4900,
        class: 'book book3',
        name: "«Աշխարհի շուրջը 80 օրում»",
        author: "Ժյուլ Վեռն",
        img: "https://bookprize.am/storage/books/tCLjsPacwROLeo8BWmQneZ5A8GOEExwVJQ1fJIqO.jpg",
        button_text: 'Տես ավելին',
        size: '14x20 սմ',
        pages_count: 304,
        weight: '424 գրամ',
        cover: 'Կոշտ',
        language: 'Հայերեն'
    },
    {
        id: 4,
        price: 5800,
        class: 'book book4',
        name: "«Գիտելիքի հնագիտությունը»",
        author: "Միշել Ֆուկո",
        img: "https://bookprize.am/storage/books/tPDsP8RHGGofqNdpMpbzlYSGMQrVQQuSnBVfNVxB.jpg",
        button_text: 'Տես ավելին',
        size: '14x21 սմ',
        pages_count: 408,
        weight: '599 գրամ',
        cover: 'Կոշտ',
        language: 'Հայերեն'
    },
    {
        id: 5,
        price: 7900,
        class: 'book book5',
        name: "«Հրեշտակներ և դևեր»",
        author: "Դեն Բրաուն",
        img: "https://bookprize.am/storage/books/WkPLnFmL4dZG42msW9sII2A5solEz5kjighFFFsO.jpg",
        button_text: 'Տես ավելին',
        size: '16x24 սմ',
        pages_count: 528,
        weight: '888 գրամ',
        cover: 'Կոշտ',
        language: 'Հայերեն'
    },
    {
        id: 6,
        price: 6900,
        class: 'book book5',
        name: "«Ջեյն Էյր»",
        author: "Շարլոթ Բրոնթե",
        img: "https://bookprize.am/storage//books/NMg90JeXCvF9.jpeg",
        button_text: 'Տես ավելին',
        size: '15x21 սմ',
        pages_count: 664,
        weight: '803 գրամ',
        cover: 'Կոշտ',
        language: 'Հայերեն'
    }
];


 function Products(){

    return(
    <div className='section'>
        
        {data.map((value,i) =>{
            return(
            <div id="main" key={i}>
                <div className="block">
                    <div className={value.class}>
                        <img src ={value.img}/>
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

    const product = data.find(product => product.id === Number(id));

    
        return(
        <div className='section-route'>
            <div className='header-route'>
                <div>
                    <img src = {product.img} className='route-image'/>
                </div>
                <div className='info'>
                    <div className='keys'>
                        <div className='information_div'>
                            <p>Հեղինակ</p><p>{product.author}</p>
                            
                        </div>
                        <div className='information_div'>
                            <p>Գին</p><p>{product.price}</p>
                            
                        </div>
                        <div className='information_div'>
                            <p>Լեզու</p>
                            <p>{product.language}</p>
                        </div>
                        <div className='information_div'>
                            <p>Կազմ</p>
                        <p>{product.cover}</p>
                        </div>
                        <div className='information_div'>
                            <p>Էջերի քանակը</p>
                            <p>{product.pages_count}</p>
                        </div>
                        <div className='information_div'>
                            <p>Քաշ</p>
                            <p>{product.weight}</p>
                        </div>
                        <div className='information_div'>
                            <p>Չափս</p>
                            <p>{product.size}</p>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
    export {OneProduct,Products}




















//                     <div className="book2">
//                         <img src ="https://bookprize.am/storage/books/Su3vfmZxw4ffOU1oly02w83zzzPb5x7QOcRpPT8N.jpg"/>
//                         <p>Էդգար Հարությունյան</p>
//                         <p>«Նվիրվելու արվեստը կամ ձոն վարդին»</p><br/>
//                         <Link to="/book2">
//                             <button className="more">Տես ավելին</button>  
//                         </Link>  
//                     </div>
//                 </div>
//                 <div className="block-2">
//                     <div className="book3"> 
//                         <img src ="https://bookprize.am/storage/books/tCLjsPacwROLeo8BWmQneZ5A8GOEExwVJQ1fJIqO.jpg"/>
//                         <p>Ժյուլ Վեռն</p>
//                         <p>«Աշխարհի շուրջը 80 օրում»</p><br/>
//                         <Link to="/book3">
//                             <button className="more">Տես ավելին</button>
//                         </Link>
//                     </div>
//                     <div className="book4"> 
//                         <img src ="https://bookprize.am/storage/books/tPDsP8RHGGofqNdpMpbzlYSGMQrVQQuSnBVfNVxB.jpg"/>
//                         <p>Միշել Ֆուկո</p>
//                         <p>«Գիտելիքի հնագիտությունը»</p><br/>
//                         <Link to="/book4">
//                             <button className="more">Տես ավելին</button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         )

// }