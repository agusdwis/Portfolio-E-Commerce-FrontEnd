import React, {Fragment} from "react";

// import static files
import '../assets/styles/Search.css'

export const Search = () => {
    return(
        <Fragment>
            <form className="form-inline" >
                <div className="input-group">
                    <input type="text" className="form-control my-search" placeholder="Cari Buku, Judul Buku, Penulis"/>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-outline-secondary"><i className="fa fa-search"/>
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
};

export const BookSearch = () => {
    return(
        <Fragment>
            <div className="book-search my-5">
                <div className="container">
                    <form action="/">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <input name="search" value="" type="text" className="form-control" id="keyword"
                                           placeholder="Book Title"/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <select name="product_cat" id="product_cat" className="form-control">
                                        <option value="0">Book Category</option>
                                        <option className="level-0" value="drama">Drama</option>
                                        <option className="level-1" value="inspiration">&nbsp;&nbsp;&nbsp;Inspiration
                                        </option>
                                        <option className="level-1" value="love-story">&nbsp;&nbsp;&nbsp;Love Story</option>
                                        <option className="level-0" value="life-style">Life Style</option>
                                        <option className="level-1" value="business">&nbsp;&nbsp;&nbsp;Business</option>
                                        <option className="level-1" value="culture">&nbsp;&nbsp;&nbsp;Culture</option>
                                        <option className="level-0" value="science">Science</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <select name="book_author" id="book_author" className="form-control">
                                        <option value="0">Book Author</option>
                                        <option className="level-0" value="atkia">Atkia</option>
                                        <option className="level-0" value="brian-owell">Brian O’Well</option>
                                        <option className="level-0" value="saifudin-a">Saifudin A.</option>
                                        <option className="level-0" value="sarfaraz">Sarfaraz</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <input type="hidden" name="post_type" value="product"/>
                                        <button type="submit" className="btn btn-primary btn-block">
                                            <i className="fa fa-search"/> &nbsp;
                                            Find Book
                                        </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="vc_row-full-width vc_clearfix"/>
        </Fragment>
    )
};