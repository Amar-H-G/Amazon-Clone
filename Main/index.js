let innerHtml = '';

totalDisplay();
function totalDisplay() {
    
    onLoad();
    function onLoad() {
        displaySliderImage();
        boxElement();
        boxElement1();
        productsSlider();
        scrollBars();
        boxRow2();
        productsSliderWithPrice();
        productsSlider2();
        boxElement2();
        productsSlider3();
        moreAccessories();
    }
    function displaySliderImage() {
        
        // collectAllData();
        const sliderElement = document.querySelector(".scrollBar");
        // Put into the html
        console.log(sliderElement)
        let newUL = document.createElement('ul')
        newUL.className = "header-slider-image";
        sliderElement.appendChild(newUL);
        allData.forEach(item => {
            console.log(item)
            if (item.slider) {
                console.log(item.slider)
                item.slider.forEach(data => {
                    let imgElement = document.createElement('img')
                    imgElement.className = "header-img";
                    newUL.appendChild(imgElement);
                    imgElement.alt = "";
                    imgElement.src = data.image_slide;
                });
            }
        });
        button();

    }

    function button() {
        let imagesAll = document.querySelectorAll('.header-img');
        let imageLength = imagesAll.length;
        let num = 0;
        function showSlides() {
            imagesAll.forEach((image, index) => {
                if (index == num) {
                    image.style.display = "block";
                }
                else {
                    image.style.display = "none";
                }
            })
        }
        showSlides();
        function prevButton() {
            let prevButton = document.querySelectorAll('.controll_prev');
            num--;
            if (num < 0) {
                num = imageLength - 1;
            }
            showSlides()
        }
        function nextButton() {
            let nextButton = document.querySelectorAll('.controll_next');
            num++;
            if (num == imageLength - 1) {
                num = 0;
            }
            showSlides()
        }
        function tap() {
            let tapButton = document.querySelector('.header-slider .scrollBar');
            const prevBtn = document.createElement('button')
            prevBtn.className = "controll_prev";
            prevBtn.innerHTML = '&#129144';
            prevBtn.onclick = prevButton;
            tapButton.appendChild(prevBtn);
            const nextBtn = document.createElement('button')
            nextBtn.className = "controll_next";
            nextBtn.innerHTML = '&#129146';
            nextBtn.onclick = nextButton;
            tapButton.appendChild(nextBtn);
        }
        tap();
    }
    // Second box of the Amazon
    function boxElement() {
        const boxElement = document.querySelector(".bos-row.header-box");
        allData.forEach(item => {
            if (item.boxItemColumn) {
                item.boxItemColumn.forEach(data => {
                    let divElement = document.createElement('div')
                    let nameHeader = document.createElement('h3')
                    let imgElement = document.createElement('img')
                    let anchorElement = document.createElement('a')//for background image
                    anchorElement.href = "/products/products.html";
                    let anchour = document.createElement('a')//for shop more title
                    divElement.className = "box-column";
                    nameHeader.innerText = data.box_name;
                    boxElement.appendChild(divElement);
                    divElement.appendChild(nameHeader);
                    divElement.appendChild(anchorElement);
                    anchorElement.appendChild(imgElement);//imgElement
                    imgElement.src = data.box_image;
                    imgElement.alt = "";
                    divElement.appendChild(anchour);
                    // anchour.href = data.link;
                    anchour.textContent = "Shop More";
                });
            }
        });

    }
    // Third box on the Amazon App
    function boxElement1() {
        const boxElement = document.querySelector(".box1-row");
        allData.forEach(item => {
            if (item.boxItemRow) {
                item.boxItemRow.forEach(data => {
                    let divElement = document.createElement('div')
                    let nameHeader = document.createElement('h3')
                    let imgElement = document.createElement('img')
                    let anchour = document.createElement('a')
                    boxElement.appendChild(divElement);
                    divElement.appendChild(nameHeader);
                    divElement.appendChild(imgElement);
                    divElement.appendChild(anchour);
                    divElement.className = "box-column";
                    nameHeader.innerText = data.box_name;
                    imgElement.src = data.box_image;
                    imgElement.alt = "";
                    anchour.href = data.link;
                    anchour.textContent = "Shop More";
                });
            }
        });

    }
    //Fourth Boxex in the Amazon App
    function productsSlider() {
        const boxElement = document.querySelector(".products-slider");
        let nameHeader = document.createElement('h2')
        let divElement = document.createElement('div')
        boxElement.appendChild(nameHeader);
        boxElement.appendChild(divElement);
        divElement.className = "products";
        nameHeader.innerText = "Best Sellers in Sports & Outdoors";
        allData.forEach(item => {
            if (item.productSlider) {
                item.productSlider.forEach(data => {
                    let imgElement = document.createElement('img')
                    divElement.appendChild(imgElement);
                    imgElement.src = data.product_Image;
                    imgElement.alt = "";
                });
            }
        });
    }
    function scrollBars(){
        const scrollContainers = document.querySelectorAll('.products');
        for (const item of scrollContainers){
            item.addEventListener('wheel', (evt)=>{
                evt.preventDefault();
                item.scrollLeft += evt.deltaY;
            });
        }
    }
    // function scrollBars(){
    //     const scrollContainers = document.querySelectorAll('');
    //     for (const item of scrollContainers){
    //         item.addEventListener('wheel', (evt)=>{
    //             evt.preventDefault();
    //             item.scrollLeft += evt.deltaY;
    //         });
    //     }
    // }
    //Fifth Box in The Amazon App
    function boxRow2() {
        const boxElement = document.querySelector(".box2-row");
        allData.forEach(item => {
            if (item.boxItemRow2) {
                item.boxItemRow2.forEach(data => {
                    let divElement = document.createElement('div')
                    let nameHeader = document.createElement('h3')
                    let imgElement = document.createElement('img')
                    let anchour = document.createElement('a')
                    divElement.className = "box-column";
                    nameHeader.innerText = data.box_name;
                    boxElement.appendChild(divElement);
                    divElement.appendChild(nameHeader);
                    divElement.appendChild(imgElement);
                    divElement.appendChild(anchour);
                    imgElement.src = data.box_image;
                    imgElement.alt = "";
                    anchour.href = data.link;
                    anchour.textContent = "Shop More";
                });
            }
        });


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
    function productsSlider2() {
        const boxElement = document.querySelector(".productsSlider2");
        let nameHeader = document.createElement('h2')
        let divElement = document.createElement('div')
        boxElement.appendChild(nameHeader);
        boxElement.appendChild(divElement);
        divElement.className = "products";
        nameHeader.innerText = "Best Sellers in Home Accessories";
        allData.forEach(item => {
            if (item.productSlider2) {
                item.productSlider2.forEach(data => {
                    let imgElement = document.createElement('img')
                    divElement.appendChild(imgElement);
                    imgElement.src = data.product_Image;
                    imgElement.alt = "";
                });
            }
        });

    }
    function boxElement2() {
        const boxElement = document.querySelector(".boxElement");
        allData.forEach(item => {
            if (item.boxItemRow3) {
                item.boxItemRow3.forEach(data => {
                    let divElement = document.createElement('div')
                    let nameHeader = document.createElement('h3')
                    let imgElement = document.createElement('img')
                    let anchour = document.createElement('a')
                    boxElement.appendChild(divElement);
                    divElement.appendChild(nameHeader);
                    divElement.appendChild(imgElement);
                    divElement.appendChild(anchour);
                    divElement.className = "box-column";
                    nameHeader.innerText = data.box_name;
                    imgElement.src = data.box_image;
                    imgElement.alt = "";
                    anchour.href = data.link;
                    anchour.textContent = "Shop More";
                });
            }
        });

    }
    function productsSlider3() {
        const boxElement = document.querySelector(".productsSlider3");
        let nameHeader = document.createElement('h2')
        let divElement = document.createElement('div')
        boxElement.appendChild(nameHeader);
        boxElement.appendChild(divElement);
        divElement.className = "products";
        nameHeader.innerText = "Bags & Trolly";
        allData.forEach(item => {
            if (item.productSlider3) {
                item.productSlider3.forEach(data => {
                    let imgElement = document.createElement('img')
                    divElement.appendChild(imgElement);
                    imgElement.src = data.product_Image;
                    imgElement.alt = "";
                });
            }
        });

    }
    function moreAccessories() {
        const boxElement = document.querySelector(".moreAccessories");
        let nameHeader = document.createElement('h2')
        let divElement = document.createElement('div')
        boxElement.appendChild(nameHeader);
        boxElement.appendChild(divElement);
        divElement.className = "products";
        nameHeader.innerText = "Shoes, Watch & Jwellary";
        allData.forEach(item => {
            if (item.moreAccessories) {
                item.moreAccessories.forEach(data => {
                    let imgElement = document.createElement('img')
                    divElement.appendChild(imgElement);
                    imgElement.src = data.product_Image;
                    imgElement.alt = "";
                });
            }
        });
    }
}