const Footer = () => {
  return (
    <section className="section-footer"> 
        <div className="footer-div">
          <div className="footer-div_div">
            <h1 className="header-div_h1">Contact me!</h1>
            <h4 className="header-div_h4">Here are the websites where you can contact me...</h4>
              <div className="img-footer">
                <img src="/icons/email.png" /> 
              </div >
              <p className="p-footer">davidscholarship445@gmail.com</p>
            <a className="contacts" href="https://www.instagram.com/davidrivera4459/">
              <div className="img-footer">
              <img  src="/icons/ig.png" />
              </div>
            </a>
          </div>
        </div>
    </section>
  )
}
export default Footer