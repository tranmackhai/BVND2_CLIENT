import { useEffect, useState } from 'react'
import { ArrowUpOutlined } from "@ant-design/icons";
import "./Scroll.scss";

const Scroll = () => {

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false);
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  return (
    <div>
      {backToTopButton && (
        <button className="button-scroll" onClick={scrollUp}>
          <ArrowUpOutlined />
        </button>
      )}
    </div>
  )
}

export default Scroll