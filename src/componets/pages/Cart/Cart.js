import React, { useEffect, useRef, useState } from 'react'

function Cart() {
  const [productCart, setProductCart] = useState([])
  const [isChangeQuantity, setISChangeQuantity] = useState(false)

  const fixQuantity = (index, param) => {
    if (param == "+") {
      setProductCart(() => {
        let number = +productCart[index].quantities
        number++
        productCart[index].quantities = number
        return productCart
      })
      console.log(productCart)
      setISChangeQuantity(!isChangeQuantity)
    } else if (param == "-") {

      setProductCart(() => {
        productCart[index].quantities++
        return productCart
      })
      setISChangeQuantity(!isChangeQuantity)
    }
    // let listProductCart = JSON.parse(localStorage.getItem("productCart") || "[]")

    //   let productFind = listProductCart.find(item => item.id === product.id)
    //   console.log(productFind)
    localStorage.setItem("productCart", JSON.stringify(productCart))
    let product = JSON.parse(localStorage.getItem("productCart") || "[]")
    setProductCart(product)
  }

  useEffect(() => {
    let product = JSON.parse(localStorage.getItem("productCart") || "[]")
    setProductCart(product)
  }, [isChangeQuantity])

  const [amount, setAmount] = useState(1)
  return (<>
    {/* <div class="container">
      <div class="titile-cart row justify-content-center ">
        <h2>Your Cart</h2>
      </div>
      <div class="row justify-content-between prod">
        {productCart.map(item => {
          return (<>
            <div class="col-lg-4 d-flex col-md-4">
              <img src={item.img} alt="" width="50%" />
              <div class="mt">
                <h6 onclick="changepage()">{item.name}</h6>
                <p>{item.discount}$</p>
                <p>{item}</p>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn" id="sub" onclick="changesub()">-</button>
                  <input type="text" value="1" class="num" id="qty" />
                  <button class="btn" id="add" onclick="changeadd()">+</button>
                </div>
              </div>

            </div>
            <div class="col-lg-2 col-md-1">
              <button type="button" class="close mt" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </>
          )
        })}
      </div>
      <div class="row justify-content-between prod">
        <div class="col-lg-4 d-flex col-md-4">
          <img src="img/g2.webp" alt="" width="50%" />
          <div class="mt">
            <h6>Signature Tee 2 - Blue</h6>
            <p>79$</p>
            <p>M</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button class="btn" id="sub" onclick="changesub1()">-</button>
              <input type="text" value="1" class="num" id="qty1" />
              <button class="btn" id="add" onclick="changeadd1()">+</button>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-1">
          <button type="button" class="close mt" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="row justify-content-between prod" id="def">
        <div class="col-lg-4 d-flex col-md-4">
          <img src="img/g3.webp" alt="" width="50%" />
          <div class="mt">
            <h6>TSUN LNY Firecracker Tee - White</h6>
            <p>99$</p>
            <p>L</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button class="btn" id="sub" onclick="changesub2()">-</button>
              <input type="text" value="1" class="num" id="qty2" />
              <button class="btn" id="add" onclick="changeadd2()">+</button>
            </div>
          </div>

        </div>
        <div class="col-lg-2 col-md-1">
          <button type="button" class="close mt" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <input type="text" placeholder="Note" id="input" />
        </div>
        <div class="col-lg-5 tl">
          <h3>Total: 247$</h3>
          <button type="submit" class="bt">Keep Buying</button>
          <button type="submit" class="bt" id="but">Prepayment</button>
        </div>
      </div>
    </div> */}
    {productCart.map((product, index) => {
      return (
        <><p>{product.name}</p>
          <div className={('btn-group')} role="group" aria-label="Basic example">
            <button class="btn" onClick={() => {
              fixQuantity(index, "-")
            }} id="sub" >-</button>
            <p type="text" className={('num')} id="qty" >{product.quantities}</p>
            <button class="btn" onClick={() => {
              fixQuantity(index, "+")
            }} id="add">+</button>
          </div></>
      )
    })}
  </>

  )
}

export default Cart