import './Style.css'
export default function Footer(){
    


    return(
        <div className="footer">
            <div className="contact">
                <p>Contact Us</p>
                <p>+374 98 23 56 44</p>
                <p>+374 77 30 71 04</p>
            </div>
            <div className="co-workers">
                <p className="co-work">Our co-workers</p>
                <a href = "http://www.zangak.am/"><p>Zangak.am</p></a>
                <a href = "https://bookprize.am/"><p>Bookprize.am</p></a>
                <a href = "https://books.am/am/"><p>Book.am</p></a>
            </div>
            <div className="message">
                <p>Thank you for visiting our website</p>
            </div>
        </div>
    )
}