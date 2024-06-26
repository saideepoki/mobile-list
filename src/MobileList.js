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

import React from 'react';
import './MobileList.css'

function MobileList (props) {
    const {image, name, price} = props;
    return (
        <div className = "main">
            <img src = {image} alt = {name+"image"}/>
            <div>
            <p>{name}</p>
            <p>{price}</p>
            </div>
        </div>
    )
}

export default MobileList;