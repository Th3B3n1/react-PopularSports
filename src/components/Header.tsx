import headerImg from '../assets/vegyes-sportok.jpg'

export function Header()
{
    return (
        <header className="container text-center">
            <img src={headerImg} alt="Sportok" style={{width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover"}} />
            <h1 style={{fontSize: "300%"}}>Fedezd fel a sportok világát!</h1>
        </header>
    )
}