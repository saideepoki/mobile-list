// Copyright 2024 Saideep
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import MobileList from './MobileList'

function Mobile () {
    const images = [
        {
            image: 'https://m.media-amazon.com/images/I/71hj88T5aBL._AC_UY436_FMwebp_QL65_.jpg',
            name:  'Redmi 13C',
            price: '₹7,699'
        },

        {
            image: 'https://m.media-amazon.com/images/I/71nrf4zgq5L._AC_UY436_FMwebp_QL65_.jpg',
            name:  'Redmi Note 13 pro+',
            price: '₹30,999'
        }
    ]
    return (
        <div>
            {
              images.map((elem) => {
                return (
                 <MobileList 
                 image ={elem.image} 
                 name ={elem.name} 
                 price = {elem.price} 
                 />
                )
              })
            }
        </div>
    )
}

export default Mobile;