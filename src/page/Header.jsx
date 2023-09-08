const Header = () => {
  return (
    <section className="header">
        <div className="header-div_1">
            <img className="header-div_img" src="/images/my-image.jpg" alt="" />
        </div>
        <div className="header-div_2">
            <h1 className="header-div_h1"><span className="header-div_span">Hello!</span> I am a Full Stack developer</h1>
            <h4 className="header-div_h4">My name is David Rivera and I am a passionate developer who has experience with various programs. I have developed various projects containin Javascript, html, and CSS. These projects have been also been implemented with libraries such as React. </h4>
            <button  className="header-div_button">
              <a className="a" href="https://github.com/1Mimo1?tab=repositories">
               <h2 className="header-div_button_h2 ">Projects </h2> 
               <img className="body-divs_img" src="/icons/gh.png"/>
               </a>
            </button>
        </div>
    </section>
  )
}
export default Header