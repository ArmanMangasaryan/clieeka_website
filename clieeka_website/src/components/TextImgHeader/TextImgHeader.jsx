import  TextImgCss from "./TextImgHeader.module.css"
import img from "../../images/img5.jpeg"

const TextImgHeader = () => {


    return(
        <div className={TextImgCss.parentDiv}>
            <div>
                <h1 className={TextImgCss.parentText}>Немного о нас</h1>
                <h2 className={TextImgCss.toppage}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum diam pretium risus, ultrices felis a. Adipiscing maecenas mattis ullamcorper magnis eget varius. At lobortis tristique mattis orci aenean. Pretium, posuere tristique id potenti ac. Ac praesent arcu vitae arcu. Velit ut et, leo, augue bibendum euismod in. Turpis massa, commodo vestibulum bibendum amet orci velit, risus. Semper mauris curabitur auctor id amet mauris lacus. Ut quis nisi, ac consequat sed massa egestas. Sed adipiscing scelerisque enim, id amet eget. Ipsum dui a bibendum quisque in.
                <span className={TextImgCss.page}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum diam pretium risus, ultrices felis a. Adipiscing maecenas mattis ullamcorper magnis eget varius. At lobortis tristique mattis orci aenean. Pretium, posuere tristique id potenti ac. 
                </span>

                </h2>
            </div>
            <img src={img} alt=""  className={TextImgCss.img}/>
        </div>
    )
}

export default TextImgHeader
