let innerHtml = '';
onLoad1();
function onLoad1() {
    productsCall();
    productsSliderWithPrice();
    scrollBars();
    // addToBag(itemProduct);
}
function productsSliderWithPrice() {
    const productElement = document.querySelector('.productsSliderWithPrice .products');
    // let nameHeader = document.createElement('h2')
    // let divElement = document.createElement('div')
    // boxElement.appendChild(nameHeader);
    // boxElement.appendChild(divElement);
    // divElement.className = "products";
    // nameHeader.innerText = "Deals Under $25";
    allData.forEach(item => {
        if (item.productsSliderWithPrice) {
            item.productsSliderWithPrice.forEach(data => {
                let productCard = document.createElement('div')
                productCard.className = "product-card";

                let imageContainer = document.createElement('div')
                imageContainer.className = "product-img-container";
                let imgElement = document.createElement('img')
                imageContainer.appendChild(imgElement);
                imgElement.src = data.box_image;
                imgElement.alt = "";

                let productOffer = document.createElement('div')
                productOffer.className = "product-offer";
                let offer = document.createElement('p')
                productOffer.appendChild(offer);
                offer.innerText = data.item_Offer;
                let Deal = document.createElement('span')
                productOffer.appendChild(Deal);
                Deal.innerText = " Deal";

                let paragraph = document.createElement('p')
                paragraph.className = "product-price";
                let justPrice = document.createElement('span')
                paragraph.appendChild(justPrice)
                // justPrice.innerText = data.prevListPrice;
                paragraph.innerText = "$" + data.prevListPrice + " " + "ListPrice:" + data.ListPrice;
                let shortHeading = document.createElement('h4')
                shortHeading.innerText = "This product is best for you";
                // Append Part---
                // divElement.appendChild(productCard)
                // boxElement.appendChild(productCard);
                productCard.appendChild(imageContainer);
                productCard.appendChild(productOffer);
                productCard.appendChild(paragraph);
                productCard.appendChild(shortHeading);
                productElement.appendChild(productCard);
                // let imgElement = document.createElement('img')
                // divElement.appendChild(imgElement);
                // imgElement.src = data.product_Image;
                // imgElement.alt = "";
            });
            // productElement.appendChild(productCard); 
        }
    });

}
function scrollBars() {
    const scrollContainers = document.querySelectorAll('.products');
    for (const item of scrollContainers) {
        item.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            item.scrollLeft += evt.deltaY;
        });
    }
}
function productsCall() {
    let displayImg = document.querySelector('.productDisplay');
    allData.forEach(item => {
        if (item.products1) {
            item.products1.forEach(data => {
                innerHtml += `<div class="productImage">
        <div class="productIcons">
            <img src="${data.productImg}" alt="" width="60">
            <img src="${data.productImg}" alt="" width="60">
            <img src="${data.productImg}" alt="" width="60">
            <img src="${data.productImg}" alt="" width="60">
            <img src="${data.productImg}" alt="" width="60">
            <img src="${data.productImg}" alt="" width="60">
        </div>
        <div class="mainImage">
            <img src="${data.productImg}" alt="" width="600">
            <div class="productsColor">
                <div class="option"><img src="${data.productImg}" alt="" width="60">
                    <p class="Black">Black</p>
                </div>
                <div class="option"><img src="${data.productImg}" alt="" width="60">
                    <p class="Green">Green</p>
                </div>
                <div class="option"><img src="${data.productImg}" alt="" width="60">
                    <p class="Red">Red</p>
                </div>
                <div class="option"><img src="${data.productImg}" alt="" width="60">
                    <p class="Blue">Blue</p>
                </div>
                <div class="option"><img src="${data.productImg}" alt="" width="60">
                    <p class="White">White</p>
                </div>
                <div class="option"><img src="${data.productImg}" alt="" width="60">
                    <p class="Gray">Gray</p>
                </div>
            </div>
        </div>
    </div>
    <div class="product2">
        <div class="productInformation">
            <a class="brandStore" href="#">Visit the SELLORIA Store</a>
            <p class="productTitle">${data.productName}</p>
            <div class="productRating">
                <div>
                    <div>${data.rating.rating1}<img src="${data.rating.ratingImg}" alt="" height="20px"></div>
                    <p> ${data.rating.searchRating} ratings | Search this page</p>
                </div>
                <p><span>${data.rating.boughtItem}</span>bought in past month</p>
                <h5>${data.rating.boughtPreviousItem} bought in past month</h5>
                <hr>
            </div>
            <div class="productPrice">
                <span class="deal">Limited time deal</span>
                <div class="price">
                    <p>${data.productPrice.offer}</p>
                    <h1>${data.productPrice.productsPrice}</h1>
                </div>
                <h5>M.R.P.: <span>${data.originalPrice}</span></h5>
                <div class="fulfilled">
                    <img class="amazonImg"
                        src="/Total_Image/all image/newbags/images.png"
                        alt=""><span>Fulfilled</span>
                </div>
                <p class="inclusive">Inclusive of all taxes</p>
    
                <span class="coupon"><input type="checkbox">
                    <p>Apply ₹5 coupon Terms</p>
                </span>
                <a href="#">Save up to 4% with business pricing and GST input tax credit. Sign up for a free
                    Amazon
                    Business account</a>
                <hr>
            </div>
            <div class="productInfo">
                <div class="p">Colour: <p>Gray</p>
                </div>
                <div class="morePic">
                    <div class="pic1"><img src="${data.morePic.productImg1}"
                            alt="">
                        <p>${data.morePic.productPrice1}</p>
                    </div>
                    <div class="pic1"><img src="${data.morePic.productImg2}"
                            alt="">
                        <p>${data.morePic.productPrice2}</p>
                    </div>
                    <div class="pic1"><img src="${data.morePic.productImg3}"
                            alt="">
                        <p>${data.morePic.productPrice3}</p>
                    </div>
                </div>
                <div class="about">
    
                    <ul>
                        <li> <span>${data.productInfo.productName1} <span>: <span class="title">${data.productInfo.productInfo1}</span></li>
                        <li> <span>${data.productInfo.productName2} </span>: <span class="title">${data.productInfo.productInfo2}</span></li>
                        <li><span>${data.productInfo.productName3} </span>-<span class="title">${data.productInfo.productInfo3}
                        </span></li>
                        <li><span>${data.productInfo.productName4} </span>- <span class="title">${data.productInfo.productInfo4}</li>
                        <li><span>${data.productInfo.productName5} </span>- <span class="title"> ${data.productInfo.productInfo5}
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cutomerRating">
                <p>Customer ratings by feature</p>
                <div class="rateTitle">
                    <div class="rate1">
                        <span>${data.customerRatings.qualityName1}</span>
                        <img src="${data.customerRatings.qualityImg1}"
                            alt="">
                        <p class="newP">${data.customerRatings.qualityRating1}</p>
                    </div>
                    <div class="rate2">
                        <span>${data.customerRatings.qualityName2}</span>
                        <img src="${data.customerRatings.qualityImg1}"
                            alt="">
                        <p class="newP">${data.customerRatings.qualityRating2}</p>
                    </div>
                    <div class="rate3">
                        <span>${data.customerRatings.qualityName3}</span>
                        <img src="${data.customerRatings.qualityImg1}"
                            alt="">
                        <p class="newP">${data.customerRatings.qualityRating3}</p>
                    </div>
                    <div class="rate4">
                        <span>${data.customerRatings.qualityName4}</span>
                        <img src="${data.customerRatings.qualityImg1}"
                            alt="">
                        <p class="${data.customerRatings.qualityRating4}">4.2</p>
                    </div>
                </div>
                <div class="review"><a href="#">See all reviews</a></div>
                <div class="allReview">
                    <i class="fa-solid fa-message hello"></i><a href="#"> Report an issue with this
                        product</a>
                    <hr>
                </div>
            </div>
            <div class="anotherProduct">
                <p class="similar">Similar item to consider</p>
                <div class="totat">
                    <div class="picWithName">
                        <img class="capp" src="${data.similaritem.itemImg}"
                            alt="">
                    </div>
                    <div class="other">
                        <a href="#">${data.similaritem.itemName}</a>
                        <div><img class="star" src="${data.similaritem.starImg}"
                                alt="">
                        </div>
                        <div class="rupee">
                            <p>${data.similaritem.itemPrice}</p>
                            <p class="prime">Prime</p>
                        </div>
                    </div>
    
                </div>
    
            </div>
            <hr>
        </div>
        <div class="column">
            <div class="productPurchase">
                <div class="title">
                    <h3>Buy new:</h3>
                </div>
                <h1 class="price">${data.columnInfo.price1}<span>${data.columnInfo.price2}</span></h1>
                <div class="fulfilled1">
                    <img class="amazonImg"
                        src="/Total_Image/all image/newbags/picc6.jpg"
                        alt=""><span>Fulfilled</span>
                </div>
                <div class="gap">
                    <p><a href="#">FREE delivery</a><span><b>${data.columnInfo.deliveryDate}</b></span><a href="#">
                            Details</a></p>
                </div>
                <div class="gap2">
                    <p>Or fastest delivery <b>${data.columnInfo.quickDeleveryDate}</b> Order within <span>${data.columnInfo.quickDeleveryTime}</span><a href="#">
                            Details</a></p>
                </div>
                <div class="gap3">
                    <span><i class="fa-solid fa-location-dot location"></i><a href="#">
                            Deliver to ${data.columnInfo.location}</a></span>
                </div>
                <div class="stock">
                    <span>In stock</span>
                    <div class="more">
                        <div>
                            <p>Ships from</p>
                            <p>
                                Amazon</p>
                        </div>
                        <div>
                            <p>Sold by</p>
                            <p><a href="#">
                                    Cocoblu Retail</a></p>
                        </div>
                    </div>
                </div>
                <div class="checkbox">
                    <p>Quantity:</p>
                    <select name="selection" id="P">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <div class="button">
                    <div class="button1" onclick="${data.products1}"><button>Add to Card</button></div>
                    <div class="button2"><button>Buy Now</button></div>
                </div>
                <div class="lastDiv">
                    <img alt=""
                        src="${data.lastDivInfo.itemImg}"
                        height="15px">
                    <a href="#">Secure transaction</a>
                </div>
                <div class="checkBox">
                    <input type="checkbox">
                    <p>Add gift options</p>
                </div>
                <hr>
                <hr>
                <div class="foundNumber">
                    <div class="input"><input type="text" placeholder="Add to Wish List"></div>
                    <div class="select"><select name="selectSome" id="#"></select></div>
                </div>
            </div>
            <div class="nextColumn">
                <div class="first">
                    <p>Other sellers on Amazon</p>
                </div>
                <hr>
                <div class="second">
                    <p>New (3) from ${data.lastDivInfo.newItemPrice} <b>FREE Delivery.</b></p>
                    <select name="NO" id="#"></select>
                </div>
    
            </div>
            <div class="thirdColumn">
                <div class="img">
                    <img src="${data.thirdColumn.itemImg}" alt="">
                </div>
                <div class="p">
                    <p>${data.thirdColumn.itemName}</p>
                </div>
                <div class="rupee">
                    <p class="rup">${data.thirdColumn.itemPrice1}<span>${data.thirdColumn.itemPrice2}</span></p>
                    <p class="crossPrice">${data.thirdColumn.crossPrice}</p>
                    <p class="prime">Prime</p>
                </div>
                <div class="offer">
                    <p class="offf">save 5%</p>
                    <p class="coupan">with Coupan</p>
                </div>
            </div>
        </div>
    </div>`;
            });
        }

    });
    displayImg.innerHTML = innerHtml;
}